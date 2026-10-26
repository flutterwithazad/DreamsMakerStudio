# Dreams Maker Studio

A responsive, frontend-only studio website built with React, TypeScript, React Router, and Vite. The approved homepage design extends across Studio, Services, Portfolio, Celebrity Experiences, and Contact pages, with four dedicated service pages.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The build emits static entry documents for every supported route and a 404 fallback, allowing direct page links on the existing GitHub Pages custom domain. The existing Actions workflow deploys on a push to `main`; this work does not itself publish anything.

## Content and images

- `src/data/siteConfig.ts`: studio contact information (verify before launch; legacy coming-soon configuration also remains here).
- `src/data/homeContent.ts`: homepage gallery, services, and FAQs.
- `src/data/services.ts`: service routes, descriptions, and preparation details.
- `src/pages/InnerPages.tsx`: Studio, Services, service details, Portfolio, Experiences, Contact, and 404 page layouts.
- `public/images/demo/`: demo photos. They are labelled as illustrative imagery, not studio client projects. Replace with approved studio work.

No client testimonials, event dates, packages, or prices are fabricated. The removed Yogesh Rawat section is not displayed anywhere.

## Contact enquiries

The contact form validates required fields and prepares a WhatsApp message for review. The visitor explicitly continues to WhatsApp and sends the message there. No backend, message storage, payment flow, or automatic submission is included.

## Interactions

Shared active navigation and mobile menu, service detail links, filterable portfolio, keyboard-accessible modal gallery, expandable FAQs, service preselection in the enquiry form, and a custom not-found page.
