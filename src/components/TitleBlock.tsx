import { profile } from "../data";

/**
 * Real drawing sheets end in a title block: who drew it, what it is, when,
 * and which revision. Same convention here, carrying the same information.
 */
export default function TitleBlock() {
  const revision = (import.meta.env.VITE_REVISION ?? "A").trim() || "A";
  const year = new Date().getFullYear();

  const cells = [
    { label: "Drawn by", value: profile.name },
    { label: "Sheet set", value: "Portfolio · 05 sheets" },
    { label: "Discipline", value: profile.discipline },
    { label: "Revision", value: revision },
    { label: "Issued", value: String(year) },
  ];

  return (
    <footer className="title-block">
      <div className="title-block__grid">
        {cells.map((cell) => (
          <div key={cell.label} className="title-block__cell">
            <span className="title-block__label mono">{cell.label}</span>
            <span className="title-block__value">{cell.value}</span>
          </div>
        ))}
      </div>
      <p className="title-block__foot mono">
        Built with React, TypeScript and Vite. No tracking, no analytics.
      </p>
    </footer>
  );
}
