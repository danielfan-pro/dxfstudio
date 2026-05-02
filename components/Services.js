'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Web Design & Development',
    description: 'Custom-built websites on Next.js — fast, mobile-optimized, and built to rank on Google. Not a template. Not a drag-and-drop builder. A real website that works.',
    features: ['Mobile-first responsive design', 'Core Web Vitals optimized', 'SEO-ready structure', 'CMS so you update your own content'],
  },
  {
    number: '02',
    title: 'Brand Photography',
    description: 'Professional photos of your business, team, products, and space. Stock photos signal generic. Real photos signal credible. We shoot both on the same day.',
    features: ['Business & team headshots', 'Product & space photography', 'Same-day shoot + web build', 'Edited gallery delivered in 2 weeks'],
  },
  {
    number: '03',
    title: 'Launch Package',
    description: 'The full combo — web design and photography bundled together. Everything a new or relaunching business needs to show up professionally from day one.',
    features: ['Custom website + photography', 'Google Business Profile setup', 'Local SEO foundation', 'Hosting & maintenance plan'],
  },
  {
    number: '04',
    title: 'Ongoing Care',
    description: 'Your website is never truly "done." We offer monthly plans to keep it updated, secure, and performing — so you can focus on running your business.',
    features: ['Monthly content updates', 'Security & performance monitoring', 'Quarterly photo refresh available', 'Priority support'],
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 120)
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
      id="services"
      ref={ref}
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#b07d62',
          }}>What We Offer</span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(38px, 5vw, 64px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: '#f5f0eb',
          maxWidth: '600px',
        }}>
          Everything a small business needs to{' '}
          <em style={{ color: '#b07d62' }}>look the part</em>
        </h2>
      </div>

      {/* Services grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
        background: 'rgba(176,125,98,0.08)',
      }}>
        {services.map((service) => (
          <div
            key={service.number}
            className="service-card"
            style={{
              background: '#1a1714',
              padding: '48px 36px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#221e1a'}
            onMouseLeave={e => e.currentTarget.style.background = '#1a1714'}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '13px',
              color: '#b07d62',
              letterSpacing: '0.2em',
              marginBottom: '20px',
            }}>
              {service.number}
            </div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '26px',
              fontWeight: 400,
              color: '#f5f0eb',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              {service.title}
            </h3>
            <div style={{ width: '30px', height: '1px', background: '#b07d62', marginBottom: '20px' }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#8a7d74',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}>
              {service.description}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {service.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#b07d62', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>—</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#e8e0d8',
                    opacity: 0.7,
                  }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
