'use client'
import { useState } from 'react'

const plans = [
  {
    id: 'web',
    name: 'Web Only',
    badge: null,
    highlight: false,
    upfront: '$299',
    monthly: '$79',
    annual: '$790',
    commitment: '12-month minimum',
    description: 'A clean, fast, professional website for businesses that need to get online the right way.',
    features: [
      'Up to 5-page custom website',
      'Mobile-first & Core Web Vitals optimized',
      'SEO-ready structure',
      'Domain & hosting managed by DanXFoto Studio',
      'SSL certificate & security monitoring',
      'Domain renewal included',
      'CMS — update your own content',
    ],
    cta: 'Get Started',
  },
  {
    id: 'launch',
    name: 'Web + Photos',
    badge: null,
    highlight: true,
    upfront: '$499',
    monthly: '$79',
    annual: '$790',
    commitment: '12-month minimum',
    description: 'The complete package. A custom website and a professional photo shoot — launched together.',
    features: [
      'Up to 5-page custom website',
      'Mobile-first & Core Web Vitals optimized',
      'SEO-ready structure',
      'Domain & hosting managed by DanXFoto Studio',
      'SSL certificate & security monitoring',
      'Domain renewal included',
      'CMS — update your own content',
      '90-minute on-location brand photo shoot',
      '20 professionally edited high-resolution photos delivered in 2 weeks',
    ],
    cta: 'Get Started',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Buyout',
    badge: 'Own Everything',
    highlight: false,
    upfront: '$3,499',
    monthly: null,
    annual: null,
    yearTotal: null,
    yearTotalAnnual: null,
    commitment: 'One-time · No monthly fees',
    description: 'For businesses that want full ownership and control from day one.',
    features: [
      'Up to 5-page custom website',
      'Mobile-first & Core Web Vitals optimized',
      'SEO-ready structure',
      '90-minute on-location brand photo shoot',
      '20 professionally edited high-resolution photos delivered in 2 weeks',
      'Secure version-controlled code repository transfer',
      'One-time delivery — no recurring fees',
    ],
    clientNote: 'You own and manage everything after handoff. You are responsible for your own hosting via your global CDN, annual domain renewal, and all ongoing maintenance. On-demand support is available at $150/hr. An optional Annual Checkup package covers dependency updates, performance audit, and security review.',
    cta: 'Email Inquiry',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const copper = '#b07d62'
  const ink = '#2d2926'
  const muted = '#7a6b61'
  const lightText = '#5a4f47'
  const softPanel = '#fcfbf8'
  const warmPanel = '#f7efe6'
  const line = 'rgba(176,125,98,0.12)'

  return (
    <section id="pricing" style={{ padding: '120px 40px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: copper }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: copper,
            }}>Pricing</span>
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: ink,
            marginBottom: '24px',
          }}>
            Simple, transparent <em style={{ color: copper }}>pricing</em>
          </h2>
          <div
            className="pricing-toggle"
            style={{
              display: 'inline-flex',
              border: '1px solid rgba(176,125,98,0.25)',
              overflow: 'hidden',
              flexWrap: 'wrap',
              width: '100%',
              maxWidth: '720px',
            }}
          >
            {[
              { key: 'monthly', label: 'Pay Monthly' },
              { key: 'annual', label: 'Pay Annually — 2 Months Free' },
            ].map(opt => (
              <button
                className="pricing-toggle-button"
                key={opt.key}
                onClick={() => setBilling(opt.key)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                  flex: 1,
                  background: billing === opt.key ? copper : 'transparent',
                  color: billing === opt.key ? '#fffaf5' : muted,
                  transition: 'all 0.2s',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="pricing-grid"
          style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
          background: 'rgba(176,125,98,0.08)',
          marginBottom: '2px',
        }}>
          {plans.map(plan => (
            <div
              key={plan.id}
              style={{
                background: plan.highlight ? warmPanel : softPanel,
                padding: '48px 36px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: copper }} />
              )}

              <div style={{ minHeight: '180px' }}>
                <div style={{ minHeight: '30px', marginBottom: '20px' }}>
                  {plan.badge && (
                    <div style={{
                      display: 'inline-block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: copper,
                      border: '1px solid rgba(176,125,98,0.35)',
                      padding: '4px 10px',
                      alignSelf: 'flex-start',
                    }}>{plan.badge}</div>
                  )}
                </div>

                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: plan.highlight ? copper : muted,
                  marginBottom: '0',
                  marginTop: '0',
                }}>{plan.name}</div>

                <div style={{ marginTop: '20px', marginBottom: '4px', display: 'flex', alignItems: 'flex-end', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '48px',
                    fontWeight: 400,
                    color: ink,
                    lineHeight: 1,
                  }}>{plan.upfront}</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: muted,
                    marginBottom: '8px',
                  }}>upfront</span>
                </div>

                <div style={{ minHeight: '50px', marginBottom: '8px' }}>
                  {plan.monthly && (
                    <div>
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '28px',
                        fontWeight: 300,
                        color: copper,
                      }}>
                        {billing === 'annual' ? `${plan.annual}/yr` : `${plan.monthly}/mo`}
                      </span>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: muted,
                        marginLeft: '8px',
                      }}>
                        {billing === 'annual' ? '(2 months free)' : 'after setup'}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: copper,
                  marginBottom: '24px',
                  opacity: 0.8,
                }}>{plan.commitment}</div>
              </div>

              <div style={{ width: '30px', height: '1px', background: copper, marginBottom: '20px' }} />

              <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: muted,
                  lineHeight: 1.8,
                marginBottom: '24px',
              }}>{plan.description}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: copper, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      color:
                        (plan.id === 'launch' || plan.id === 'portfolio') &&
                        (
                          f === '90-minute on-location brand photo shoot' ||
                          f === '20 professionally edited high-resolution photos delivered in 2 weeks'
                        )
                          ? copper
                          : lightText,
                      opacity: 0.9,
                    }}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.clientNote && (
                <div style={{
                  background: 'rgba(176,125,98,0.06)',
                  border: '1px solid rgba(176,125,98,0.15)',
                  padding: '14px 16px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: copper,
                    marginBottom: '8px',
                  }}>Client responsibility after handoff</div>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 300,
                    color: muted,
                    lineHeight: 1.7,
                  }}>
                    {plan.clientNote}
                  </p>
                </div>
              )}

              <a
                href={plan.id === 'portfolio' ? 'mailto:studio@danxfoto.com?subject=Portfolio%20Buyout%20Inquiry' : '/get-started'}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '14px 24px',
                  textAlign: 'center',
                  display: 'block',
                  background: plan.highlight ? copper : 'transparent',
                  color: plan.highlight ? '#fffaf5' : copper,
                  border: plan.highlight ? 'none' : '1px solid rgba(176,125,98,0.4)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = plan.highlight ? '#c49070' : 'rgba(176,125,98,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = plan.highlight ? copper : 'transparent'
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          fontWeight: 300,
          color: muted,
          textAlign: 'center',
          lineHeight: 1.8,
        }}>
          Every project starts with a free consultation. iOS app development is available by inquiry. Custom quotes available for larger or multi-location projects.
        </p>

        <style>{`
          @media (max-width: 700px) {
            #pricing .pricing-toggle {
              display: flex !important;
              flex-direction: column !important;
              max-width: none !important;
            }

            #pricing .pricing-toggle-button {
              width: 100% !important;
              flex: none !important;
              text-align: center !important;
            }
          }

          @media (max-width: 1100px) {
            #pricing .pricing-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
