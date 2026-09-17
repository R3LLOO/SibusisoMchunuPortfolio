import { projects } from "../data";

export default function Work() {
  return (
    <section className="sheet" id="work">
      <div className="sheet__inner">
        <div className="sheet__head reveal">
          <span className="sheet__no">Sheet 03</span>
          <h2 className="sheet__title">Work</h2>
          <span className="sheet__count">{projects.length} builds</span>
        </div>

        <p className="lead reveal" data-delay="60" style={{ marginBottom: "3rem" }}>
          Client names are withheld where the work was delivered under a Syspro
          engagement. The shape of each system is described in full.
        </p>

        <div className="work">
          {projects.map((p, i) => (
            <article key={p.id} className="work__item reveal" data-delay={String(i * 90)}>
              <div className="work__index">
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="work__rule" aria-hidden="true" />
              </div>

              <div className="work__main">
                <header className="work__head">
                  <h3 className="work__name">{p.name}</h3>
                  <p className="work__kind mono">{p.kind}</p>
                  <p className="work__context">
                    {p.context} <span className="work__year mono">{p.year}</span>
                  </p>
                </header>

                <p className="work__thesis">{p.thesis}</p>

                <dl className="work__metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="work__metric">
                      <dt className="work__metric-value">{m.value}</dt>
                      <dd className="work__metric-label mono">{m.label}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="work__detail">
                  {p.detail.map((d, k) => (
                    <li key={k}>{d}</li>
                  ))}
                </ul>

                <div className="work__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
