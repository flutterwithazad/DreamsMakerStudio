# Dreams Maker Studio — Coming Soon

> **Live domain:** [dreamsmakerstudio.in](https://dreamsmakerstudio.in)
> A modeling agency and photography studio. Coming soon.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI components |
| TypeScript | 6 | Type-safe code |
| Vite | 8 | Dev server & build |
| Tailwind CSS | 4 | Styling (CSS-first config) |
| React Router | 7 | Routing shell |
| Framer Motion | 14 | Micro-animations |
| Lucide React | latest | Icons |

---

## Project Structure

```
dreams-maker-studio/
├── public/
│   ├── CNAME               ← custom domain
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   └── ComingSoonHero.tsx
│   │   └── ui/
│   │       └── ContactLink.tsx
│   ├── data/
│   │   └── siteConfig.ts   ← ⚠️ update contact details here
│   ├── pages/
│   │   └── ComingSoonPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview it locally:

```bash
npm run preview
```

---

## Content Configuration

All editable content lives in **`src/data/siteConfig.ts`**.

Before going live, replace every value marked **⚠️ PLACEHOLDER**:

| Field | Location | Notes |
|-------|----------|-------|
| Studio email | `contact.email` | Primary mailto target |
| Casting email | `contact.castingEmail` | Dossier request link |
| WhatsApp | `contact.whatsapp` | Format: `https://wa.me/<countrycode><number>` |
| Instagram | `contact.instagram` + `instagramHandle` | Full URL + @handle |
| Hero image | `heroImage.src` | Replace Google Stitch placeholder with licensed photo |

---

## GitHub Pages Deployment

### Automatic Deployment (GitHub Actions)

Every push to `main` triggers the workflow at `.github/workflows/deploy.yml`:

1. Installs dependencies with `npm ci`
2. Runs `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys via `actions/deploy-pages`

### First-Time Setup

1. **Create the repository** on GitHub (e.g. `github.com/yourusername/dreams-maker-studio`).

2. **Enable GitHub Pages** in the repo settings:
   - Go to **Settings → Pages**
   - Source: **GitHub Actions**

3. **Push `main`** — the workflow deploys automatically.

### Custom Domain (`dreamsmakerstudio.in`)

The `public/CNAME` file already contains `dreamsmakerstudio.in`.

In your domain registrar / DNS provider, add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

Then in **GitHub repo Settings → Pages → Custom domain**, enter `dreamsmakerstudio.in` and tick **Enforce HTTPS** once the certificate is issued (usually within minutes).

> ⚠️ Do not delete or edit existing DNS records without verifying they are not in use by another service.

### Base Path

`vite.config.ts` sets `base: '/'`. This is correct for the custom domain root. If you ever deploy to a GitHub project page (e.g. `username.github.io/repo-name/`), change `base` to `'/repo-name/'`.

---

## Replacing the Hero Image

The current hero image is the Google Stitch design reference image. **It must be replaced with a licensed photograph before publishing.**

1. Place your image in `public/images/hero/`.
2. Update `heroImage.src` in `src/data/siteConfig.ts`:
   ```ts
   src: '/images/hero/your-photo.jpg',
   ```
3. Update `heroImage.alt` with an accurate description.

Recommended: export as WebP, ~1200 px wide, optimized with Squoosh or similar.

---

## License

© 2025 Dreams Maker Studio. All rights reserved.
