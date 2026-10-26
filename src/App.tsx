import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import HomePage from './pages/HomePage'
import { WhatsAppButton } from './components/WhatsAppButton'
import { StudioPage, ServicesPage, ServicePage, PortfolioPage, ExperiencesPage, ContactPage, NotFoundPage } from './pages/InnerPages'
import { siteConfig } from './data/siteConfig'
import { serviceDetails } from './data/services'

const navigation = [['The studio', '/studio'], ['Our services', '/services'], ['Portfolio', '/portfolio'], ['Experiences', '/experiences']] as const
const titles: Record<string, string> = { '/': 'Portfolios, Photography & Experiences', '/studio': 'The Studio', '/services': 'Our Services', '/portfolio': 'Portfolio', '/experiences': 'Celebrity Experiences', '/contact': 'Contact the Studio' }

function Layout() {
  const [menu, setMenu] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!menu) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenu(false); menuButtonRef.current?.focus() }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenu(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menu])
  const { pathname: rawPathname, hash, search } = useLocation()
  const pathname = rawPathname.replace(/\/+$/, '') || '/'
  useEffect(() => {
    setMenu(false)
    document.title = `Dreams Maker Studio | ${titles[pathname] ?? serviceDetails.find(item => pathname === `/services/${item.slug}`)?.title ?? 'Page Not Found'}`
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header id="top" ref={headerRef} className="site-header">
      <Link className="brand" to="/" aria-label="Dreams Maker Studio home"><img src="/images/dms-logo-black.png" alt="Dreams Maker Studio" /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav>
      <Link className="header-cta" to="/contact">Let’s talk <ArrowUpRight size={16}/></Link>
      <button ref={menuButtonRef} className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu ? 'Close navigation' : 'Open navigation'}>{menu ? <X/> : <Menu/>}</button>
      {menu && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{[['Home','/'], ...navigation, ['Get in touch','/contact']].map(([label,path]) => <NavLink key={path} to={path} onClick={() => setMenu(false)}>{label}<ArrowUpRight size={20}/></NavLink>)}</nav>}
    </header>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/studio" element={<StudioPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/services/:slug" element={<ServicePage/>}/>
      <Route path="/portfolio" element={<PortfolioPage/>}/>
      <Route path="/experiences" element={<ExperiencesPage/>}/>
      <Route path="/contact" element={<ContactPage key={search}/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    <WhatsAppButton/>
    <footer className="footer section-wrap"><div className="footer-top"><Link to="/" aria-label="Dreams Maker Studio home"><img src="/images/dms-logo-black.png" alt="Dreams Maker Studio"/></Link><p>Real people. Big dreams.<br/>A different kind of studio.</p><a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer"><span className="instagram-symbol" aria-hidden="true">◎</span> Follow the studio <ArrowUpRight size={15}/></a></div><nav className="footer-navigation" aria-label="Footer navigation">{navigation.map(([label,path]) => <Link key={path} to={path}>{label}</Link>)}<Link to="/contact">Contact</Link></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} Dreams Maker Studio</span><span>PHOTOGRAPHY · MODELING · EXPERIENCES</span><a href="#top" onClick={e => {e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>Back to top ↑</a></div></footer>
  </>
}
export default function App() { return <BrowserRouter><Layout/></BrowserRouter> }
