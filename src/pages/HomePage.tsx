import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceDetails } from '../data/services'
import { ArrowUpRight, ArrowRight, ArrowDown, Plus, Minus, X, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

import { categories, work, services, faqs } from '../data/homeContent'
import { EnquiryLink } from '../components/EnquiryLink'
export default function HomePage() {
  const [filter, setFilter] = useState<string>('All work')
  const [service, setService] = useState(0)
  const [faq, setFaq] = useState<number | null>(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const modalRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const modalOpen = lightbox !== null
  useEffect(() => {
    if (modalOpen) {
      openerRef.current = document.activeElement as HTMLElement
      modalRef.current?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      modalRef.current?.close()
      document.body.style.overflow = ''
      openerRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])
  const closeModal = () => { setLightbox(null) }
  const filtered = work.filter(item => filter === 'All work' || item.category === filter)

  return <>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="tiny-dot"/> A STUDIO FOR YOUR NEXT CHAPTER</div>
          <h1 id="hero-title">You bring<br/>the dream.<br/><span>We frame it.</span></h1>
          <p>For the first-timers. The dreamers. The ones ready to be seen. Portfolio shoots, celebrity experiences, and a space to find your spotlight.</p>
          <a className="button button-dark" href="#services">Find your spotlight <ArrowUpRight size={19}/></a>
          <div className="hero-bottom"><span>REAL PEOPLE. REMARKABLE POSSIBILITIES.</span><a href="#studio" aria-label="Discover the studio"><ArrowDown size={19}/></a></div>
        </div>
        <div className="hero-photo"><img src="/images/demo/hero.jpg" alt="Editorial portrait of a woman under blue studio lighting" fetchPriority="high"/><div className="photo-shade"/><span className="photo-index">DMS / A NEW PERSPECTIVE</span><div className="photo-caption"><span>EVERY FACE HAS A STORY.</span><p>Let’s tell <em>yours.</em></p><span className="photo-demo">DEMO PHOTOGRAPHY</span></div><span className="vertical-text">PORTFOLIOS · PEOPLE · POSSIBILITIES</span></div>
      </section>
      <div className="service-ribbon" aria-label="Studio specialties"><span>PORTFOLIO SHOOTS</span><i>✳</i><span>CELEBRITY EXPERIENCES</span><i>✳</i><span>CASTING & MODELING</span><i>✳</i><span>MADE FOR YOU</span><i>✳</i></div>
      <section id="studio" className="studio-section section-wrap">
        <div className="section-kicker"><span>01 / THE STUDIO</span><span>A LITTLE ABOUT US</span></div>
        <div className="studio-intro"><h2>Big dreams.<br/>A personal <em>approach.</em></h2><div><p className="lead">You don’t have to be a familiar face<br className="desktop-break"/> to deserve an extraordinary frame.</p><p>Dreams Maker Studio brings together photography, modeling, and celebrity experiences. Whether it’s your first portfolio or a moment you’ve always imagined, it starts with a conversation about you.</p><Link className="text-link" to="/studio">Meet the studio <ArrowUpRight size={17}/></Link></div></div>
        <div className="studio-values"><div><span>01</span><h3>Your vision comes first</h3><p>A conversation about your goals before the camera comes out.</p></div><div><span>02</span><h3>Clarity at every step</h3><p>Discuss the experience, inclusions, and fees before you book.</p></div><div><span>03</span><h3>Space to be yourself</h3><p>First portfolio or next big idea, there’s room for your individuality.</p></div></div>
      </section>
      <section id="work" className="work-section section-wrap">
        <div className="section-kicker"><span>02 / THROUGH OUR LENS</span><span>AN EDITORIAL POINT OF VIEW</span></div>
        <div className="section-heading"><h2>More than a picture.<br/><em>A presence.</em></h2><p>A glimpse of the creative direction.<br/>Your story brings the next perspective.</p></div>
        <div className="work-toolbar"><div className="filters" aria-label="Filter demo portfolio">{categories.map(category => <button key={category} className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="demo-note">CURATED DEMO IMAGERY <span>↗</span></span></div>
        <div className="work-grid">{filtered.map(item => <button className="work-card" key={item.title} onClick={() => setLightbox(work.indexOf(item))} aria-label={`Open ${item.title}`}><div className="work-image"><img src={`/images/demo/${item.image}.jpg`} alt={item.title + ' — demo photography'} loading="lazy"/><span className="image-view"><ArrowUpRight size={24}/></span><span className="work-category">{item.category}</span></div><div className="work-caption"><h3>{item.title}</h3><span>{item.detail}</span></div></button>)}</div>
        <div className="work-footnote"><span>Inspiration for what we can create together. Images shown are for design demonstration.</span><Link className="text-link" to="/portfolio">Explore the portfolio <ArrowUpRight size={17}/></Link></div>
      </section>
      <section id="services" className="services-section section-wrap">
        <div className="section-kicker"><span>03 / WHAT WE DO</span><span>YOUR AMBITION. OUR CANVAS.</span></div>
        <div className="services-layout"><div className="services-aside"><h2>One studio.<br/>So many<br/><em>possibilities.</em></h2><p>Find the experience that speaks to you.<br/>We’ll work out the details together.</p><div className="services-mini-image"><img src="/images/demo/studio.jpg" alt="A photographer holding a camera — demo studio imagery" loading="lazy"/><span>BEHIND EVERY GREAT FRAME,<br/>A NEW PERSPECTIVE.</span></div></div><div className="service-list">{services.map((item, index) => <div className={`service-item ${service === index ? 'expanded' : ''}`} key={item.title}><h3><button id={`service-button-${index}`} aria-expanded={service === index} aria-controls={`service-panel-${index}`} onClick={() => setService(service === index ? -1 : index)}><span className="service-number">0{index + 1}</span><span>{item.title}</span>{service === index ? <Minus size={22}/> : <Plus size={22}/>}</button></h3><div id={`service-panel-${index}`} role="region" aria-labelledby={`service-button-${index}`} hidden={service !== index}><div className="service-details"><span className="eyebrow">{item.tag}</span><p>{item.description}</p><p className="service-small">{item.detail}</p><Link to={`/services/${serviceDetails[index].slug}`} className="text-link">Explore this service <ArrowUpRight size={16}/></Link></div></div></div>)}</div></div>
      </section>
      <section className="process-section section-wrap"><div className="section-kicker"><span>04 / FROM IDEA TO EXPERIENCE</span><span>LET’S MAKE IT SIMPLE</span></div><div className="section-heading"><h2>Your first step.<br/><em>Our full attention.</em></h2><p>Good experiences start with clarity.<br/>Here’s how the conversation unfolds.</p></div><div className="process-grid">{[['Say hello','Tell us about yourself and the shoot or experience you have in mind.'],['Make a plan','Discuss the concept, availability, fees, and exactly what’s included.'],['Step into the moment','Arrive with your ideas. We’ll help you feel at home in front of the lens.'],['Take it with you','Receive the deliverables agreed for your shoot or experience.']].map(([title,description],index) => <div key={title}><div className="process-top"><span>0{index+1}</span>{index < 3 ? <ArrowRight size={21}/> : <Check size={21}/>}</div><h3>{title}</h3><p>{description}</p></div>)}</div></section>
      <section className="faq-section section-wrap"><div><span className="eyebrow">A LITTLE CLARITY</span><h2>Before you<br/><em>step in.</em></h2><p>Something else on your mind?</p><EnquiryLink className="text-link">Just ask us <ArrowUpRight size={17}/></EnquiryLink></div><div className="faq-list">{faqs.map(([question,answer],index) => <div className="faq-item" key={question}><h3><button aria-expanded={faq === index} aria-controls={`faq-${index}`} onClick={() => setFaq(faq === index ? null : index)}>{question}{faq === index ? <Minus size={18}/> : <Plus size={18}/>}</button></h3><div id={`faq-${index}`} hidden={faq !== index}><p>{answer}</p></div></div>)}</div></section>
      <section id="contact" className="contact-section section-wrap"><span className="eyebrow">THE SPOTLIGHT HAS ROOM FOR YOU.</span><div className="contact-heading"><h2>Shall we make<br/><em>something happen?</em></h2><EnquiryLink className="contact-circle"><ArrowUpRight size={42}/><span>LET’S TALK</span></EnquiryLink></div><div className="contact-bottom"><p>A first portfolio. A fresh perspective. A moment to remember.<br/>Tell us what you’re dreaming of.</p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}<ArrowUpRight size={17}/></a></div></section>
    </main>
    <dialog ref={modalRef} className="image-dialog" aria-label="Demo portfolio image" onCancel={closeModal} onClick={e => {if (e.target === e.currentTarget) closeModal()}}><button className="modal-close" onClick={closeModal} aria-label="Close image"><X/></button>{lightbox !== null && <><div className="lightbox-image"><img src={`/images/demo/${work[lightbox].image}.jpg`} alt={`${work[lightbox].title} — demo photography`}/><button className="lightbox-prev" aria-label="Previous image" onClick={() => setLightbox((lightbox + work.length - 1) % work.length)}><ChevronLeft/></button><button className="lightbox-next" aria-label="Next image" onClick={() => setLightbox((lightbox + 1) % work.length)}><ChevronRight/></button></div><div className="modal-caption"><h3>{work[lightbox].title}</h3><p>Demo photography · {lightbox + 1} / {work.length}</p></div></>}</dialog>
  </>
}
