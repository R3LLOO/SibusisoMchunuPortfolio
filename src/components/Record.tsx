import { useState } from "react";
import { roles } from "../data";

export default function Record() {
  const [openId, setOpenId] = useState<string>(roles[0].id);

  return (
    <section className="sheet" id="record">
      <div className="sheet__inner">
        <div className="sheet__head reveal">
          <span className="sheet__no">Sheet 02</span>
          <h2 className="sheet__title">Record</h2>
          <span className="sheet__count">{roles.length} positions · Syspro</span>
        </div>

        <ol className="record">
          {roles.map((role, i) => {
            const isOpen = openId === role.id;
            return (
              <li
                key={role.id}
                className={`record__item${isOpen ? " is-open" : ""} reveal`}
                data-delay={String(i * 80)}
              >
                <div className="record__spine" aria-hidden="true">
                  <span className="record__node" />
                </div>

                <div className="record__body">
                  <button
                    className="record__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : role.id)}
                  >
                    <span className="record__dates mono">
                      {role.from} — {role.to}
                    </span>
                    <h3 className="record__title">{role.title}</h3>
                    <span className="record__company mono">{role.company}</span>
                    <p className="record__thesis">{role.thesis}</p>
                    <span className="record__hint mono" aria-hidden="true">
                      {isOpen ? "− Collapse" : `+ ${role.duties.length} duties`}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="record__detail">
                      <ul className="record__duties">
                        {role.duties.map((duty, d) => (
                          <li key={d}>{duty}</li>
                        ))}
                      </ul>
                      <div className="record__stack">
                        {role.stack.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
