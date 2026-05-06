'use client'

import { useEffect, useMemo, useState } from 'react'

export default function PhotographyPortfolio({ items }) {
  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((item) => item.category.toLowerCase() === filter)
  }, [filter, items])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
        return
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % filteredItems.length)
        return
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, filteredItems.length])

  useEffect(() => {
    setActiveIndex(null)
  }, [filter])

  const activeItem = activeIndex === null ? null : filteredItems[activeIndex]

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '42px',
        }}
      >
        {[
          ['all', 'All'],
          ['family', 'Family'],
          ['portrait', 'Portrait'],
        ].map(([key, label]) => {
          const active = filter === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                border: '1px solid rgba(176,125,98,0.2)',
                background: active ? '#c87858' : '#ffffff',
                color: active ? '#fffaf5' : '#7a6b61',
                cursor: 'pointer',
                transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div className="photo-portfolio-grid">
        {filteredItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`photo-portfolio-item ${item.layout === 'tall' ? 'tall' : ''}`}
            style={{
              display: 'block',
              width: '100%',
              border: 'none',
              background: 'transparent',
              padding: 0,
              cursor: 'zoom-in',
              textAlign: 'left',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#f7efe6',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: item.objectPosition || 'center center',
                  transition: 'transform 0.35s ease',
                }}
              />
              <div
                className="photo-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '18px',
                  background: 'linear-gradient(to top, rgba(45,41,38,0.52), transparent 48%)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#f3e7dc',
                    marginBottom: '6px',
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: '#ffffff',
                    lineHeight: 1.05,
                  }}
                >
                  {item.title}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(20,18,16,0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
            }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((prev) => (prev + 1) % filteredItems.length)
            }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ›
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: 'min(1100px, calc(100vw - 140px))',
              maxHeight: 'calc(100vh - 120px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              width={activeItem.width}
              height={activeItem.height}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 180px)',
                width: 'auto',
                height: 'auto',
                display: 'block',
                boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#d2c4b7',
                  marginBottom: '6px',
                }}
              >
                {activeItem.category}
              </div>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '30px',
                  fontWeight: 300,
                  color: '#ffffff',
                }}
              >
                {activeItem.title}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .photo-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 180px;
          gap: 12px;
          max-width: 980px;
          margin: 0 auto;
        }
        .photo-portfolio-item.tall {
          grid-row: span 2;
        }
        .photo-portfolio-item:hover img {
          transform: scale(1.02);
        }
        .photo-portfolio-item:hover .photo-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .photo-portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 180px;
            max-width: 760px;
          }
        }
        @media (max-width: 767px) {
          .photo-portfolio-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
            max-width: none;
          }
          .photo-portfolio-item.tall {
            grid-row: span 1;
          }
        }
      `}</style>
    </>
  )
}
