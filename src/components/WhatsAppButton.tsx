import { EnquiryLink } from './EnquiryLink'

export function WhatsAppButton() {
  return <div className="whatsapp-contact">
    <EnquiryLink className="whatsapp-button">
      <svg viewBox="0 0 32 32" width="27" height="27" fill="currentColor" aria-hidden="true">
        <path d="M16 .9A14.8 14.8 0 0 0 3.2 23.1L1 31l8.1-2.1A14.8 14.8 0 1 0 16 .9Zm0 27a12.2 12.2 0 0 1-6.2-1.7l-.4-.2-4.8 1.3 1.3-4.7-.3-.5A12.2 12.2 0 1 1 16 27.9Zm6.7-9.1c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2l-1.2 1.4c-.2.2-.4.3-.8.1a10 10 0 0 1-3-1.9 11.4 11.4 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.7l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.4 1.5 3.7c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.7.3-.9.3-1.6.2-1.7-.1-.2-.3-.3-.7-.5Z"/>
      </svg>
      <span>Chat on WhatsApp</span>
    </EnquiryLink>
  </div>
}
