import { skillGroups } from "../data";

export default function Capability() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section className="sheet" id="capability">
      <div className="sheet__inner">
        <div className="sheet__head reveal">
          <span className="sheet__no">Sheet 01</span>
          <h2 className="sheet__title">Capability</h2>
          <span className="sheet__count">{total} entries</span>
        </div>

        <p className="lead reveal" data-delay="60" style={{ marginBottom: "2.5rem" }}>
          Tile size follows depth, not enthusiasm. The two wide panels are where I spend
          almost every working day.
        </p>

        <div className="cap-grid reveal" data-delay="60">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className={`cap-tile cap-tile--w${group.weight}`}
            >
              <header className="cap-tile__head">
                <h3 className="cap-tile__name">{group.name}</h3>
                <span className="cap-tile__count mono">{group.items.length}</span>
              </header>
              <ul className="cap-tile__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
