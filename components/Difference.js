'use client'
import { useEffect, useRef } from 'react'

const advantages = [
  {
    number: '01',
    title: 'Performance & Speed',
    diyCatch: 'Wix and Squarespace load thousands of lines of generic, bloated code on every single page just to render simple layouts. This drastically slows down performance.',
    advantage: "We write clean code using modern Next.js architecture. Your pages load in under 2 seconds, passing Google's strict Core Web Vitals tests to maximize your organic search rankings.",
  },
  {
    number: '02',
    title: 'Real Photography. Not Stock Photos.',
    diyCatch: "You either have to rely on generic stock photos of people who don't work for you in spaces that aren't yours, or try to shoot on a phone. That builds zero trust with local customers.",
    advantage: "We don't outsource. Our founder, Dan—the professional eye behind DanXFoto—brings a high-resolution Sony A7RV to your location to capture your team, your space, and your work. By blending top-tier in-house imagery with advanced web development, your site looks exactly like your business, not a template shared by 10,000 others.",
  },
  {
    number: '03',
    title: 'True Digital Ownership',
    diyCatch: 'If you stop paying your monthly subscription to Wix or Squarespace, your website is gone forever. You are locked into their platforms and cannot move your site elsewhere.',
    advantage: "You aren't renting a template; you own your visual and digital assets completely. No lock-in, no hostage situations.",
  },
  {
    number: '04',
    title: 'Secure by Architecture',
    diyCatch: 'Traditional platforms use server-side databases. Because these databases process requests in real-time, they are constant targets for malicious bots, spam, and automated hacking scripts.',
    advantage: 'We use a modern, database-free architecture. By pre-rendering your site into secure, high-speed files that live on a global network, we eliminate the primary entry point for hackers. You get enterprise-grade security out of the box.',
  },
  {
    number: '05',
    title: 'Accessibility & Legal Compliance',
    diyCatch: 'Drag-and-drop builders on Wix and Squarespace make it incredibly easy to accidentally create poor color contrast, incorrect heading structures, or broken screen-reader navigation.',
    advantage: "We build with semantic HTML and strict accessibility standards from day one, minimizing your business's legal risks and ensuring a great user experience for everyone.",
  },
  {
    number: '06',
    title: 'Time Saved',
    diyCatch: 'Building a site yourself takes dozens of hours away from running your actual business, only to end up with a site that looks DIY.',
    advantage: 'You stay focused on running your business. We handle the technical heavy lifting, design, and photography to deliver a polished, high-performance asset in a fraction of the time.',
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
            }}>Why DXF Studio</span>
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
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300,
            color: '#7a6b61', lineHeight: 1.9, marginBottom: '20px',
            width: '100%',
          }}>
            Wix and Squarespace are excellent $25/month tools. But by the time you factor in your own time spent fighting with templates, the limitations of generic stock photography, slower load speeds, and the local SEO gap, those DIY sites cost far more in missed opportunities and lost clients than they save.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px',
            fontWeight: 300, color: '#7a6b61', lineHeight: 1.9,
            width: '100%',
          }}>
            Unlike platforms that keep your site locked down, our clients have full use and true ownership of their code and visual assets.
          </p>
        </div>

        {/* Advantages grid */}
        <div style={{
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
                  }}>The DXF Advantage</p>

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
          @media (max-width: 900px) {
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
