# AI RES Website (Static)

This is a static website designed to be hosted on **GitHub Pages**.

## Deploy on GitHub Pages
1. Create a new GitHub repo (e.g., `ai-res-site`)
2. Put these files in the repo root.
3. Go to:
   - **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** (or master), folder: **/(root)**
4. Wait for GitHub Pages to publish.

## Update contact email
Edit:
- `assets/js/main.js` → replace `hello@aires.example` with your real email.
- `contact/index.html` → replace the displayed mailto address too.

## Custom domain (optional)
If you use a custom domain, add a `CNAME` file at the repo root with your domain.
