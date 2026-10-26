import { mkdir, readFile, writeFile } from 'node:fs/promises'

// Emit entry documents so direct links also work on static GitHub Pages hosting.
const routes = {
  studio: 'The Studio',
  services: 'Our Services',
  portfolio: 'Portfolio',
  experiences: 'Celebrity Experiences',
  contact: 'Contact the Studio',
  'services/portfolio-shoots': 'Portfolio Shoots',
  'services/celebrity-shoots': 'Celebrity Shoots',
  'services/celebrity-meetups': 'Celebrity Meetups',
  'services/casting-modeling': 'Casting & Modeling',
}
const template = await readFile('dist/index.html', 'utf8')
for (const [path, title] of Object.entries(routes)) {
  await mkdir(`dist/${path}`, { recursive: true })
  await writeFile(`dist/${path}/index.html`, template.replace(/<title>.*?<\/title>/, `<title>Dreams Maker Studio | ${title.replaceAll('&', '&amp;')}</title>`))
}
await writeFile('dist/404.html', template)
console.log(`Generated ${Object.keys(routes).length} static route entries and 404 fallback.`)
