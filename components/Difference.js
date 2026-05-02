'use client'
import { useEffect, useRef } from 'react'

export default function Difference() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.diff-reveal')
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: '#141210',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        left: '-10%',
        top: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(176,125,98,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left: text */}
          <div>
            <div className="diff-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'
            }}>
              <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#b07d62',
              }}>Why DXF Studio</span>
            </div>

            <h2 className="diff-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f5f0eb',
              marginBottom: '32px',
            }}>
              Web design and photography.<br />
              <em style={{ color: '#b07d62' }}>Under one roof.</em>
            </h2>

            <p className="diff-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#8a7d74',
              lineHeight: 1.9,
              marginBottom: '24px',
            }}>
              Most web designers use stock photos. Most photographers don't build websites. DXF Studio does both — so your site launches with real images of your business, your people, and your work.
            </p>

            <p className="diff-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#8a7d74',
              lineHeight: 1.9,
              marginBottom: '48px',
            }}>
              No stock photos. No mismatched visuals. Just a complete, cohesive brand presence that looks like you spent five times more than you did.
            </p>

            <a
              className="diff-reveal"
              href="#contact"
              style={{
                opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#b07d62',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid rgba(176,125,98,0.3)',
                paddingBottom: '6px',
              }}
            >
              Start a conversation
              <span style={{ fontSize: '16px' }}>→</span>
            </a>
          </div>

          {/* Right: feature blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              {
                icon: '◎',
                title: 'One point of contact',
                desc: 'You deal with one person for the whole project. No handoffs. No miscommunication between a designer and a photographer.',
              },
              {
                icon: '◈',
                title: 'Built for real businesses',
                desc: 'We specialize in local service businesses — restaurants, salons, contractors, fitness studios, consultants. We know what works for your audience.',
              },
              {
                icon: '◇',
                title: 'You own everything',
                desc: 'Your website, your photos, your domain. We build it, you own it. Transparent pricing, no hidden lock-ins.',
              },
              {
                icon: '◉',
                title: 'Update your own content',
                desc: 'Every site includes a simple content manager so you can update text and photos yourself — no coding, no calling us for every small change.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="diff-reveal"
                style={{
                  opacity: 0, transform: 'translateY(24px)',
                  transition: `all 0.7s ease ${i * 0.1}s`,
                  background: '#1a1714',
                  padding: '28px 32px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  borderLeft: '2px solid transparent',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = '#b07d62'}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'transparent'}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  color: '#b07d62',
                  flexShrink: 0,
                  lineHeight: 1.4,
                }}>{item.icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#e8e0d8',
                    marginBottom: '6px',
                    letterSpacing: '0.02em',
                  }}>{item.title}</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#8a7d74',
                    lineHeight: 1.7,
                  }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
