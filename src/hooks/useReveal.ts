import { useEffect } from "react";

/**
 * Marks any element carrying `.reveal` as shown once it enters the viewport.
 * One observer for the whole page rather than one per component.
 * Elements are revealed immediately if the browser lacks IntersectionObserver
 * or the visitor has asked for reduced motion, so content is never trapped.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.setAttribute("data-shown", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? 0);
          window.setTimeout(() => el.setAttribute("data-shown", "true"), delay);
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

/**
 * Tracks which sheet is currently in view, for the masthead index.
 * Uses IntersectionObserver instead of a scroll handler so it does no work
 * while the page is still.
 */
export function useActiveSheet(ids: string[], onChange: (id: string) => void) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));

        let best = "";
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) onChange(best);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, onChange]);
}
