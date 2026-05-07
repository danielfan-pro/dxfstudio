'use client'
import { Fragment, useRef, useEffect } from 'react'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.contact-reveal')
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
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
      id="contact"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: '#faf7f2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        right: '-5%',
        bottom: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(176,125,98,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '100%' }}>
          <div
            className="contact-reveal"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.7s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#b07d62',
            }}>Get In Touch</span>
          </div>

          <h2
            className="contact-reveal"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.7s ease',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 300,
              color: '#2d2926',
              lineHeight: 1.1,
              marginBottom: '32px',
              width: '100%',
            }}
          >
            Let&apos;s Build Something <em style={{ color: '#b07d62' }}>Great Together</em>
          </h2>

          <p
            className="contact-reveal"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.7s ease',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#7a6b61',
              lineHeight: 1.9,
              marginBottom: '48px',
              width: '100%',
            }}
          >
            No jargon, no pushy sales pitch. Just a straightforward conversation about what your business needs and whether we&apos;re the right fit. If you&apos;re ready to share your project details, you can{' '}
            <a
              href="https://danxfoto.com/get-started"
              className="contact-questionnaire-link"
              style={{
                color: '#b07d62',
                textDecoration: 'none',
                borderBottom: '1px solid #b07d62',
                transition: 'opacity 0.2s ease, border-color 0.2s ease',
              }}
            >
              fill out our client questionnaire
            </a>{' '}
            to get started.
          </p>

          <div
            className="contact-reveal contact-details-grid"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.7s ease',
              display: 'grid',
              gridTemplateColumns: '160px minmax(0, 1fr)',
              rowGap: '20px',
              columnGap: '32px',
              alignItems: 'baseline',
              width: '100%',
            }}
          >
            {[
              { label: 'Email', value: 'studio@danxfoto.com' },
              { label: 'Phone', value: '(617) 454-4419' },
              { label: 'Based in', value: 'Melrose, MA' },
              { label: 'Response time', value: 'Within 24 hours' },
            ].map(item => (
              <Fragment key={item.label}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#b07d62',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#5a4f47',
                  }}
                >
                  {item.value}
                </span>
              </Fragment>
            ))}
          </div>

          <style>{`
            #contact .contact-questionnaire-link:hover {
              opacity: 0.75;
              border-color: rgba(176, 125, 98, 0.75);
            }

            @media (max-width: 700px) {
              #contact .contact-details-grid {
                grid-template-columns: 1fr !important;
                row-gap: 10px !important;
                column-gap: 0 !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
