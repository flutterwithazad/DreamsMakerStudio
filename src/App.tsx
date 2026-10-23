import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComingSoonPage } from './pages/ComingSoonPage'

/**
 * App — routing shell.
 *
 * React Router is included here so future pages (talent, studio, campaigns…)
 * can be added without structural changes.
 *
 * GitHub Pages note: this uses BrowserRouter with the base path configured
 * in vite.config.ts. A 404.html redirect is NOT needed when the site is
 * deployed to a custom domain root (dreamsmakerstudio.in) because there
 * is only one page and no client-side navigation.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </BrowserRouter>
  )
}
