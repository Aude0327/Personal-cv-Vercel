# Personal CV Website (Profile 2)

A calm, minimal personal CV website for **Aude Mar Hyra V. Busaco**, a 4th-year BSIT student at Davao del Norte State College, based in Panabo City, Davao del Norte, Philippines. Built as a course assignment.

## Live Website

**ADD AFTER DEPLOYMENT** (paste the public Vercel site URL here)

> `https://vercel.com/aude0327` is the Vercel account dashboard, not the deployed website.

## GitHub Repository

**ADD AFTER PUBLISHING** (suggested: `https://github.com/Aude0327/personal-cv-profile2`)

## Owner

- Name: Aude Mar Hyra V. Busaco
- Email: audemarhyra@gmail.com
- GitHub: https://github.com/Aude0327
- LinkedIn: https://www.linkedin.com/in/aude-mar-hyra-busaco-a55457447/

## Technologies

- React 18 + TypeScript
- Vite 5
- Plain CSS (no UI library, no paid API, no secret keys)
- Vercel for hosting

## Features

- Profile, basic information, education, skills, experience, project, achievements, GitHub, LinkedIn and email
- Floating sticky navigation with active-section highlight and a mobile menu
- Card layouts with subtle hover lift and scroll-reveal animation
- Responsive from phone to desktop, with no horizontal scrolling
- Keyboard accessible: skip link, visible focus states, semantic HTML
- Respects the "reduce motion" setting

## Setup (Zorin OS / VS Code)

Requires a current Node.js LTS release (20 or 22) and npm. Check with `node -v` and `npm -v`.

```bash
cd personal-cv-profile2
npm install
npm run dev        # development server, usually http://localhost:5173
npm run build      # type-checks and builds into dist/
npm run preview    # preview the production build locally
```

## Editing Content

Everything is in **`src/data/content.ts`**: text, dates, links, skills and experience. Components do not need to change.

## Replacing the Two Image Placeholders

Only two images exist on this site: the **profile portrait** and the **NSTP Feeding Program (May 2024) photo**.

1. Create the folder `public/images/` and copy your files into it, for example:
   - `public/images/profile.jpg`
   - `public/images/nstp-feeding.jpg`
2. Open `src/data/content.ts`.
3. For the portrait (`profile.portrait`), change `src: null` to `src: "/images/profile.jpg"`.
4. For the NSTP photo (`achievements`, the "NSTP Feeding Program" entry), change `src: null` to `src: "/images/nstp-feeding.jpg"`.
5. Rewrite each `alt` to describe the real photo (who or what is shown).
6. Adjust framing if needed:
   - `objectFit: "cover"` fills the frame (may crop); `"contain"` shows the whole photo.
   - `objectPosition: "center top"` keeps a face in the frame; try `"center"`, `"top"`, or `"50% 30%"`.

Tip: use a portrait photo about 800 × 1000 px and an NSTP photo about 1200 × 675 px, under 500 KB each.

## Project Link

The Personal CV Website card shows "Coming soon" until `project.repoUrl` in `content.ts` is set. After your repository is public, replace `null` with its URL.

## Deployment

See `GUIDE.md` for step-by-step GitHub and Vercel instructions. Vercel settings: Framework **Vite**, Root Directory `./`, Build Command `npm run build`, Output Directory `dist`.

## Project Structure

```
personal-cv-profile2/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── public/favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── vite-env.d.ts
    ├── data/content.ts
    ├── hooks/ (useReveal.ts, useActiveSection.ts)
    └── components/ (Header, Hero, Section, Reveal, ImageSlot)
```
