import { useState } from "react";
import { profile, SHOW_RAW_EMAIL } from "../data";

const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();

type Status = "idle" | "sending" | "sent" | "error";

interface Fields {
  name: string;
  email: string;
  organisation: string;
  message: string;
}

const EMPTY: Fields = { name: "", email: "", organisation: "", message: "" };

export default function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState("");

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Add your name so I know who I'm replying to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      next.email = "This address won't receive a reply. Check it over.";
    if (fields.message.trim().length < 12)
      next.message = "Give me a sentence or two about what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!ENDPOINT) {
      setStatus("error");
      setFailure(
        "The form isn't connected yet, so this message would go nowhere. Reach me on LinkedIn in the meantime.",
      );
      return;
    }

    setStatus("sending");
    setFailure("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error(`Relay returned ${res.status}`);
      setStatus("sent");
      setFields(EMPTY);
    } catch {
      setStatus("error");
      setFailure(
        "The message didn't send. Try again, or reach me on LinkedIn if it keeps failing.",
      );
    }
  };

  return (
    <section className="sheet sheet--last" id="contact">
      <div className="sheet__inner">
        <div className="sheet__head reveal">
          <span className="sheet__no">Sheet 05</span>
          <h2 className="sheet__title">Contact</h2>
          <span className="sheet__count">Reply within two working days</span>
        </div>

        <div className="contact">
          <div className="contact__aside reveal">
            <p className="lead">{profile.positioning}</p>

            <dl className="contact__facts">
              <div>
                <dt className="mono">Based</dt>
                <dd>
                  {profile.city}, {profile.country}
                </dd>
              </div>
              <div>
                <dt className="mono">Email</dt>
                <dd className="contact__masked">
                  {SHOW_RAW_EMAIL ? "Set in data.ts" : profile.emailMasked}
                  {!SHOW_RAW_EMAIL && (
                    <span className="annotate contact__masked-note">
                      masked — use the form
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="mono">Elsewhere</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  {" · "}
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="contact__form reveal" data-delay="80" onSubmit={submit} noValidate>
            <div className="field-row">
              <label className="field">
                <span className="field__label mono">Your name</span>
                <input
                  type="text"
                  value={fields.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  autoComplete="name"
                />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </label>

              <label className="field">
                <span className="field__label mono">Email</span>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                />
                {errors.email && <span className="field__error">{errors.email}</span>}
              </label>
            </div>

            <label className="field">
              <span className="field__label mono">
                Organisation <span className="field__opt">optional</span>
              </span>
              <input
                type="text"
                value={fields.organisation}
                onChange={(e) => set("organisation", e.target.value)}
                autoComplete="organization"
              />
            </label>

            <label className="field">
              <span className="field__label mono">What do you need built?</span>
              <textarea
                rows={5}
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </label>

            <div className="contact__submit">
              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="contact__ok" role="status">
                  Sent. I'll come back to you within two working days.
                </p>
              )}
              {status === "error" && (
                <p className="contact__fail" role="alert">
                  {failure}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
