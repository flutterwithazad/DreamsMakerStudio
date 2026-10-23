import { siteConfig } from '../../data/siteConfig'

/**
 * Header — brand wordmark, descriptor, and a single "Get In Touch" CTA.
 *
 * The full navigation is intentionally omitted: this is a Coming Soon page;
 * pages linked in the Stitch design do not yet exist.
 */
export function Header() {
  const { brandName, brandDescriptor, contact } = siteConfig

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
        {/* ── Wordmark ── */}
        <div className="flex flex-col gap-1">
          <span
            className="text-headline-md uppercase text-[--color-primary] leading-none"
            style={{ letterSpacing: '-0.01em' }}
            aria-label={brandName}
          >
            {brandName}
          </span>
          <span
            className="text-label-sm uppercase text-[--color-on-surface-variant]"
          >
            {brandDescriptor}
          </span>
        </div>

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
