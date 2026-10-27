# Personal CV Website

A calm, minimal personal CV website for **Aude Mar Hyra V. Busaco**, a 4th-year BSIT student at Davao del Norte State College, based in Panabo City, Davao del Norte, Philippines. Built as a course assignment.

## Live Website

https://personal-cv-vercel-sigma.vercel.app

## GitHub Repository

https://github.com/Aude0327/Personal-cv-Vercel

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
