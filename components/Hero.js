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
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '8px',
          }}
        >
          Your Business
        </h1>
        <h1
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#2d2926',
            marginBottom: '8px',
            fontStyle: 'italic',
          }}
        >
          Deserves More
        </h1>
        <h1
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#b07d62',
            marginBottom: '48px',
          }}
        >
          Than Social Media.
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
            marginBottom: '52px',
          }}
        >
          Most customers Google you before they call. If they can't find you — or don't trust what they see — they move on. We fix that.
        </p>

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

        {/* Stats row */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '80px',
            paddingTop: '40px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '1 in 4', label: 'Small businesses\nhave no website' },
            { num: '75%', label: 'Of consumers judge\ncredibility by design' },
            { num: '58%', label: 'Of all web traffic\nis mobile' },
          ].map(stat => (
            <div key={stat.num}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: 500,
                color: '#b07d62',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 300,
                color: '#7a6b61',
                letterSpacing: '0.05em',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
