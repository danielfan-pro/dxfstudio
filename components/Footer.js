export default function Footer() {
  return (
    <footer style={{
      padding: '48px 40px',
      background: '#efe4d8',
      borderTop: '1px solid rgba(176,125,98,0.1)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '20px',
            fontWeight: 600,
            color: '#b07d62',
            letterSpacing: '0.08em',
          }}>DXF</span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            fontWeight: 300,
            color: '#7a6b61',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}>Studio</span>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
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

        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 300,
          color: '#7a6b61',
          letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} DXF Studio · Boston, MA
        </div>
      </div>
    </footer>
  )
}
