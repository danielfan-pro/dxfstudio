'use client'

import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function GetStartedClient() {
  useEffect(() => {
    const d = document
    const scriptSrc = 'https://tally.so/widgets/embed.js'

    const loadEmbeds = () => {
      if (typeof window !== 'undefined' && window.Tally) {
        window.Tally.loadEmbeds()
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc
        })
      }
    }

    if (typeof window !== 'undefined' && window.Tally) {
      loadEmbeds()
      return
    }

    const existing = d.querySelector(`script[src="${scriptSrc}"]`)
    if (existing) {
      existing.addEventListener('load', loadEmbeds)
      loadEmbeds()
      return () => existing.removeEventListener('load', loadEmbeds)
    }

    const script = d.createElement('script')
    script.src = scriptSrc
    script.onload = loadEmbeds
    script.onerror = loadEmbeds
    d.body.appendChild(script)

    return () => {
      script.removeEventListener('load', loadEmbeds)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            padding: '156px 40px 96px',
            background: '#ffffff',
            minHeight: '100vh',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: '#b07d62',
                }}
              >
                Get Started
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 6vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.04,
                color: '#2d2926',
                marginBottom: '24px',
                width: '100%',
              }}
            >
              Tell Us About <em style={{ color: '#b07d62' }}>Your Project</em>
            </h1>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#7a6b61',
                lineHeight: 1.9,
                marginBottom: '40px',
                width: '100%',
              }}
            >
              This short questionnaire helps us understand your business, your goals, and the kind of website or photography support you need. The more context you share, the more useful our first conversation will be.
            </p>

            <div
              style={{
                width: '100%',
                border: '1px solid rgba(176,125,98,0.12)',
                background: '#fcfbf8',
                overflow: 'hidden',
              }}
            >
              <iframe
                data-tally-src="https://tally.so/embed/WOlKGj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="4182"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="DanXFoto Studio | New Project Questionnaire"
                style={{ display: 'block', width: '100%', border: 'none', background: 'transparent' }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
