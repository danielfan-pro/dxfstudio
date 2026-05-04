export default function Footer() {
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
            src="/dxf-logo-gold.png"
            alt="DXF Studio logo"
            className="footer-logo"
            style={{
              display: 'block',
              height: '30px',
              width: 'auto',
            }}
          />
          <span className="footer-studio" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            fontWeight: 300,
            color: '#7a6b61',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}>Studio</span>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {['Services', 'Work', 'About', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#7a6b61',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#b07d62'}
              onMouseLeave={e => e.target.style.color = '#7a6b61'}
            >
              {link}
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
          © {new Date().getFullYear()} DXF Studio
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
