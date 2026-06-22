import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Vision',    href: '#focus',   section: 'focus'   },
  { label: 'Work',      href: '#work',    section: 'work'    },
  { label: 'Services',  href: '#focus',   section: 'focus'   },
  { label: 'About',     href: '#about',   section: 'about'   },
]

// Tracks which section id is currently in the viewport
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  return active
}

function NavLink({
  label,
  href,
  isActive,
}: {
  label: string
  href: string
  isActive: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
        fontSize: '0.85rem',
        fontFamily: 'Inter, sans-serif',
        color: '#e2e8f0',
        opacity: hovered ? 1 : 0.55,
        textDecoration: 'none',
        paddingTop: '6px',     // room for the active dot above
        paddingBottom: '4px',  // room for the underline below
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Active dot — above text */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          background: '#6366f1',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Label */}
      <span style={{ letterSpacing: '0.01em' }}>{label}</span>

      {/* Hover underline — grows left to right */}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: hovered ? '100%' : '0%',
          background: '#6366f1',
          transition: 'width 0.3s ease',
        }}
      />
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(['focus', 'work', 'about'])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(7,8,14,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: '1100px', margin: '0 auto', height: '64px', padding: '0 1.5rem' }}
      >
        {/* Logo */}
        <a
          href="#top"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 500,
            fontSize: '11.5px',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
        >
          MEAGAN HOLUB
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              label={link.label}
              href={link.href}
              isActive={activeSection === link.section}
            />
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="mailto:hello@meaganholub.com?subject=Consultation Request"
            style={{
              fontSize: '0.825rem',
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            Book Consultation
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.55rem 1.2rem',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
              fontSize: '0.8rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.88'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.55)',
            cursor: 'pointer',
            padding: '4px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              background: 'rgba(7,8,14,0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.25rem 1.5rem 1.75rem',
                gap: '0.25rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                    color: activeSection === link.section
                      ? 'rgba(255,255,255,0.9)'
                      : 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {activeSection === link.section && (
                    <span style={{ color: '#6366f1', marginRight: '8px', fontSize: '10px' }}>●</span>
                  )}
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@meaganholub.com?subject=Consultation Request"
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  padding: '0.6rem 0',
                  transition: 'color 0.2s ease',
                }}
              >
                Book Consultation
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.75rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Start Your Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
