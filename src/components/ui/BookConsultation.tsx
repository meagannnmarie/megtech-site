import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const EASE_STR = EASE.join(',')

const PROJECT_TYPES = [
  'Website',
  'SEO & Lead Generation',
  'Mobile Application',
  'Internal Software',
  'Growth Systems',
  'Something Different',
]

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#334155',
  marginBottom: '1rem',
}

const textareaStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.09)',
  borderRadius: 0,
  padding: '0.5rem 0',
  fontSize: '0.95rem',
  color: '#cbd5e1',
  fontFamily: 'Inter, sans-serif',
  lineHeight: 1.65,
  outline: 'none',
  resize: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
}

function TypeOption({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  const active = selected || hovered
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '0.6rem 1rem',
        borderRadius: '5px',
        border: `1px solid ${selected ? 'rgba(99,102,241,0.5)' : active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'}`,
        background: selected ? 'rgba(99,102,241,0.07)' : 'transparent',
        color: selected ? '#c7d2fe' : active ? '#94a3b8' : '#475569',
        fontSize: '0.85rem',
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
        textAlign: 'left',
        transition: `all 0.2s cubic-bezier(${EASE_STR})`,
      }}
    >
      {label}
    </button>
  )
}

function FocusTextarea({
  placeholder,
  value,
  onChange,
  rows = 3,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...textareaStyle,
        borderBottomColor: focused ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.09)',
        color: value ? '#cbd5e1' : undefined,
      }}
    />
  )
}

export function BookConsultation() {
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const [projectType, setProjectType] = useState('')
  const [challenge, setChallenge] = useState('')
  const [vision, setVision] = useState('')

  const active = hovered || open

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Consultation Request')
    const body = encodeURIComponent(
      `Project type: ${projectType}\n\nChallenge: ${challenge}\n\nSuccess vision: ${vision}`
    )
    window.open(`mailto:hello@meaganholub.com?subject=${subject}&body=${body}`)
    setOpen(false)
  }

  return (
    <div>
      {/* ── Trigger button ── */}
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '9px',
          padding: '0.875rem 1.75rem',
          borderRadius: '6px',
          border: `1px solid ${active ? 'rgba(99,102,241,0.45)' : 'rgba(255,255,255,0.11)'}`,
          background: active ? 'rgba(99,102,241,0.055)' : 'transparent',
          color: active ? '#c7d2fe' : '#94a3b8',
          fontSize: '0.9rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          cursor: 'pointer',
          transform: active ? 'translateY(-2px)' : 'translateY(0)',
          transition: `border-color 0.35s cubic-bezier(${EASE_STR}), background 0.35s cubic-bezier(${EASE_STR}), color 0.35s cubic-bezier(${EASE_STR}), transform 0.35s cubic-bezier(${EASE_STR})`,
          overflow: 'hidden',
        }}
      >
        <span>Book a Consultation</span>
        <ArrowRight
          size={14}
          style={{
            transform: active ? 'translateX(4px)' : 'translateX(0)',
            transition: `transform 0.35s cubic-bezier(${EASE_STR})`,
            flexShrink: 0,
          }}
        />
        {/* Left-to-right underline */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '1px',
            width: active ? '100%' : '0%',
            background: '#6366f1',
            transition: `width 0.35s cubic-bezier(${EASE_STR})`,
          }}
        />
      </button>

      {/* ── Microcopy ── */}
      <p
        style={{
          marginTop: '0.625rem',
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.15em',
          opacity: 0.55,
          color: '#94a3b8',
        }}
      >
        Strategy&nbsp;•&nbsp;Design&nbsp;•&nbsp;Development&nbsp;•&nbsp;Growth
      </p>

      {/* ── Inline panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, height: 0, y: 12 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 12 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <form onSubmit={handleContinue}>
              <div
                style={{
                  marginTop: '2.5rem',
                  paddingTop: '2.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                  maxWidth: '560px',
                }}
              >
                {/* Panel headline */}
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', lineHeight: 1.2 }}
                >
                  Tell me about your project
                </h3>

                {/* Q1 */}
                <div>
                  <span style={labelStyle}>What are we building?</span>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                      gap: '8px',
                    }}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <TypeOption
                        key={t}
                        label={t}
                        selected={projectType === t}
                        onSelect={() => setProjectType(t)}
                      />
                    ))}
                  </div>
                </div>

                {/* Q2 */}
                <div>
                  <label style={labelStyle}>What challenge are you trying to solve?</label>
                  <FocusTextarea
                    placeholder="Describe what's blocking you or what you're trying to improve..."
                    value={challenge}
                    onChange={setChallenge}
                    rows={3}
                  />
                </div>

                {/* Q3 */}
                <div>
                  <label style={labelStyle}>What would success look like one year from now?</label>
                  <FocusTextarea
                    placeholder="Be specific — revenue, customers, systems, capabilities..."
                    value={vision}
                    onChange={setVision}
                    rows={3}
                  />
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingBottom: '0.5rem' }}>
                  <button
                    type="submit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.8rem 1.75rem',
                      borderRadius: '6px',
                      background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                      color: '#fff',
                      fontSize: '0.875rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Continue
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#334155',
                      fontSize: '0.85rem',
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#64748b')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
