# Civil Engineering Portfolio

A static, dependency-free portfolio site (HTML/CSS/JS only) built for GitHub Pages. No build step, no framework — edit the files directly.

Four parts: **Introduction**, **Skills & Tools**, **Projects**, **Contact**.

## File structure

```
.
├── index.html            # all page content
├── css/style.css         # design system + layout
├── js/script.js          # nav menu + active-link highlighting only
└── assets/
    ├── projects/         # project card images
    └── images/           # spare folder for anything else
```

## Editing each part

Open `index.html` — each section is clearly marked with an HTML comment (`<!-- ================= ... ================= -->`) telling you what's editable and how.

- **Introduction** — one block near the top. Edit your name, title, and the description paragraph freely; write as much or as little as you want. The résumé button points to `assets/Your-Name-Resume.pdf` — replace that file with your real résumé (keep the filename, or edit the `href` next to it).

- **Skills & Tools** — a `.skill-group` is one category (e.g. "Structural Analysis"). Inside it, each `<li>` is one skill or tool.
  - Add a skill: add another `<li>Skill Name</li>` line.
  - Remove a skill: delete its `<li>` line.
  - Add a category: copy a whole `<div class="skill-group">...</div>` block and edit it.
  - Remove a category: delete its whole `<div class="skill-group">...</div>` block.

- **Projects** — a `<article class="project-card">...</article>` is one project, with an image, title, subtitle (`.project-meta`), short description, and a "View project detail" link.
  - Add a project: copy the whole `<article class="project-card">...</article>` block, paste it as a new sibling inside `.project-grid`, and edit the copy.
  - Remove a project: delete its whole `<article>...</article>` block.
  - The image: drop a new file into `assets/projects/` and point `src` at it.
  - The link: point `href` at wherever you're keeping the full write-up — a page in this repo, a Google Doc, a Drive folder, a Notion page, anything with a shareable link. Just make sure the link is set to "anyone with the link can view" if it's Google Docs/Drive.

- **Contact** — just edit the email and phone number directly in the `.contact-details` block.

## Deploying to GitHub Pages

Same as before — see your repo's Settings → Pages, source set to `main` branch, `/ (root)` folder. If you've set up the VS Code + Live Server + Git workflow, your loop is: edit → save → preview locally → commit → push, and Pages rebuilds automatically within a minute or two.

## Notes

- No contact form, no backend — contact is a plain email/phone link.
- No project filtering — with a small number of projects it isn't needed; the grid just lists every `.project-card` in order.
- Fonts (Big Shoulders Display, IBM Plex Sans, IBM Plex Mono) load from Google Fonts — no local font files needed.
- Dark mode is automatic, following the visitor's OS-level preference.
