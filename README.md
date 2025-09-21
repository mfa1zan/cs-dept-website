[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1f2cae-cb76-47c1-8632-86c7644d9257/deploy-status)](https://app.netlify.com/projects/csdeptuos/deploys)

# CS Department Website

> A fast, content-first site for the Computer Science Department, built with Astro. Beginner-friendly — follow the Quick Start to run the site locally.

- Built with Astro + TypeScript
- Content via Markdown/MDX and optional Decap CMS at /admin
- Useful tools: searchable Timetable, CGPA Calculator, Resource Library

## Quick Start (Beginner Friendly)

1) Install prerequisites
- Install Node (or Bun). We recommend Bun for speed: https://bun.sh

2) Install dependencies (from the project root)

```bash
bun install
```

3) Start the dev server

```bash
bun dev
```

4) Open the site
- Visit http://localhost:4321
- Edit files under src/pages or src/components and your changes will hot-reload

5) Build a production version (optional)

```bash
bun build
bun preview
```

## Project Structure

```text
cs-dept-website/
├─ public/                  # Static files served as-is
│  └─ admin/                # Decap CMS (Git Gateway)
├─ src/
│  ├─ components/           # UI + tool components
│  │  ├─ layout/            # Header, Footer, etc.
│  │  ├─ tools/             # Thin wrappers for heavy tools
│  │  ├─ CGPACalculator.astro (full component)
│  │  └─ ResourceLibrary.astro (full component)
│  ├─ content/              # Markdown/MDX + collections
│  │  ├─ config.ts          # Zod schemas (news, events)
│  │  └─ news/, events/     # Example entries
│  ├─ layouts/              # Base page layout
│  ├─ pages/                # Routes (e.g., /, /news, /events)
│  │  └─ timetable.astro    # Searchable timetable
│  ├─ styles/               # Global CSS
│  └─ utils/                # Utilities (timetable utils, etc.)
├─ package.json
└─ netlify.toml             # Hosting config
```

## Run and Contribute

Anyone can contribute. If you're new to GitHub, follow this simple flow:

1) Fork the repo (on GitHub) and clone your fork to your computer.
2) Create a branch for your change:

```bash
git checkout -b feat/my-change
```

3) Make edits and run locally:

```bash
bun dev
```

4) Format and lint before committing:

```bash
bun run format
bun run lint:fix
```

5) Commit with a clear message and push:

```bash
git add -A
git commit -m "feat: brief description of your change"
git push origin feat/my-change
```

6) Open a Pull Request on GitHub. Describe what you changed and why.

## Content: Markdown and MDX

- Add news: create a file under src/content/news with frontmatter (title, description, publishDate, category, featured, author).
- Add events: create a file under src/content/events with frontmatter (title, description, date, time, optional endTime, location, type, registrationRequired, organizer, optional society, optional capacity).
- Use .md for simple content and .mdx for interactive content (you can embed components in MDX).

## Admin (Decap CMS)

- Visit /admin for a lightweight CMS UI (Git Gateway).
- Configure collections in public/admin/config.yml when ready to manage content through the CMS.

## Useful Scripts

```bash
# Dev server
bun dev

# Build / Preview
bun build
bun preview

# Formatting and linting
bun run format
bun run format:check
bun run lint
bun run lint:fix
bun run check-format
```

## Troubleshooting

- Port already in use: stop other dev servers or change the port via `bun dev -- --port 4322`.
- Typescript/ESLint errors: run `bun run lint:fix` and check file paths, imports, and frontmatter blocks in .astro files.
- CMS not saving: ensure you have write access (Git Gateway) and your `public/admin/config.yml` collections are set up.
- Blank timetable: check public/parsed/*.json exists and your dataset is selectable.

## Code of Conduct

Be respectful and constructive. Help beginners onboard. Use clear commit messages and focused Pull Requests.

---

Maintained by CS students. Contributions are welcome!
