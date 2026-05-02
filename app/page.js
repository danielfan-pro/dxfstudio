export const dynamic = 'force-dynamic'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Difference from '../components/Difference'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(176,125,98,0.2), transparent)' }} />
        <Services />
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(176,125,98,0.2), transparent)' }} />
        <Difference />
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(176,125,98,0.2), transparent)' }} />
        <Pricing />
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(176,125,98,0.2), transparent)' }} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
