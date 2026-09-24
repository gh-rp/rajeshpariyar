# Civil Engineering Portfolio

A static, dependency-free portfolio site (HTML/CSS/JS only) built for GitHub Pages. No build step, no framework — edit the files directly.

## File structure

```
.
├── index.html            # all page content
├── css/style.css         # design system + layout
├── js/script.js          # nav, filtering, form validation
└── assets/
    ├── projects/         # project card images (placeholders included)
    └── images/           # spare folder for anything else (headshot, og-image, etc.)
```

## 1. Customize the content

Everything is in plain HTML — open `index.html` and edit directly:

- **Header/hero** — your name, title, tagline, and the four stats in the title block (`Based in`, `Graduated`, `Self-directed projects`, `Core tools`).
- **About** — the two paragraphs and the three fact numbers.
- **Skills & Tools** — the four `.spec-card` blocks (AutoCAD / Revit / ETABS / GIS). Add more `<article class="spec-card">` blocks for any other software you use.
- **Projects** — each `<article class="project-card">` is one project. To add a project, copy an existing card and:
  1. Replace the image in `assets/projects/` (16:10 aspect ratio works best) and update the `src`/`alt`.
  2. Update `data-category` on the `<article>` — this must match one of the filter buttons' `data-filter` values (`autocad`, `revit`, `etabs`, `gis`), space-separated if a project used more than one tool.
  3. Update the sheet number, title, meta line, description, and tags.
- **Articles & Notes** — each `<article class="article-card">` is one write-up. Point the "Read the write-up" link at a PDF in `assets/`, a Medium/LinkedIn post, or a page you publish elsewhere.
- **Background** — edit the `<li class="timeline-item">` entries (education, capstone project, any courses or certificates).
- **Contact** — update the email, phone, and location in `.contact-details`.
- **Resume** — replace `assets/Your-Name-Resume.pdf` with your own PDF (keep the filename or update the `href` in the hero).

Replace the placeholder JPGs in `assets/projects/` with real project photos or renders — they currently just say "REPLACE IMAGE" so it's obvious what's left to do.

## 2. Wire up the contact form

The form validates on the client side but has no backend — submitting it currently just confirms the input looks valid, it doesn't send anywhere. To actually receive messages, pick one:

- **Formspree** (easiest): create a free form at [formspree.io](https://formspree.io), then set the form's `action` to your Formspree endpoint and remove the `e.preventDefault()` short-circuit in `js/script.js`'s submit handler (or follow Formspree's fetch-based AJAX instructions to keep the custom success message).
- **Getform, Netlify Forms, Basin** — similar drop-in services if you're not using GitHub Pages exclusively.
- **mailto fallback** — simplest option, no service required: change the `<form>` tag to `action="mailto:you@example.com" method="post" enctype="text/plain"`, though this opens the visitor's email client rather than sending silently.

## 3. Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a root domain, or any name like `portfolio` for a project site).
2. Push these files to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two, then your site is live at:
   - `https://your-username.github.io/` (if the repo is named `your-username.github.io`), or
   - `https://your-username.github.io/your-repo/` (any other repo name).

To use a custom domain, add a `CNAME` file at the repo root containing your domain, and configure the DNS records GitHub's Pages docs specify.

## 4. Local preview

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- Fonts (Big Shoulders Display, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via the `<link>` tags in `<head>` — no local font files needed.
- The design has no external JS dependencies.
- Dark mode is automatic, following the visitor's OS-level preference.
- Reduced-motion preferences are respected; there's minimal motion overall (hover states and a mobile menu transition only).
