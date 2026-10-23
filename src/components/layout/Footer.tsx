import { siteConfig } from '../../data/siteConfig'

/**
 * Footer — minimal editorial footer with contact links and copyright.
 */
export function Footer() {
  const { contact } = siteConfig

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--color-background)',
        borderTop: '1px solid var(--color-surface-variant)',
      }}
    >
      <div
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between"
        style={{
          paddingInline: 'var(--spacing-margin-mobile)',
          paddingBlock: 'var(--spacing-space-lg)',
          gap: 'var(--spacing-space-md)',
        }}
      >
        {/* ── Left: tagline + headline ── */}
        <div className="flex flex-col gap-1">
          <span className="text-label-sm uppercase text-[--color-on-surface-variant]">
            Models · Photography · Creative
          </span>
          <p
            className="text-headline-md uppercase text-[--color-primary]"
            style={{ letterSpacing: '-0.01em' }}
          >
            A new perspective is on its way.
          </p>
        </div>

        {/* ── Right: links + copyright ── */}
        <div
          className="flex flex-wrap items-center"
          style={{ gap: 'var(--spacing-space-md)' }}
        >
          <a
            href={`mailto:${contact.email}`}
            className="text-label-md uppercase text-[--color-on-surface-variant] hover:text-[--color-on-surface] transition-colors"
          >
            Inquiries
          </a>
          <a
            href={`mailto:${contact.castingEmail}`}
            className="text-label-md uppercase text-[--color-on-surface-variant] hover:text-[--color-on-surface] transition-colors"
          >
            Press &amp; Archival
          </a>
          <span className="text-label-sm uppercase text-[--color-on-surface-variant]">
            © {new Date().getFullYear()} Dreams Maker Studio
          </span>
        </div>
      </div>

      {/* ── Built by credit ── */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          paddingBlock: '0.75rem',
          borderTop: '1px solid var(--color-surface-variant)',
        }}
      >
        <span
          className="text-label-sm uppercase text-[--color-on-surface-variant]"
          style={{ letterSpacing: '0.18em' }}
        >
          Built by{' '}
          <a
            href="https://brownfishtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-secondary] hover:text-[--color-on-surface] transition-colors"
          >
            BrownFish Tech
          </a>
        </span>
      </div>

      {/* Wider screens get extra horizontal padding */}
      <style>{`
        @media (min-width: 768px) {
          footer > div:first-child {
            padding-left: var(--spacing-margin) !important;
            padding-right: var(--spacing-margin) !important;
          }
        }
      `}</style>
    </footer>
  )
}
