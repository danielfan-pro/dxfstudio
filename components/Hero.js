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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 40px 80px',
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
        {/* Eyebrow */}
        <div className="reveal" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#b07d62',
          }}>
            Web Design + Photography · Boston, MA
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 8.5vw, 108px)',
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '8px',
          }}
        >
          If People Can't
        </h1>
        <h1
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 8.5vw, 108px)',
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '8px',
            fontStyle: 'italic',
          }}
        >
          Find You
        </h1>
        <h1
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 8.5vw, 108px)',
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: '#b07d62',
            marginBottom: '48px',
          }}
        >
          They Move On.
        </h1>

        {/* Subtext */}
        <p
          className="reveal"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            fontWeight: 300,
            color: '#7a6b61',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '32px',
          }}
        >
          We design websites and brand photography for small businesses that need to look credible online, show up clearly on mobile, and turn searchers into real leads.
        </p>

        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '28px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {[
            { title: '75%', label: 'judge credibility by design' },
            { title: 'Mobile-first', label: 'because most traffic is on phones' },
            { title: 'Real photos', label: 'so your business looks trustworthy' },
          ].map((item) => (
            <div key={item.title} style={{ minWidth: '180px' }}>
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

        {/* CTAs */}
        <div className="reveal" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="#contact"
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
            See Our Work
          </a>
        </div>
      </div>

    </section>
  )
}
