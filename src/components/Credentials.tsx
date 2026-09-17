import { credentials, education, interests } from "../data";

export default function Credentials() {
  return (
    <section className="sheet" id="credentials">
      <div className="sheet__inner">
        <div className="sheet__head reveal">
          <span className="sheet__no">Sheet 04</span>
          <h2 className="sheet__title">Credentials</h2>
          <span className="sheet__count">Verified</span>
        </div>

        <div className="cred reveal" data-delay="60">
          <article className="cred__block">
            <h3 className="cred__label mono">Qualification</h3>
            <p className="cred__headline">{education.qualification}</p>
            <p className="cred__sub">{education.institution}</p>
            <p className="cred__sub cred__sub--faint mono">{education.completed}</p>
            <ul className="cred__majors">
              {education.majors.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </article>

          <article className="cred__block">
            <h3 className="cred__label mono">Certifications</h3>
            <ul className="cred__certs">
              {credentials.map((c) => (
                <li key={`${c.issuer}-${c.name}`} className="cred__cert">
                  <span className="cred__cert-name">{c.name}</span>
                  <span className="cred__cert-issuer mono">{c.issuer}</span>
                  <span
                    className={
                      c.state === "held" ? "cred__state" : "cred__state cred__state--wip"
                    }
                  >
                    {c.state === "held" ? "Held" : "In progress"}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="cred__block">
            <h3 className="cred__label mono">Reading into</h3>
            <div className="cred__interests">
              {interests.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
