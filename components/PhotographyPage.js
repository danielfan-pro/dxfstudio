import PhotographyPortfolio from './PhotographyPortfolio'

const portfolioItems = [
  {
    src: '/photography/boston-studio-portrait-session-1400.jpg',
    alt: 'Studio portrait session by DanXFoto in Boston',
    title: 'Studio Session',
    category: 'Portrait',
    layout: 'standard',
    objectPosition: 'top center',
    width: 1400,
    height: 1412,
  },
  {
    src: '/photography/greater-boston-creative-portrait-session.jpg',
    alt: 'Creative portrait photography session in the Greater Boston Area',
    title: 'Creative Portrait',
    category: 'Portrait',
    layout: 'standard',
    objectPosition: 'center 20%',
    width: 1200,
    height: 1327,
  },
  {
    src: '/photography/boston-chinese-new-year-family-portraits-1400.jpg',
    alt: 'Chinese New Year family portraits by DanXFoto in Boston',
    title: 'Chinese New Year Portraits',
    category: 'Family',
    layout: 'standard',
    width: 1400,
    height: 1206,
  },
  {
    src: '/photography/boston-recital-portrait-photography.jpg',
    alt: 'Recital portrait photography in Boston',
    title: 'Recital Portraits',
    category: 'Portrait',
    layout: 'tall',
    objectPosition: 'center 20%',
    width: 1158,
    height: 2000,
  },
  {
    src: '/photography/greater-boston-christmas-family-session-1400.jpg',
    alt: 'Christmas family photography session in the Greater Boston Area',
    title: 'Christmas Session',
    category: 'Family',
    layout: 'standard',
    width: 1400,
    height: 933,
  },
  {
    src: '/photography/elegant-boston-recital-portrait-session.jpg',
    alt: 'Elegant recital portrait session by DanXFoto',
    title: 'Elegant Recital Portrait',
    category: 'Portrait',
    layout: 'tall',
    objectPosition: 'center 40%',
    width: 1500,
    height: 1886,
  },
  {
    src: '/photography/boston-winter-portrait-session.jpg',
    alt: 'Winter portrait photography session in Boston',
    title: 'Winter Portrait',
    category: 'Portrait',
    layout: 'standard',
    width: 1000,
    height: 1000,
  },
]

const services = [
  {
    title: 'Mini Session',
    price: '$175',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="7" />
        <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" />
      </svg>
    ),
    blurb: 'A short, focused session for families or individuals who want polished images without committing to a full-length shoot.',
    features: [
      '20-minute session',
      'Photographer-selected location',
      '8 professionally edited high-resolution photos',
      'Online gallery delivery',
      'Print release included',
    ],
  },
  {
    title: 'Portrait Session',
    price: 'From $250',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="15" r="7" />
        <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" />
        <rect x="30" y="28" width="14" height="11" rx="2" />
        <circle cx="37" cy="33.5" r="3" />
        <path d="M33 28l1.5-2h5L41 28" />
      </svg>
    ),
    blurb: 'A relaxed portrait experience for individuals, couples, or professionals who want timeless images with more room to explore.',
    features: [
      '60-minute session',
      '1 location of your choice',
      '15 professionally edited high-resolution photos',
      'Online gallery delivery',
      'Print release included',
    ],
  },
  {
    title: 'Family Session',
    price: 'From $450',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="20" r="5" />
        <path d="M3 40 a10 10 0 0 1 20 0" />
        <circle cx="35" cy="20" r="5" />
        <path d="M25 40 a10 10 0 0 1 20 0" />
        <circle cx="24" cy="27" r="3.5" />
        <path d="M16.5 40 a7.5 7.5 0 0 1 15 0" />
      </svg>
    ),
    blurb: 'A fuller storytelling session designed to capture your family naturally across meaningful moments, movement, and connection.',
    features: [
      '90-minute session',
      'Up to 2 locations',
      '30 professionally edited high-resolution photos',
      'Online gallery delivery',
      'Print release included',
    ],
  },
]

const quickLinks = [
  { label: 'Portfolio', href: '#photo-portfolio' },
  { label: 'About', href: '#photo-about' },
  { label: 'Sessions', href: '#photo-services' },
  { label: 'Book Now', href: '#photo-book-now' },
]

const tallyPopupProps = {
  'data-tally-open': '9q28GG',
  'data-tally-emoji-text': '👋',
  'data-tally-emoji-animation': 'wave',
}

export default function PhotographyPage() {
  return (
    <main style={{ background: '#ffffff' }}>
      <section
        id="photo-subnav-sticky"
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 20,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(176,125,98,0.1)',
        }}
      >
        <div
          className="photo-subnav"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '14px 40px',
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="photo-subnav-link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#7a6b61',
                textDecoration: 'none',
                paddingBottom: '2px',
                borderBottom: '1px solid transparent',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: '108px 40px 56px',
          borderBottom: '1px solid rgba(176,125,98,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#b07d62',
              }}
            >
              Photography | Greater Boston & North Shore
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 4.2vw, 60px)',
              fontWeight: 300,
              lineHeight: 1.02,
              color: '#2d2926',
              marginBottom: '24px',
              maxWidth: '860px',
            }}
          >
            Elevated now.
            <br />
            <em style={{ color: '#b07d62', fontStyle: 'italic' }}>Timeless later.</em>
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              color: '#6f635a',
              lineHeight: 1.8,
              width: '100%',
              marginBottom: '32px',
            }}
          >
            Images for individuals, couples, and families.
          </p>
          <div className="photo-hero-actions" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <a
              href="#photo-portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '220px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#b07d62',
                background: 'transparent',
                border: '1px solid rgba(176,125,98,0.32)',
                padding: '16px 28px',
                textDecoration: 'none',
              }}
            >
              View Portfolio
            </a>
            <button
              type="button"
              {...tallyPopupProps}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '220px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#fffaf5',
                background: '#b07d62',
                border: 'none',
                padding: '16px 28px',
                cursor: 'pointer',
              }}
            >
              Book a Session
            </button>
          </div>
        </div>
      </section>

      <section id="photo-portfolio" style={{ padding: '96px 40px 40px', scrollMarginTop: '140px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b07d62' }}>
              Portfolio
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.02, color: '#2d2926', marginBottom: '28px' }}>
            Driven by context.
            <br />
            <em style={{ color: '#b07d62', fontStyle: 'italic' }}>Caught in the moment.</em>
          </h2>
          <PhotographyPortfolio items={portfolioItems} />
        </div>
      </section>

      <section id="photo-about" style={{ padding: '96px 40px 40px', background: '#faf7f2', scrollMarginTop: '140px' }}>
        <div className="photo-about-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(220px, 280px)', gap: '48px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px' }}>
              <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b07d62' }}>
                About
              </span>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 300, lineHeight: 1.9, color: '#6f635a', marginBottom: '20px' }}>
              Hi, I&apos;m Dan. Based in Melrose, MA.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 300, lineHeight: 1.9, color: '#6f635a', marginBottom: '32px' }}>
              Some moments are guided, most are caught. All of them are real. I shoot families and portraits across the North Shore and Greater Boston.
            </p>
          </div>
          <div className="photo-about-portrait" style={{ position: 'relative', justifySelf: 'end', width: '100%', maxWidth: '280px' }}>
            <div style={{ border: '1px solid rgba(176,125,98,0.28)', padding: '0' }}>
              <img
                src="/photography/dan-about-2026.jpg"
                alt="DanXFoto portrait photographer Dan"
                width="4373"
                height="6560"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="photo-services" style={{ padding: '96px 40px', scrollMarginTop: '140px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px' }}>
              <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b07d62' }}>
                Sessions
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.02, color: '#2d2926', marginBottom: '20px' }}>
              Moments worth Keeping.
              <br />
              <em style={{ color: '#b07d62', fontStyle: 'italic' }}>Beautifully made.</em>
            </h2>
          </div>

          <div className="photo-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px' }}>
            {services.map((service, index) => (
              <article
                key={service.title}
                style={{
                  background: '#fcfbf8',
                  border: '1px solid rgba(176,125,98,0.1)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    color: '#b07d62',
                    margin: '0 auto 18px',
                  }}
                >
                  {service.icon}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 300, lineHeight: 1.08, color: '#2d2926', marginBottom: '10px' }}>
                  {service.title}
                </h3>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 300, color: '#b07d62', marginBottom: '18px' }}>
                  {service.price}
                </div>
                <div style={{ width: '34px', height: '1px', background: '#b07d62', margin: '0 auto 20px' }} />
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 300, lineHeight: 1.85, color: '#6f635a', marginBottom: '24px', textAlign: 'left' }}>
                  {service.blurb}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', textAlign: 'left' }}>
                  {service.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.75, color: '#6f635a' }}>
                      <span style={{ color: '#b07d62', flexShrink: 0 }}>—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  {...tallyPopupProps}
                  style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#b07d62',
                    background: 'transparent',
                    border: '1px solid rgba(176,125,98,0.32)',
                    padding: '14px 18px',
                    cursor: 'pointer',
                  }}
                >
                  Book Now
                </button>
              </article>
            ))}
          </div>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#7a6b61', marginTop: '22px' }}>
            All packages include a complimentary consultation. Custom packages are available if you need something more tailored.
          </p>
        </div>
      </section>

      <section id="photo-book-now" style={{ padding: '88px 40px 112px', background: '#faf7f2', scrollMarginTop: '140px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px' }}>
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b07d62' }}>
              Book Now
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.02, color: '#2d2926', marginBottom: '22px' }}>
            Something made.
            <br />
            <em style={{ color: '#b07d62', fontStyle: 'italic' }}>Forever kept.</em>
          </h2>
          <div className="photo-book-actions" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <button
              type="button"
              {...tallyPopupProps}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '260px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#fffaf5',
                background: '#b07d62',
                border: 'none',
                padding: '16px 28px',
                cursor: 'pointer',
              }}
            >
              Start Session Inquiry
            </button>
          </div>
          <div
            className="photo-contact-meta"
            style={{
              display: 'grid',
              gridTemplateColumns: '160px minmax(0, 1fr)',
              rowGap: '20px',
              columnGap: '32px',
              alignItems: 'baseline',
              width: '100%',
            }}
          >
            {[
              ['Email', 'studio@danxfoto.com'],
              ['Phone', '(617) 454-4419'],
              ['Based In', 'Melrose, MA'],
              ['Response Time', 'Within 24 hours'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'contents' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#b07d62',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#5a4f47',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="photo-social-links" style={{ display: 'flex', gap: '18px', alignItems: 'center', marginTop: '32px' }}>
            {[
              { href: 'https://www.instagram.com/danxfoto/', icon: '/instagram-logo.svg', label: 'Instagram' },
              { href: 'https://www.facebook.com/danxfoto/', icon: '/facebook-logo.svg', label: 'Facebook' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                style={{
                  width: '42px',
                  height: '42px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(176,125,98,0.18)',
                  background: 'transparent',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  width="20"
                  height="20"
                  loading="lazy"
                  style={{ display: 'block', width: '20px', height: '20px' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .photo-subnav-link:hover {
          color: #b07d62 !important;
          border-color: #b07d62 !important;
        }
        .photo-social-links a:hover {
          border-color: #b07d62 !important;
          transform: translateY(-1px);
        }
        @media (max-width: 1024px) {
          .photo-about-inner,
          .photo-services-grid {
            grid-template-columns: 1fr !important;
          }
          .photo-about-portrait {
            justify-self: center !important;
            margin: 0 auto;
          }
        }
        @media (max-width: 767px) {
          #photo-subnav-sticky {
            top: 72px !important;
          }
          .photo-subnav {
            justify-content: flex-start !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            overflow-x: auto;
            flex-wrap: nowrap !important;
          }
          .photo-book-actions a {
            width: 100%;
          }
          .photo-hero-actions a,
          .photo-hero-actions button {
            width: 100%;
          }
          .photo-contact-meta {
            grid-template-columns: 1fr !important;
            row-gap: 10px !important;
            column-gap: 0 !important;
          }
        }
      `}</style>
    </main>
  )
}
