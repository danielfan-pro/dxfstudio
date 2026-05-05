'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef(null)
  const toggleButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previouslyFocused = document.activeElement
    const focusable = mobileMenuRef.current?.querySelectorAll('a[href], button:not([disabled])')
    focusable?.[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      } else {
        toggleButtonRef.current?.focus()
      }
    }
  }, [menuOpen])

  const links = ['Services', 'Work', 'About', 'Contact']
  const homeHref = (section = '') => pathname === '/' ? `#${section}` : `/#${section}`
  const rootHref = pathname === '/' ? '#' : '/'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '16px 40px' : '28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176,125,98,0.15)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href={rootHref} style={{ textDecoration: 'none', maxWidth: 'calc(100% - 56px)' }}>
        <div className="brand-lockup" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/danxfoto-logo-gold.png"
            alt="DanXFoto Studio logo"
            className="brand-logo"
            width="1980"
            height="883"
            style={{
              display: 'block',
              height: '48px',
              width: 'auto',
            }}
          />
          <span className="brand-studio" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 300,
            color: '#5a4f47',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}>Studio</span>
          <div
            className="brand-descriptor"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div className="brand-divider" style={{ width: '1px', height: '24px', background: 'rgba(176,125,98,0.18)' }} />
            <span className="brand-descriptor-text" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '15px',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#7a6b61',
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
            }}>
              Web Design + Photography
            </span>
          </div>
        </div>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}
           className="hidden-mobile">
        {links.map(link => (
          <a
            key={link}
            href={homeHref(link.toLowerCase())}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#5a4f47',
              textDecoration: 'none',
              opacity: 0.7,
              transition: 'opacity 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.color = '#b07d62' }}
            onMouseLeave={e => { e.target.style.opacity = 0.7; e.target.style.color = '#5a4f47' }}
          >
            {link}
          </a>
        ))}
        <a
          href="/get-started"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fffaf5',
            background: '#b07d62',
            padding: '10px 22px',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#c49070'}
          onMouseLeave={e => e.target.style.background = '#b07d62'}
        >
          Get Started
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        ref={toggleButtonRef}
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation-menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '24px',
            height: '1px',
            background: '#5a4f47',
            transition: 'all 0.3s',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
              : i === 1 ? 'scaleX(0)'
              : 'rotate(-45deg) translate(4px, -4px)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: '64px',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          zIndex: 99,
        }}
        id="mobile-navigation-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        >
          {links.map(link => (
            <a
              key={link}
              href={homeHref(link.toLowerCase())}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: 300,
                color: '#5a4f47',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1101px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
          .brand-descriptor { display: flex !important; }
        }
        @media (max-width: 1100px) {
          nav {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .brand-lockup { gap: 10px !important; }
          .brand-logo { height: 38px !important; }
          .brand-studio {
            font-size: 10px !important;
            letter-spacing: 0.22em !important;
          }
          .brand-descriptor { display: flex !important; gap: 8px !important; }
          .brand-divider { height: 18px !important; }
          .brand-descriptor-text {
            font-size: 11px !important;
            letter-spacing: 0.08em !important;
            white-space: nowrap !important;
          }
        }
        @media (max-width: 767px) {
          nav {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .brand-lockup { gap: 8px !important; }
          .brand-logo { height: 34px !important; }
          .brand-studio {
            font-size: 9px !important;
            letter-spacing: 0.22em !important;
          }
          .brand-descriptor { display: flex !important; gap: 8px !important; }
          .brand-divider { height: 18px !important; }
          .brand-descriptor-text {
            font-size: 10px !important;
            letter-spacing: 0.06em !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </nav>
  )
}
