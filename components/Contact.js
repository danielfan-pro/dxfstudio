'use client'
import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your preferred form handler (EmailJS, Formspree, etc.)
    // For now, simulate a successful send
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(176,125,98,0.10)',
    border: '1px solid rgba(90,79,71,0.14)',
    borderRadius: 0,
    padding: '14px 16px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    fontWeight: 300,
    color: '#2d2926',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <div className="contact-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'
            }}>
              <div style={{ width: '40px', height: '1px', background: '#b07d62' }} />
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#b07d62',
              }}>Get In Touch</span>
            </div>

            <h2 className="contact-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 300,
              color: '#2d2926',
              lineHeight: 1.1,
              marginBottom: '32px',
            }}>
              Let's build something<br />
              <em style={{ color: '#b07d62' }}>worth finding.</em>
            </h2>

            <p className="contact-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#7a6b61',
              lineHeight: 1.9,
              marginBottom: '48px',
            }}>
              No jargon, no pushy sales pitch. Just a straightforward conversation about what your business needs and whether we're the right fit.
            </p>

            <div className="contact-reveal" style={{
              opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
              display: 'flex', flexDirection: 'column', gap: '20px'
            }}>
              {[
                { label: 'Email', value: 'hello@dxfstudio.com' },
                { label: 'Based in', value: 'Boston / Melrose, MA' },
                { label: 'Response time', value: 'Within 24 hours' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#b07d62',
                    minWidth: '100px',
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#5a4f47',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-reveal" style={{
            opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease',
          }}>
            {status === 'sent' ? (
              <div style={{
                padding: '60px 40px',
                background: '#fcfbf8',
                textAlign: 'center',
                border: '1px solid rgba(176,125,98,0.2)',
              }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '48px',
                  color: '#b07d62',
                  marginBottom: '16px',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#2d2926',
                  marginBottom: '12px',
                }}>Message received.</h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#7a6b61',
                }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'name', label: 'Your Name', type: 'text', required: true },
                  { key: 'email', label: 'Email Address', type: 'email', required: true },
                  { key: 'business', label: 'Business Name', type: 'text', required: false },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#7a6b61',
                      marginBottom: '8px',
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.key]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(176,125,98,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(90,79,71,0.14)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#7a6b61',
                    marginBottom: '8px',
                  }}>Tell us about your project</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(176,125,98,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(90,79,71,0.14)'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#fffaf5',
                    background: '#b07d62',
                    border: 'none',
                    padding: '18px',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    transition: 'background 0.2s',
                    width: '100%',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (status !== 'sending') e.target.style.background = '#c49070' }}
                  onMouseLeave={e => e.target.style.background = '#b07d62'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
