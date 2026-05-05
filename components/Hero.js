'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el, i) => {
      setTimeout(() => {
        el.style.animation = `fadeUp 0.9s ease forwards`
      }, i * 160)
    })
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        padding: '104px 40px 72px',
      }}
    >
      {/* Copper glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(176,125,98,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div
          className="reveal"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: '#b07d62',
            marginBottom: '24px',
          }}
        >
          Web + Photography, All In-House
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4.2vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '22px',
            width: '100%',
          }}
        >
          Your Business<br />
          Deserves More<br />
          <span style={{ color: '#b07d62' }}>Than Social Media.</span>
        </h2>

        <h2
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 4.2vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '28px',
            width: '100%',
            display: 'none',
          }}
        >
          We Build the Digital Engines <span style={{ color: '#b07d62' }}>That Keep Them.</span>
        </h2>

        <div
          className="reveal"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            fontWeight: 300,
            color: '#7a6b61',
            lineHeight: 1.8,
            width: '100%',
            marginBottom: '40px',
          }}
        >
          <p style={{ marginBottom: '12px' }}>
            Most customers Google your business before they call. If they see a generic template or cheap stock photos, they move on.
          </p>
        </div>

        <div
          className="reveal hero-proof-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '28px',
            marginBottom: '40px',
          }}
        >
          {[
            { title: '1 in 4', label: 'Small businesses have no website' },
            { title: '75%', label: 'Consumers judge credibility by design' },
            { title: '100%', label: 'In-house. Custom development and on-site brand photography' },
          ].map((item) => (
            <div key={item.title}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                fontWeight: 500,
                color: '#b07d62',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {item.title}
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                color: '#7a6b61',
                letterSpacing: '0.03em',
                lineHeight: 1.6,
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal hero-cta-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="/get-started"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#fffaf5',
              background: '#b07d62',
              padding: '16px 36px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c49070'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#b07d62'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book Free Consultation
          </a>
          <a
            href="#services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#5a4f47',
              border: '1px solid rgba(45,41,38,0.16)',
              padding: '16px 36px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b07d62'; e.currentTarget.style.color = '#b07d62' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(45,41,38,0.16)'; e.currentTarget.style.color = '#5a4f47' }}
          >
            View Our Offerings
          </a>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #hero .hero-proof-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>

    </section>
  )
}
