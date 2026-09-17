import { useCallback, useEffect, useState } from "react";
import { useActiveSheet } from "../hooks/useReveal";

const SHEETS = [
  { id: "capability", no: "01", label: "Capability" },
  { id: "record", no: "02", label: "Record" },
  { id: "work", no: "03", label: "Work" },
  { id: "credentials", no: "04", label: "Credentials" },
  { id: "contact", no: "05", label: "Contact" },
];

const IDS = SHEETS.map((s) => s.id);

export default function Masthead() {
  const [active, setActive] = useState("");
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);

  const onChange = useCallback((id: string) => setActive(id), []);
  useActiveSheet(IDS, onChange);

  useEffect(() => {
    const sentinel = document.getElementById("top");
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setLifted(!entry.isIntersecting),
      { rootMargin: "-90px 0px 0px 0px" },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`masthead${lifted ? " masthead--lifted" : ""}`} aria-label="Sheet index">
      <a className="masthead__mark" href="#top" onClick={() => setOpen(false)}>
        <span className="masthead__mark-name">S. Mchunu</span>
        <span className="masthead__mark-role mono">Software Developer</span>
      </a>

      <button
        className="masthead__toggle mono"
        aria-expanded={open}
        aria-controls="sheet-index"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Index"}
      </button>

      <ul id="sheet-index" className={`masthead__list${open ? " is-open" : ""}`}>
        {SHEETS.map((sheet) => (
          <li key={sheet.id}>
            <a
              href={`#${sheet.id}`}
              onClick={() => setOpen(false)}
              className={active === sheet.id ? "is-active" : undefined}
              aria-current={active === sheet.id ? "true" : undefined}
            >
              <span className="masthead__no">{sheet.no}</span>
              <span>{sheet.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
