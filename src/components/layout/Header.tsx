import { siteConfig } from '../../data/siteConfig'

/**
 * Header — brand wordmark, descriptor, and a single "Get In Touch" CTA.
 *
 * The full navigation is intentionally omitted: this is a Coming Soon page;
 * pages linked in the Stitch design do not yet exist.
 */
export function Header() {
  const { brandName, contact } = siteConfig

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-background) 90%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-surface-variant)',
      }}
    >
      <div
        className="h-20 w-full flex items-center justify-between"
        style={{
          paddingLeft: 'var(--spacing-margin-mobile)',
          paddingRight: 'var(--spacing-margin-mobile)',
        }}
      >
        {/* ── Brand Logo ── */}
        <a
          href="/"
          className="flex items-center group transition-opacity duration-200 hover:opacity-80"
          aria-label={brandName}
        >
          <img
            src="/images/dms-logo-black.png"
            alt={brandName}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* ── CTA ── */}
        <a
          href={`mailto:${contact.email}`}
          className="group flex items-center gap-1 text-label-md uppercase text-[--color-primary] border border-[--color-primary] hover:bg-[--color-primary] hover:text-[--color-on-primary] transition-colors duration-200"
          style={{
            paddingInline: 'var(--spacing-space-sm)',
            paddingBlock: 'var(--spacing-space-xs)',
          }}
          aria-label="Contact Dreams Maker Studio"
        >
          <span>Get In Touch</span>
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>

      {/* Wider screens get extra horizontal padding */}
      <style>{`
        @media (min-width: 768px) {
          header > div {
            padding-left: var(--spacing-margin) !important;
            padding-right: var(--spacing-margin) !important;
          }
        }
      `}</style>
    </header>
  )
}
