/**
 * siteConfig.ts
 *
 * Central content and configuration for Dreams Maker Studio.
 *
 * IMPORTANT — Before going live, replace every placeholder marked
 * with ⚠️ PLACEHOLDER with the real value.
 */

export const siteConfig = {
  /** Brand */
  brandName: 'Dreams Maker Studio',
  brandDescriptor: 'Models · Photography · Creative',

  /** Hero copy */
  hero: {
    eyebrow: 'A New Creative Chapter',
    headlineLine1: 'Where talent',
    headlineLine2: 'meets vision.',
    supporting:
      'A creative space for models, photography, and visual storytelling. Something extraordinary is taking shape.',
    brandLabel: 'Dreams Maker Studio — Creative Studio',
    comingSoonLabel: 'Our website is currently in the making',
    progressLabel: 'Studio Atelier',
  },

  /** Services (3-card grid below hero) */
  services: [
    {
      number: '01',
      division: 'Talent Division',
      title: 'Model Roster',
      description:
        'Representing distinct, architectural faces across global runways and print editorials.',
    },
    {
      number: '02',
      division: 'Laboratory',
      title: 'Photography',
      description:
        'In-house studio light studies, editorial lookbooks, and high-fashion art direction.',
    },
    {
      number: '03',
      division: 'Atelier',
      title: 'Campaign Vision',
      description:
        'Bespoke luxury brand consultations, casting direction, and visual narrative architecture.',
    },
  ],

  /** Contact — replace placeholders before going live ⚠️ */
  contact: {
    /**
     * Primary email address.
     * ⚠️ PLACEHOLDER — replace with real studio email
     */
    email: 'dreamsmakerstudio21@gmail.com',

    /**
     * Casting / agency dossier email.
     * ⚠️ PLACEHOLDER — replace with real casting email
     */
    castingEmail: 'dreamsmakerstudio21@gmail.com',

    /**
     * WhatsApp link. Format: https://wa.me/<country-code><number>
     * ⚠️ PLACEHOLDER — replace with real WhatsApp number
     */
    whatsapp: 'https://wa.me/911234567890',

    /**
     * Instagram profile URL.
     * ⚠️ PLACEHOLDER — replace with real Instagram URL
     */
    instagram: 'https://instagram.com/dreamsmakerstudio',
    instagramHandle: '@dreamsmakerstudio',
  },

  /** SEO / meta */
  meta: {
    title: 'Dreams Maker Studio | Coming Soon',
    description:
      'Dreams Maker Studio is a modeling agency and photography studio crafting extraordinary visual narratives. Coming soon.',
    url: 'https://dreamsmakerstudio.in/',
  },

  /** Hero editorial image */
  heroImage: {
    /**
     * The Google Stitch reference image URL.
     * This is a Google-hosted placeholder image from the design tool.
     * ⚠️ REPLACE with your own licensed editorial photograph
     * before publishing.
     */
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa8zc2y8EQpZ4NIKCZerw6NZEyVmzN5Jj7T_pF_okmJNd4fGjmL4BFVsVpdforYdVt7R_TntB60viOWvgaDZkUA6U-nbtwX_SVqtB8FjI4lfBrNDm9WXOggsNbnjUFTdBpTK3O9PrllrIobZsBShBpcGW5XJnCFiPdDBFuVcgk4_hJct-hzr3gvnW9FJ0YcD09wufVOixi380AFD5Lba5AStotiK0c8pc5fEAgnGlIaBtj2d7_iwT6pg',
    alt: 'Dreams Maker Studio Haute Couture Editorial Model Portrait',
    caption: 'Plates · Fall / Winter Roster',
    archiveLabel: 'Archive No. 01',
    archiveTitle: 'Sartorial Metamorphosis',
    archiveLocations: 'Paris — Milan — NY',
    archiveEdition: 'Edition 2025',
  },
} as const

export type SiteConfig = typeof siteConfig
