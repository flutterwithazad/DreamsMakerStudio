import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ComingSoonHero } from '../components/sections/ComingSoonHero'
import { siteConfig } from '../data/siteConfig'

/**
 * ComingSoonPage — composes the full Coming Soon layout:
 * Header → Hero → Services grid → Dossier banner → Footer
 */
export function ComingSoonPage() {
  const { services, contact } = siteConfig

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />

      <main className="flex-1 w-full flex flex-col" style={{ paddingTop: '5rem' }}>
        {/* ── Hero section ── */}
        <ComingSoonHero />

        {/* ── Services grid ── */}
        <section
          className="w-full"
          aria-label="Studio Services"
          style={{
            paddingInline: 'var(--spacing-margin-mobile)',
            paddingBlock: 'var(--spacing-space-lg)',
            backgroundColor: 'var(--color-surface-container-low)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--spacing-space-md)' }}>
            {services.map((service) => (
              <article
                key={service.number}
                className="flex flex-col justify-between"
                style={{
                  padding: 'var(--spacing-space-sm)',
                  backgroundColor: 'var(--color-surface)',
                  height: '12rem',
                }}
              >
                <span
                  className="text-label-sm uppercase text-[--color-secondary]"
                  style={{ letterSpacing: '0.25em' }}
                >
                  {service.number} — {service.division}
                </span>
                <div>
                  <h3 className="text-headline-md uppercase text-[--color-primary]">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-[--color-on-surface-variant] mt-1">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop horizontal padding */}
          <style>{`
            @media (min-width: 768px) {
              section[aria-label="Studio Services"] {
                padding-left: var(--spacing-margin) !important;
                padding-right: var(--spacing-margin) !important;
              }
            }
          `}</style>
        </section>

        {/* ── Agency dossier banner ── */}
        <div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          style={{
            paddingInline: 'var(--spacing-margin-mobile)',
            paddingBlock: 'var(--spacing-space-md)',
            backgroundColor: 'var(--color-surface-container)',
          }}
        >
          <div className="flex flex-col">
            <span
              className="text-label-sm uppercase text-[--color-secondary]"
              style={{ letterSpacing: '0.28em' }}
            >
              Strictly Confidential
            </span>
            <p className="text-body-md text-[--color-on-surface]">
              Bookings and casting calls for upcoming Milan &amp; Paris seasonal previews
              are accepted via secure line.
            </p>
          </div>

          <a
            href={`mailto:${contact.castingEmail}`}
            className="inline-flex items-center gap-2 text-label-md uppercase text-[--color-primary] hover:text-[--color-secondary] transition-colors underline underline-offset-4 whitespace-nowrap"
            style={{ letterSpacing: '0.2em' }}
          >
            <span>Request Agency Dossier</span>
            <span aria-hidden="true">→</span>
          </a>

          <style>{`
            @media (min-width: 768px) {
              div[style*="surface-container"] {
                padding-left: var(--spacing-margin) !important;
                padding-right: var(--spacing-margin) !important;
              }
            }
          `}</style>
        </div>
      </main>

      <Footer />
    </div>
  )
}
