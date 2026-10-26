import type { ReactNode } from 'react'
import { siteConfig } from '../data/siteConfig'
export function EnquiryLink({ children, className = '', service }: {children: ReactNode; className?: string; service?: string}) {
  const message = service ? `Hi Dreams Maker Studio, I’d like to enquire about ${service}. Please share availability, inclusions, and fees.` : 'Hi Dreams Maker Studio, I’d like to plan a shoot or experience. Please share the details.'
  return <a className={className} href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">{children}</a>
}
