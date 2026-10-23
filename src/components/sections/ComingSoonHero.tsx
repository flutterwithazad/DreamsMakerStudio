import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { ContactLink } from '../ui/ContactLink'
import { siteConfig } from '../../data/siteConfig'

/**
 * ComingSoonHero — the primary content section.
 *
 * Faithfully implements the Google Stitch design:
 * - Left column: headline, copy, CTA, progress indicator, contact drawer
 * - Right column: editorial portrait with overlay caption
 */
function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function ComingSoonHero() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { hero, contact, heroImage } = siteConfig

  function handleGetInTouch() {
    setDrawerOpen(true)
    setTimeout(() => {
      document
        .getElementById('contact-drawer')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  return (
    <section
      className="w-full flex flex-col"
      style={{ paddingBlock: 'var(--spacing-space-md)' }}
    >
      {/* ── Hero grid ── */}
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-12 items-center"
        style={{
          paddingInline: 'var(--spacing-margin-mobile)',
          gap: 'var(--spacing-space-md)',
        }}
      >
        {/* ───────── LEFT COLUMN ───────── */}
        <div
          className="lg:col-span-5 flex flex-col justify-center"
          style={{ gap: 'var(--spacing-space-md)' }}
        >
          {/* Eyebrow */}
          <div className="flex items-center" style={{ gap: 'var(--spacing-space-xs)' }}>
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--color-secondary)' }}
              aria-hidden="true"
            />
            <span className="text-label-sm uppercase text-[--color-secondary]">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline block */}
          <div className="flex flex-col" style={{ gap: 'var(--spacing-space-xs)' }}>
            <h1
              className="text-display-xl text-[--color-primary]"
              style={{ lineHeight: '0.98' }}
            >
              {hero.headlineLine1}
              <span className="italic font-normal font-display block mt-1">
                {hero.headlineLine2}
              </span>
            </h1>
            <div className="pt-2">
              <span
                className="text-label-sm uppercase text-[--color-on-surface-variant] block"
                style={{ letterSpacing: '0.28em' }}
              >
                {hero.brandLabel}
              </span>
            </div>
          </div>

          {/* Supporting copy */}
          <p className="text-body-lg text-[--color-on-surface-variant] max-w-xl font-light">
            {hero.supporting}
          </p>

          {/* CTA row + coming-soon strip */}
          <div
            className="flex flex-col"
            style={{ gap: 'var(--spacing-space-sm)', paddingTop: 'var(--spacing-space-xs)' }}
          >
            {/* CTA + label */}
            <div className="flex flex-wrap items-center" style={{ gap: 'var(--spacing-space-sm)' }}>
              <button
                onClick={handleGetInTouch}
                className="group bg-[--color-primary] text-[--color-on-primary] flex items-center gap-2 uppercase text-label-md hover:bg-[--color-secondary] transition-colors duration-300"
                style={{
                  paddingInline: 'var(--spacing-space-md)',
                  paddingBlock: '0.875rem',
                  letterSpacing: '0.22em',
                }}
                aria-expanded={drawerOpen}
                aria-controls="contact-drawer"
              >
                <span>Get In Touch</span>
                <span
                  className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>

              <span
                className="text-label-sm uppercase text-[--color-secondary]"
                style={{ letterSpacing: '0.25em' }}
              >
                Our world is coming soon
              </span>
            </div>

            {/* Progress strip */}
            <div
              className="flex flex-col"
              style={{
                padding: 'var(--spacing-space-sm)',
                backgroundColor: 'var(--color-surface-container-low)',
                gap: 'var(--spacing-space-xs)',
              }}
            >
              <div className="flex items-center justify-between text-[--color-on-surface-variant]">
                <span className="text-label-sm uppercase" style={{ letterSpacing: '0.22em' }}>
                  {hero.comingSoonLabel}
                </span>
                <span
                  className="text-label-sm uppercase text-[--color-secondary]"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {hero.progressLabel}
                </span>
              </div>
              <div
                className="relative w-full overflow-hidden"
                style={{ height: '2px', backgroundColor: 'var(--color-surface-variant)' }}
                role="progressbar"
                aria-label="Website in progress"
              >
                <div className="studio-progress-bar" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* ── Contact drawer ── */}
          <AnimatePresence>
            {drawerOpen && (
              <motion.div
                id="contact-drawer"
                key="contact-drawer"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
                style={{
                  gap: 'var(--spacing-space-xs)',
                  paddingTop: 'var(--spacing-space-xs)',
                }}
              >
                <span
                  className="text-label-sm uppercase text-[--color-on-surface-variant]"
                  style={{ letterSpacing: '0.25em' }}
                >
                  Direct Studio Desk
                </span>

                <div
                  className="flex flex-wrap items-center pt-1"
                  style={{ columnGap: 'var(--spacing-space-md)', rowGap: 'var(--spacing-space-xs)' }}
                >
                  <ContactLink href={`mailto:${contact.email}`} icon={<Mail size={15} />}>
                    {contact.email}
                  </ContactLink>
                  <ContactLink href={contact.whatsapp} icon={<MessageSquare size={15} />} external>
                    WhatsApp Editorial Desk
                  </ContactLink>
                  <ContactLink href={contact.instagram} icon={<InstagramIcon size={15} />} external>
                    {contact.instagramHandle}
                  </ContactLink>
                  <ContactLink href={contact.facebook} icon={<FacebookIcon size={15} />} external>
                    {contact.facebookHandle}
                  </ContactLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ───────── RIGHT COLUMN — editorial portrait ───────── */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end w-full">
          <div
            className="relative w-full max-w-xl lg:max-w-2xl shadow-sm"
            style={{
              backgroundColor: 'var(--color-surface-container-low)',
              padding: '0.75rem',
            }}
          >
            {/* Plate label */}
            <div
              className="absolute top-8 left-8 z-20 pointer-events-none hidden sm:block"
              aria-hidden="true"
            >
              <div
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
                  paddingInline: '0.75rem',
                  paddingBlock: '0.375rem',
                }}
              >
                <p
                  className="text-label-sm uppercase text-[--color-primary]"
                  style={{ letterSpacing: '0.25em' }}
                >
                  {heroImage.caption}
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: '3 / 4',
                backgroundColor: 'var(--color-surface-container)',
              }}
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-[1.015]"
                style={{
                  filter: 'grayscale(18%) contrast(103%)',
                }}
                loading="eager"
                fetchPriority="high"
                width={640}
                height={854}
              />

              {/* Bottom gradient + caption overlay */}
              <div
                className="absolute bottom-0 inset-x-0 pointer-events-none"
                style={{
                  height: '7rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-white">
                <div>
                  <span
                    className="text-label-sm uppercase block"
                    style={{
                      letterSpacing: '0.28em',
                      color: 'var(--color-secondary-fixed)',
                    }}
                  >
                    {heroImage.archiveLabel}
                  </span>
                  <p
                    className="text-headline-md leading-none"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {heroImage.archiveTitle}
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span
                    className="text-label-sm uppercase"
                    style={{ letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)' }}
                  >
                    {heroImage.archiveLocations}
                  </span>
                  <span
                    className="text-label-sm"
                    style={{ letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)' }}
                  >
                    {heroImage.archiveEdition}
                  </span>
                </div>
              </div>
            </div>

            {/* Caption bar */}
            <div className="pt-3 px-1 flex items-center justify-between">
              <span
                className="text-label-sm uppercase text-[--color-on-surface-variant]"
                style={{ letterSpacing: '0.22em' }}
              >
                Editorial Portfolio Series / Studio No. 01
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-label-sm uppercase text-[--color-primary]"
                  style={{ letterSpacing: '0.22em' }}
                >
                  Signed Issue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wider screens get extra horizontal padding */}
      <style>{`
        @media (min-width: 768px) {
          section > div:first-child {
            padding-left: var(--spacing-margin) !important;
            padding-right: var(--spacing-margin) !important;
          }
        }
        @media (min-width: 1024px) {
          section {
            padding-top: var(--spacing-space-xl) !important;
            padding-bottom: var(--spacing-space-xl) !important;
          }
        }
      `}</style>
    </section>
  )
}
