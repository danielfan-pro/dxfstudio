'use client'
import { useEffect, useRef } from 'react'

const advantages = [
  {
    number: '01',
    title: 'Performance & Speed',
    diyCatch: 'Bloated templates that slow down your site and hurt your Google rankings.',
    advantage: 'Clean Next.js code. Pages load in under 2 seconds, fully optimized to rank.',
  },
  {
    number: '02',
    title: 'Authentic Visuals',
    diyCatch: "Relying on generic stock photos of people and places that aren't yours.",
    advantage: 'High-resolution on-site photography of your real team, space, and work.',
  },
  {
    number: '03',
    title: 'True Asset Ownership',
    diyCatch: 'You rent your site. If you stop paying your monthly subscription, it is gone forever.',
    advantage: 'You own the code and visual assets completely. No platform lock-in.',
  },
  {
    number: '04',
    title: 'Built-In Security',
    diyCatch: 'Traditional databases that process requests in real-time are constant targets for malicious bots.',
    advantage: 'A modern database-free architecture that eliminates the primary entry points for hackers.',
  },
  {
    number: '05',
    title: 'Compliance & UX',
    diyCatch: 'Drag-and-drop tools make it incredibly easy to break screen-reader navigation and color contrast rules.',
    advantage: 'Built with semantic HTML and accessibility-minded best practices from day one.',
  },
  {
    number: '06',
    title: 'Focus on Your Business',
    diyCatch: 'Dozens of hours spent fighting a template, only to end up with a site that looks DIY.',
    advantage: 'You stay focused on running your business while we handle the heavy lifting.',
  },
]

export default function Difference() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.adv-card')
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
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
        background: '#faf7f2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', left: '-10%', top: '10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(176,125,98,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-5%', bottom: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(176,125,98,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
              letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b07d62',
            }}>Why DanXFoto Studio</span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 300, lineHeight: 1.1, color: '#2d2926', marginBottom: '24px',
            width: '100%',
          }}>
            We deliver a <em style={{ color: '#b07d62' }}>business asset.</em>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500,
            color: '#5a4f47', lineHeight: 1.9,
            width: '100%',
          }}>
            Wix and Squarespace are great $25/month tools, but the hidden costs of slow speeds, generic stock photos, and time spent building it yourself end up costing your business far more in lost clients.
          </p>
        </div>

        {/* Advantages grid */}
        <div
          className="advantages-grid"
          style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '2px',
          background: 'rgba(176,125,98,0.10)',
          marginBottom: '80px',
        }}>
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="adv-card"
              style={{
                background: '#fcfbf8',
                padding: '44px 36px',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s ease, border-top-color 0.3s ease',
                borderTop: '2px solid transparent',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f6ece2'
                e.currentTarget.style.borderTopColor = '#b07d62'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fcfbf8'
                e.currentTarget.style.borderTopColor = 'transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '13px',
                  color: '#b07d62', letterSpacing: '0.16em',
                  flexShrink: 0, marginTop: '5px',
                }}>{adv.number}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '23px',
                  fontWeight: 400, color: '#2d2926', lineHeight: 1.25,
                }}>{adv.title}</h3>
              </div>

              <div
                className="adv-split"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  alignItems: 'stretch',
                }}
              >
                <div style={{
                  paddingRight: '24px',
                  borderRight: '1px solid rgba(176,125,98,0.12)',
                }}>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#7a6b61',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>The DIY Catch</p>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#8b7d73',
                    lineHeight: 1.8,
                  }}>{adv.diyCatch}</p>
                </div>

                <div style={{
                  paddingLeft: '24px',
                }}>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#b07d62',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>Our Advantage</p>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#2d2926',
                    lineHeight: 1.85,
                  }}>{adv.advantage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1100px) {
            #about .advantages-grid {
              grid-template-columns: 1fr !important;
            }

            #about .adv-split {
              grid-template-columns: 1fr !important;
            }

            #about .adv-split > div:first-child {
              padding-right: 0 !important;
              padding-bottom: 18px !important;
              border-right: none !important;
              border-bottom: 1px solid rgba(176,125,98,0.12) !important;
              margin-bottom: 18px !important;
            }

            #about .adv-split > div:last-child {
              padding-left: 0 !important;
            }
          }
        `}</style>

      </div>
    </section>
  )
}
