'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$800',
    sub: 'one-time',
    description: 'For businesses that need to get online fast with a clean, professional presence.',
    features: [
      '3-page custom website',
      'Mobile optimized',
      'Contact form',
      'Google Business setup',
      '1 round of revisions',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Launch',
    price: '$1,800',
    sub: 'one-time',
    description: 'The full combo. A custom website + professional photography, ready to launch.',
    features: [
      '5-page custom website',
      'Half-day brand photo shoot',
      'Edited photo gallery (40+ images)',
      'CMS for self-editing',
      'Local SEO foundation',
      '2 rounds of revisions',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Care Plan',
    price: '$99',
    sub: 'per month',
    description: 'Keep your site updated, secure, and performing after launch.',
    features: [
      'Monthly content updates',
      'Security monitoring',
      'Performance checks',
      'Hosting included',
      'Priority email support',
    ],
    cta: 'Add to Any Plan',
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.price-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="work"
      ref={ref}
      style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#b07d62',
          }}>Pricing</span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 300,
          color: '#2d2926',
          lineHeight: 1.1,
          maxWidth: '500px',
        }}>
          Simple, transparent<br />
          <em style={{ color: '#b07d62' }}>pricing</em>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
        background: 'rgba(176,125,98,0.10)',
      }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="price-card"
            style={{
              background: plan.highlight ? '#f7efe6' : '#fcfbf8',
              padding: '48px 36px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {plan.highlight && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: '#b07d62',
              }} />
            )}

            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: plan.highlight ? '#b07d62' : '#7a6b61',
              marginBottom: '20px',
            }}>
              {plan.name}
            </div>

            <div style={{ marginBottom: '8px' }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '52px',
                fontWeight: 400,
                color: '#2d2926',
                lineHeight: 1,
              }}>{plan.price}</span>
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: '#7a6b61',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}>{plan.sub}</div>

            <div style={{ width: '30px', height: '1px', background: '#b07d62', marginBottom: '20px' }} />

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#7a6b61',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}>{plan.description}</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px', flex: 1 }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#b07d62', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#5a4f47',
                    opacity: 0.75,
                  }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 24px',
                textAlign: 'center',
                display: 'block',
                background: plan.highlight ? '#b07d62' : 'transparent',
                color: plan.highlight ? '#fffaf5' : '#b07d62',
                border: plan.highlight ? 'none' : '1px solid rgba(176,125,98,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = plan.highlight ? '#c49070' : 'rgba(176,125,98,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = plan.highlight ? '#b07d62' : 'transparent'
              }}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '13px',
        fontWeight: 300,
        color: '#7a6b61',
        textAlign: 'center',
        marginTop: '32px',
      }}>
        Every project starts with a free consultation. Custom quotes available for larger projects.
      </p>
    </section>
  )
}
