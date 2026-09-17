import { profile } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__meta reveal">
          <span className="mono">
            {profile.city}, {profile.country}
          </span>
          <span className="hero__meta-sep" aria-hidden="true" />
          <span className="mono">{profile.discipline}</span>
          <span className="hero__meta-sep" aria-hidden="true" />
        </div>

        <h1 className="hero__title reveal" data-delay="60">
          <span className="hero__title-l1">Sibusiso</span>
          <span className="hero__title-l2">Mchunu</span>
        </h1>

        <div className="hero__band reveal" data-delay="140">
          <p className="hero__role">{profile.role}</p>
          <p className="lead hero__lead">{profile.statement}</p>
        </div>

        {/* <div className="hero__schematic reveal" data-delay="220">
          <RoutingSchematic />
          <figcaption className="hero__caption">
            <span className="mono">Fig. 01</span>
            <span>
              Routing logic from the Requisition Approval Engine. Product class forks the
              chain, value bands pick the tier, and a secondary approver picks up anything
              left standing.
            </span>
          </figcaption>
        </div> */}

        <div className="hero__actions reveal" data-delay="280">
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
