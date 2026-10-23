import type { ReactNode } from 'react'

interface ContactLinkProps {
  href: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
}

/**
 * ContactLink — reusable styled link for contact methods in the hero drawer
 * and footer.
 */
export function ContactLink({
  href,
  icon,
  children,
  external = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-1.5 text-label-md uppercase text-[--color-primary] hover:text-[--color-secondary] transition-colors"
      style={{ letterSpacing: '0.18em' }}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="text-[--color-secondary] flex-shrink-0">{icon}</span>
      <span>{children}</span>
    </a>
  )
}
