# Sibusiso Mchunu — Portfolio

Personal portfolio site. React 19 + TypeScript + Vite. No CSS framework, no
tracking, two runtime dependencies.

---

## Getting it running

Unzip into `D:\Projects\` (or wherever you keep work), then:

```
cd D:\Projects\sibusiso-mchunu-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Commands:

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server with hot reload on port 3000       |
| `npm run lint`    | Typecheck only, no build                      |
| `npm run build`   | Typecheck, then production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally               |

---

## Connect the contact form

The form is real, but it needs somewhere to post. Until you set this up it
tells visitors plainly that it isn't connected and points them to LinkedIn —
it never pretends to send.

1. Create a free form at https://formspree.io
2. Copy `.env.example` to `.env`
3. Paste your endpoint:

```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
VITE_REVISION=A
```

`.env` is gitignored. Restart the dev server after changing it — Vite only
reads env files at startup.

`VITE_REVISION` shows in the title block at the bottom of the page. Bump it
when you make a meaningful change, the way you would on a real drawing.

---

## Privacy

`src/data.ts` opens with a comment block explaining what is censored and why.
Read it before you publish. The short version:

- **Phone number** is not in the codebase at all.
- **Email** is masked for display. Real delivery goes through the form relay,
  so scrapers never get the address. Set `SHOW_RAW_EMAIL = true` in `data.ts`
  if you want it visible, and accept the spam.
- **Client names** are generalised where work was done under a Syspro
  engagement. The Work section says so openly.

Everything in `src/` ships to the visitor's browser. Nothing secret goes in
there — only `.env` values prefixed `VITE_` are injected at build time, and
those are also public once built. Never put a private API key in this project.

---

## Editing content

All copy lives in `src/data.ts`. You should not need to touch a component to
update your CV.

| To change            | Edit                            |
| -------------------- | ------------------------------- |
| Name, role, intro    | `profile`                       |
| Skills grid          | `skillGroups`                   |
| Jobs                 | `roles`                         |
| Projects             | `projects`                      |
| Degree, certs        | `education`, `credentials`      |

**Skills grid sizing:** each group has a `weight`. `1` is a wide tile spanning
half the row, `2` is a standard third. Keep two groups at weight `1` and the
rest at `2` so the rows stay full — the grid is six columns, wide tiles take
three, standard tiles take two.

**Project metrics:** hard numbers only. `18`, `16 → 30`, `real-time`. No
adjectives. If you can't put a number to it, it belongs in `detail` instead.

---

## Deploying

Vercel, Netlify and Cloudflare Pages all work with no configuration:

- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_CONTACT_ENDPOINT` in the host's environment variables panel

Do not upload `.env` to the host. Use their env settings panel instead.

---

## Structure

```
src/
├── data.ts                    All content. Start here.
├── types.ts                   Shapes for the content above.
├── index.css                  Design tokens: colour, type, scale, metrics.
├── sheets.css                 Component styles.
├── hooks/useReveal.ts         Scroll reveal + active-section tracking.
└── components/
    ├── Masthead.tsx           Sticky nav with sheet index.
    ├── Hero.tsx               Name, statement, schematic.
    ├── RoutingSchematic.tsx   The hand-drawn approval routing diagram.
    ├── Capability.tsx         Sheet 01 — weighted skills grid.
    ├── Record.tsx             Sheet 02 — expandable timeline.
    ├── Work.tsx               Sheet 03 — project case studies.
    ├── Credentials.tsx        Sheet 04 — degree, certs, interests.
    ├── Contact.tsx            Sheet 05 — the real form.
    └── TitleBlock.tsx         Footer as a drawing title block.
```

---

## Design notes

The site is built as a set of engineering drawing sheets: cool paper ground,
drafting blue ink, red pencil annotations. That choice comes from the work —
approval chains, integration layers and background services are schematic
things, not terminal things. Most developer portfolios are a dark terminal
with a glowing accent. This one deliberately is not.

The hero schematic is the routing logic from the Requisition Approval Engine,
including the real revision note about the defect where banding was evaluated
on unit price instead of line value. It is drawn rather than described because
the drawing is the work.

Constraints worth keeping if you extend it:

- **One accent.** Drafting blue for interactive and important things, red only
  for annotations and errors. Everything else is grey. When the accent appears,
  it should mean something.
- **Nothing below 11px.** The old site had 9px labels. They were unreadable.
- **Grid backgrounds and scroll reveals do not mix.** Tiles are laid out with a
  1px gap over a grid whose background is the hairline colour. If you fade in
  tiles individually you get a grey slab where the unrevealed ones sit. Reveal
  the whole grid as one unit.
- **Reduced motion is respected** via `prefers-reduced-motion` — the wire
  animation stops and reveals are instant. Keep it that way.

---

## Still to do

- Wire up the contact endpoint (above).
- Add a CV download. Put the PDF in `public/` and link it from the hero.
- Consider a keyless interactive demo to replace the old API playground. The
  previous version needed a Google API key, which either breaks for visitors
  or exposes the key in the bundle.
