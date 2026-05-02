'use client'
import { useEffect, useRef } from 'react'

const advantages = [
  {
    number: '01',
    title: 'Speed & SEO — Built Into the Foundation',
    pitch: 'Wix loads thousands of lines of generic drag-and-drop code on every page. Our sites are custom-coded on Next.js and deployed on Vercel\'s global edge network.',
    detail: 'Pages load in under 2 seconds, pass Google\'s Core Web Vitals, and rank higher in search — not because of tricks, but because the architecture is right from day one.',
    tag: 'Performance',
  },
  {
    number: '02',
    title: 'Real Photography. Not Stock Photos.',
    pitch: 'Wix gives you free stock photos of people who don\'t work for you, in spaces that aren\'t yours. That builds zero trust with local customers.',
    detail: 'We bring a Sony A7RV to your location and photograph your team, your space, and your work. Your website looks like your business — not a template shared by 10,000 others.',
    tag: 'Differentiator',
  },
  {
    number: '03',
    title: 'You Own It. You\'re Not Renting It.',
    pitch: 'Stop paying Wix and your website disappears. You can\'t move it, export it, or hand it off. You\'re locked in on their terms, forever.',
    detail: 'We store your code on GitHub and deploy on Vercel. You own every line. If you ever want to move, take it with you. No lock-in, no hostage situations.',
    tag: 'Ownership',
  },
  {
    number: '04',
    title: 'Secure by Architecture',
    pitch: 'WordPress and Wix sites have databases — and databases get hacked. Bots probe them constantly. Most owners have no idea their site is a target.',
    detail: 'Our static Next.js sites have no database to attack. There is nothing to break into. The most secure way to exist online in 2026, with zero extra effort on your part.',
    tag: 'Security',
  },
  {
    number: '05',
    title: 'Accessibility & Legal Compliance',
    pitch: 'ADA web accessibility lawsuits against small businesses have increased sharply. Most DIY templates fail basic compliance — and most owners find out via a demand letter.',
    detail: 'Every site we build follows WCAG accessibility standards. It\'s not just good ethics — it protects your business from an increasingly common and expensive legal risk.',
    tag: 'Compliance',
  },
  {
    number: '06',
    title: 'Done For You. Not Done By You.',
    pitch: 'Your time is worth $100+ an hour. Wix is a tool — you still have to use it. That means 20–40 hours of your time fighting templates, writing copy, figuring out settings.',
    detail: 'You give us the details. We deliver a finished, professional brand. Photography, development, SEO setup, domain, hosting — all handled. You run your business.',
    tag: 'Time Saved',
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
        background: '#f7f1ea',
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
        <div style={{ marginBottom: '80px', maxWidth: '700px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
              letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b07d62',
            }}>Why DXF Studio</span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: 300, lineHeight: 1.1, color: '#2d2926', marginBottom: '24px',
          }}>
            Wix is a <em style={{ color: '#b07d62' }}>$25/month tool.</em><br />
            We deliver a business asset.
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300,
            color: '#7a6b61', lineHeight: 1.9, marginBottom: '12px',
          }}>
            If a better website brings you just one or two extra clients a year, it has already paid for itself many times over. Wix is an expense. DXF Studio is an investment.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px',
            fontWeight: 300, color: '#7a6b61', lineHeight: 1.9,
          }}>
            Here is exactly why.
          </p>
        </div>

        {/* Advantages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2px',
          background: 'rgba(176,125,98,0.10)',
          marginBottom: '80px',
        }}>
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="adv-card"
              style={{
                background: '#fffaf5',
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
                e.currentTarget.style.background = '#fffaf5'
                e.currentTarget.style.borderTopColor = 'transparent'
              }}
            >
              <div style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#b07d62', border: '1px solid rgba(176,125,98,0.3)',
                padding: '4px 10px', marginBottom: '24px',
              }}>
                {adv.tag}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '13px',
                  color: 'rgba(176,125,98,0.4)', letterSpacing: '0.1em',
                  flexShrink: 0, marginTop: '5px',
                }}>{adv.number}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '23px',
                  fontWeight: 400, color: '#2d2926', lineHeight: 1.25,
                }}>{adv.title}</h3>
              </div>

              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400,
                color: '#5a4f47', lineHeight: 1.8, marginBottom: '16px', opacity: 0.85,
              }}>{adv.pitch}</p>

              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300,
                color: '#7a6b61', lineHeight: 1.8,
                paddingTop: '16px', borderTop: '1px solid rgba(176,125,98,0.1)',
              }}>{adv.detail}</p>
            </div>
          ))}
        </div>

        {/* Price objection callout */}
        <div style={{
          background: '#fffaf5',
          border: '1px solid rgba(176,125,98,0.15)',
          padding: '56px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(to right, #b07d62, transparent)',
          }} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px', alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
                letterSpacing: '0.3em', textTransform: 'uppercase',
                color: '#b07d62', marginBottom: '20px',
              }}>The honest answer</div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 300, color: '#2d2926', lineHeight: 1.2,
              }}>
                "But Wix is only<br />
                <em style={{ color: '#b07d62' }}>$25 a month."</em>
              </h3>
            </div>
            <div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                fontWeight: 300, color: '#7a6b61', lineHeight: 1.9, marginBottom: '20px',
              }}>
                Wix is a $25/month tool. You still have to build it, photograph it, and maintain it yourself — or hire someone to. Add their time, the stock photo limitations, slower load speed, and the SEO gap, and that "$25 site" costs far more in lost business than it saves.
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                fontWeight: 300, color: '#5a4f47', lineHeight: 1.9, fontStyle: 'italic',
              }}>
                If our faster site, better photography, and stronger SEO bring you just one extra client a month — it has paid for itself many times over.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
