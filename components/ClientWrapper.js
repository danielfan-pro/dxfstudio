'use client'
import dynamic from 'next/dynamic'

const Navbar     = dynamic(() => import('./Navbar'),     { ssr: false })
const Hero       = dynamic(() => import('./Hero'),       { ssr: false })
const Services   = dynamic(() => import('./Services'),   { ssr: false })
const Difference = dynamic(() => import('./Difference'), { ssr: false })
const Pricing    = dynamic(() => import('./Pricing'),    { ssr: false })
const Contact    = dynamic(() => import('./Contact'),    { ssr: false })
const Footer     = dynamic(() => import('./Footer'),     { ssr: false })

export default function ClientWrapper() {
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
