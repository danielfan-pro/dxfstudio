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
    yearTotal: '$1,247',
    yearTotalAnnual: '$1,089',
    commitment: '12-month minimum',
    description: 'A clean, fast, professional website for businesses that need to get online the right way.',
    features: [
      '3-page custom website',
      'Mobile-first & Core Web Vitals optimized',
      'SEO-ready structure',
      'CMS — update your own content',
      'Domain & hosting managed by DXF Studio',
      'SSL certificate & security monitoring',
      'Domain renewal included',
    ],
    included: 'Hosting, domain renewal, SSL, minor updates',
    cta: 'Get Started',
  },
  {
    id: 'launch',
    name: 'Web + Photos',
    badge: 'Most Popular',
    highlight: true,
    upfront: '$499',
    monthly: '$79',
    annual: '$790',
    yearTotal: '$1,447',
    yearTotalAnnual: '$1,289',
    commitment: '12-month minimum',
    description: 'The complete package. A custom website and a professional photo shoot — launched together.',
    features: [
      '5-page custom website',
      'Half-day on-location brand photo shoot',
      'Edited gallery (40+ images) delivered in 2 weeks',
      'CMS — update your own content',
      'Google Business Profile setup',
      'Local SEO foundation',
      'Domain & hosting managed by DXF Studio',
      'Domain renewal included',
    ],
    included: 'Hosting, domain renewal, SSL, minor updates',
    cta: 'Get Started',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Buyout',
    badge: 'Own Everything',
    highlight: false,
    upfront: '$1,200',
    monthly: null,
    annual: null,
    yearTotal: null,
    yearTotalAnnual: null,
    commitment: 'One-time · No monthly fees',
    description: 'For businesses that want full ownership and control from day one.',
    features: [
      '5-page custom website',
      'Full GitHub repo transferred to you',
      'Vercel project transferred to your account',
      'Domain transferred to your registrar',
      'One-time delivery — no recurring fees',
    ],
    clientNote: 'You own and manage everything after handoff. You are responsible for your own hosting via Vercel, annual domain renewal, and all ongoing maintenance. On-demand support is available at $150/hr. An optional Annual Checkup package covers dependency updates, performance audit, and security review.',
    cta: 'Inquire',
  },
]

const postCommitment = {
  monthToMonth: '$99/mo',
  annual: '$990/yr',
  buyout: '$800',
}

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
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: muted,
            lineHeight: 1.9,
            width: '100%',
            marginBottom: '18px',
          }}>
            Start with a low upfront cost and a 12-month commitment at $79/mo — which covers hosting, domain renewal, and ongoing maintenance for as long as we manage your site. Pay the year upfront instead and get 2 months free.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: muted,
            lineHeight: 1.9,
            width: '100%',
            marginBottom: '36px',
          }}>
            After your first year, you can continue month-to-month at $99/mo, renew annually at $990/yr and get 2 months free again, or buy out for $800 to own all your code, domain, and hosting outright with no further monthly fees. Prefer full ownership from day one? The Portfolio Buyout plan at $1,200 gets you everything delivered and transferred — no subscriptions, no commitments.
          </p>

          <div style={{ display: 'inline-flex', border: '1px solid rgba(176,125,98,0.25)', overflow: 'hidden', flexWrap: 'wrap' }}>
            {[
              { key: 'monthly', label: 'Pay Monthly' },
              { key: 'annual', label: 'Pay Annually — 2 Months Free' },
            ].map(opt => (
              <button
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

        <div style={{
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
                  marginBottom: '20px',
                  alignSelf: 'flex-start',
                }}>{plan.badge}</div>
              )}

              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: plan.highlight ? copper : muted,
                marginBottom: !plan.badge ? '20px' : '0',
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

              {plan.monthly && (
                <div style={{ marginBottom: '8px' }}>
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

              {plan.yearTotal && (
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: muted,
                  marginBottom: '4px',
                }}>
                  Year 1 total: <span style={{ color: lightText }}>{billing === 'annual' ? plan.yearTotalAnnual : plan.yearTotal}</span>
                </div>
              )}

              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: plan.highlight ? copper : muted,
                marginBottom: '24px',
                opacity: 0.8,
              }}>{plan.commitment}</div>

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
                      color: lightText,
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

              {plan.included && (
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: muted,
                  marginBottom: '24px',
                  lineHeight: 1.6,
                  paddingTop: '16px',
                  borderTop: `1px solid ${line}`,
                }}>
                  <span style={{ color: copper }}>Included: </span>{plan.included}
                </div>
              )}

              <a
                href="#contact"
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

        <div style={{
          background: softPanel,
          border: '1px solid rgba(176,125,98,0.15)',
          padding: '40px 48px',
          marginBottom: '32px',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, ${copper}, transparent)` }} />
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: copper,
            marginBottom: '20px',
          }}>After Your 12-Month Commitment</div>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: muted,
            lineHeight: 1.9,
            marginBottom: '28px',
            maxWidth: '600px',
          }}>
            Once your commitment period ends, you have three flexible options. We&apos;ll reach out 60 days before your year ends to walk through them together.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2px',
            background: 'rgba(176,125,98,0.08)',
          }}>
            {[
              { label: 'Month-to-Month', price: postCommitment.monthToMonth, desc: 'Continue with no contract. Cancel anytime with 30 days notice.' },
              { label: 'Renew Annually', price: postCommitment.annual, desc: 'Lock in another year and get 2 months free again.' },
              { label: 'Portfolio Buyout', price: postCommitment.buyout, desc: 'Own everything outright. We transfer all code, domain, and hosting to you.' },
            ].map(opt => (
              <div key={opt.label} style={{ background: softPanel, padding: '28px 24px' }}>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: muted,
                  marginBottom: '10px',
                }}>{opt.label}</div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  fontWeight: 400,
                  color: copper,
                  marginBottom: '10px',
                }}>{opt.price}</div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: muted,
                  lineHeight: 1.7,
                }}>
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
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
      </div>
    </section>
  )
}
