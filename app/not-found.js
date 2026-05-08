export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100svh',
        background: '#ffffff',
        color: '#2d2926',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          padding: '28px 40px',
          borderBottom: '1px solid rgba(176,125,98,0.12)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <a
            href="/"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            <img
              src="/danxfoto-logo-gold.png"
              alt="DanXFoto logo"
              width="1980"
              height="883"
              style={{
                display: 'block',
                height: '44px',
                width: 'auto',
              }}
            />
          </a>
        </div>
      </header>

      <section
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px',
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
              Page Not Found
            </span>
            <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
          </div>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(54px, 8vw, 104px)',
              fontWeight: 300,
              lineHeight: 0.95,
              marginBottom: '28px',
            }}
          >
            This page
            <br />
            <em style={{ color: '#b07d62', fontStyle: 'italic' }}>doesn&apos;t exist.</em>
          </h1>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#7a6b61',
              maxWidth: '560px',
              margin: '0 auto 40px',
            }}
          >
            The link may be outdated, or the page may have moved. Let&apos;s get you back to the main site.
          </p>

          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px',
              padding: '16px 28px',
              background: '#b07d62',
              color: '#fffaf5',
              textDecoration: 'none',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'background 0.2s ease, opacity 0.2s ease',
            }}
          >
            Return Home
          </a>
        </div>
      </section>
    </main>
  )
}
