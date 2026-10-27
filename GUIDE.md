# Guide: Run, Commit and Deploy (Profile 2)

You can delete this file before submission; the site does not use it.

## Run locally (Zorin OS, VS Code)

1. Install Node.js LTS if needed (https://nodejs.org or your package manager).
2. Unzip the project, open the folder in VS Code, then open the terminal (Ctrl + `).

```bash
npm install
npm run dev       # open the address shown, usually http://localhost:5173
npm run build     # must finish without errors
npm run preview   # optional
```

## Genuine development stages to commit

Commit when each stage really works. Do not make empty or fake commits.

| # | Stage | Files | Sample message |
|---|-------|-------|----------------|
| 1 | Project setup | package.json, tsconfig.json, vite.config.ts, index.html, .gitignore, public/favicon.svg, src/vite-env.d.ts | `chore: set up Vite React TypeScript project` |
| 2 | Content and page structure | src/data/content.ts, src/main.tsx, src/App.tsx, src/components/Section.tsx | `feat: add CV content data and page sections` |
| 3 | Navigation and hero | Header.tsx, Hero.tsx, useActiveSection.ts | `feat: add floating navigation and hero profile` |
| 4 | Styling | src/styles.css | `style: add green theme, cards and responsive layout` |
| 5 | Motion and image slots | Reveal.tsx, useReveal.ts, ImageSlot.tsx | `feat: add scroll reveal and image placeholders` |
| 6 | Documentation | README.md, GUIDE.md | `docs: add README and setup instructions` |
| 7 | Real photos | public/images/*, src/data/content.ts | `feat: add portrait and NSTP photos` |
| 8 | Live link | README.md | `docs: add live Vercel URL` |

## Create the new public GitHub repository

Publishing needs you to sign in to GitHub yourself.

1. Go to https://github.com/new while signed in as **Aude0327**.
2. Repository name: `personal-cv-profile2`. Choose **Public**. Do not add a README or .gitignore (the project already has them).
3. In the project folder:

```bash
git init
git add .
git commit -m "chore: set up Vite React TypeScript project"
git branch -M main
git remote add origin https://github.com/Aude0327/personal-cv-profile2.git
git push -u origin main
```

For later stages, use `git add <files>`, `git commit -m "..."`, `git push`.

4. Set `project.repoUrl` in `src/data/content.ts` to the repository URL and add it to README.md.

## Deploy on Vercel

Publishing needs you to sign in to Vercel yourself (https://vercel.com/aude0327 is your dashboard).

1. In Vercel choose **Add New → Project** and import `Aude0327/personal-cv-profile2`.
2. Settings: Framework Preset **Vite**, Root Directory `./`, Build Command `npm run build`, Output Directory `dist`.
3. Click **Deploy**.
4. Copy the real website URL Vercel gives you (it ends in `.vercel.app`) and replace **ADD AFTER DEPLOYMENT** in README.md. Commit and push.

Submit two links: the live Vercel website and the GitHub repository.

## Final checks before submitting

- [ ] `npm run build` passes
- [ ] Every nav link scrolls to its section; mobile menu opens, closes, and Escape works
- [ ] Tab through the page: skip link first, focus outlines visible
- [ ] No horizontal scrollbar at about 375px, 768px and 1280px widths
- [ ] Reduce-motion on: content still appears, no animation
- [ ] GitHub and LinkedIn links open; email link opens your mail app
- [ ] Portrait and NSTP placeholders replaced with real photos and new alt text
- [ ] The only image slots are the portrait and NSTP photo
- [ ] README has the real live URL and GitHub link
