'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const homeHref = (section = '') => pathname === '/' ? `#${section}` : `/#${section}`
  const links = [
    { label: 'Services', href: homeHref('services') },
    { label: 'Approach', href: homeHref('difference') },
    { label: 'Pricing', href: homeHref('pricing') },
    { label: 'Photography', href: '/photography' },
    { label: 'Contact', href: homeHref('contact') },
  ]

  return (
    <footer style={{
      padding: '48px 40px',
      background: '#faf7f2',
      borderTop: '1px solid rgba(176,125,98,0.1)',
    }}>
      <div
        className="footer-inner"
        style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}
      >
        <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/danxfoto-logo-gold.png"
            alt="DanXFoto logo"
            className="footer-logo"
            width="1980"
            height="883"
            style={{
              display: 'block',
              height: '42px',
              width: 'auto',
            }}
          />
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: pathname === '/photography' && link.label === 'Photography' ? '#b07d62' : '#7a6b61',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#b07d62'}
              onMouseLeave={e => {
                e.target.style.color = pathname === '/photography' && link.label === 'Photography' ? '#b07d62' : '#7a6b61'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-copy" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 300,
          color: '#7a6b61',
          letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} DanXFoto. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-inner {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            gap: 20px !important;
          }
          .footer-brand {
            justify-content: center !important;
          }
          .footer-links {
            justify-content: center !important;
            gap: 24px !important;
          }
          .footer-copy {
            text-align: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  )
}
