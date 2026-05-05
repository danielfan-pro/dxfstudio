'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Web Design & Development',
    description: 'High-performance websites built on Next.js. We write clean code from scratch—no slow templates or drag-and-drop builders—to ensure your site is a true business asset.',
    features: ['Mobile-first responsive design', 'Core Web Vitals optimized', 'Search engine optimization (SEO)-ready structure', 'Built-in Content management system (CMS) for easy visual and text updates'],
    badge: null,
    premium: false,
  },
  {
    number: '02',
    title: 'Brand Photography',
    description: 'High-end on-site photography of your real team, workspace, and work. Authentic visual storytelling builds immediate customer trust while making your brand look instantly credible.',
    features: ['Business & team headshots', 'Product & space photography', 'High-resolution digital gallery', 'Edited gallery delivered in 2 weeks'],
    badge: null,
    premium: false,
  },
  {
    number: '03',
    title: 'Launch Package',
    description: 'The ultimate all-in-one digital presence. We bundle custom web development and professional brand photography to launch your business right from day one.',
    features: ['All-in-one website build + on-site brand photo shoot', 'Google Business Profile setup', 'Local SEO foundation', 'Hosting & maintenance plan'],
    badge: null,
    premium: false,
  },
  {
    number: '04',
    title: 'Ongoing Care',
    description: "A website shouldn't sit still. Our monthly plans keep your digital presence fast, secure, and updated so you can focus entirely on running your business.",
    features: ['Monthly content updates', 'Security & performance monitoring', 'Discounted rates on photo updates', 'Priority support'],
    badge: null,
    premium: false,
  },
  {
    number: '05',
    title: 'iOS App Development',
    description: 'For businesses ready to go beyond a standard website. We build tailored web applications and native iOS apps designed to streamline your business workflow and engage your customers directly.',
    features: ['Custom client portals and dashboards', 'Advanced business workflow automation', 'Native iOS development and App Store publishing'],
    badge: 'By Inquiry',
    premium: true,
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
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {/* Section header */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#b07d62',
          }}>What We Offer</span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(38px, 5vw, 64px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: '#2d2926',
          width: '100%',
          marginBottom: '24px',
        }}>
          Custom Websites &amp; Professional Photography <em style={{ color: '#b07d62' }}>— All in One</em>
        </h2>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 300,
          color: '#7a6b61',
          lineHeight: 1.9,
          width: '100%',
        }}>
          We pair advanced web development with premium in-house photography. No templates, no outsourcing - just a completely custom digital presence that makes your business look established, credible, and trustworthy on day one.
        </p>
      </div>

      {/* Services grid — first 4 in 2x2, iOS full width below */}
      <div
        className="services-grid"
        style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '2px',
        background: 'rgba(176,125,98,0.10)',
        marginBottom: '2px',
      }}
      >
        {services.filter(s => !s.premium).map((service) => (
          <div
            key={service.number}
            className="service-card"
            style={{
              background: service.badge === 'Most Popular' ? '#f7efe6' : '#fcfbf8',
              padding: '48px 36px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s ease',
              cursor: 'default',
              position: 'relative',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#f6ece2'}
            onMouseLeave={e => e.currentTarget.style.background = service.badge === 'Most Popular' ? '#f7efe6' : '#fcfbf8'}
          >
            {service.badge === 'Most Popular' && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px', background: '#b07d62',
              }} />
            )}
            {service.badge && (
              <div style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#b07d62', border: '1px solid rgba(176,125,98,0.3)',
                padding: '4px 10px', marginBottom: '20px',
              }}>{service.badge}</div>
            )}
            <div style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '13px',
              color: '#b07d62', letterSpacing: '0.2em', marginBottom: '16px',
            }}>{service.number}</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '26px',
              fontWeight: 400, color: '#2d2926', lineHeight: 1.2, marginBottom: '20px',
            }}>{service.title}</h3>
            <div style={{ width: '30px', height: '1px', background: '#b07d62', marginBottom: '20px' }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300,
              color: '#7a6b61', lineHeight: 1.8, marginBottom: '28px',
            }}>{service.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {service.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#b07d62', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>—</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                    fontWeight: 300, color: '#5a4f47', opacity: 0.7,
                  }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* iOS — premium full-width card */}
      {services.filter(s => s.premium).map(service => (
        <div
          key={service.number}
          className="service-card service-premium-card"
          style={{
            background: '#fcfbf8',
            padding: '52px 48px',
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s ease',
            cursor: 'default',
            position: 'relative',
            borderLeft: '2px solid #b07d62',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#f6ece2'}
          onMouseLeave={e => e.currentTarget.style.background = '#fcfbf8'}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: '13px',
                color: '#b07d62', letterSpacing: '0.2em',
              }}>{service.number}</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '10px',
                fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#b07d62', border: '1px solid rgba(176,125,98,0.3)',
                padding: '4px 10px',
              }}>{service.badge}</div>
            </div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '32px',
              fontWeight: 400, color: '#2d2926', lineHeight: 1.2, marginBottom: '20px',
            }}>{service.title}</h3>
            <div style={{ width: '30px', height: '1px', background: '#b07d62', marginBottom: '20px' }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300,
              color: '#7a6b61', lineHeight: 1.9,
            }}>{service.description}</p>
          </div>

          {/* Right */}
          <div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#7a6b61', marginBottom: '20px',
            }}>What's included</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {service.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#b07d62', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '14px',
                    fontWeight: 300, color: '#5a4f47', opacity: 0.8,
                  }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:studio@danxfoto.com?subject=iOS%20Project%20Inquiry"
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#b07d62', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                borderBottom: '1px solid rgba(176,125,98,0.3)', paddingBottom: '6px',
              }}
            >
              Inquire about an iOS project
              <span style={{ fontSize: '16px' }}>→</span>
            </a>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 1100px) {
          #services .services-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          #services .service-premium-card {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
      </div>
    </section>
  )
}
