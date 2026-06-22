import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const CARDS = [
  {
    number: '01',
    title: "Builder's Mindset",
    lines: ["I don't just recommend ideas.", 'I execute them.'],
  },
  {
    number: '02',
    title: 'Business First',
    lines: ['Technology should create momentum,', 'not complexity.'],
  },
  {
    number: '03',
    title: 'End-to-End Ownership',
    lines: ['Strategy, design, development,', 'growth, and implementation.'],
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    lines: ['I care about what happens', 'after launch.'],
  },
]

function ValueCard({
  card,
  index,
  inView,
}: {
  card: (typeof CARDS)[0]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.08 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2.5rem',
        borderRadius: '16px',
        border: `1px solid ${hovered ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.07)'}`,
        background: hovered ? 'rgba(99,102,241,0.04)' : 'rgba(255,255,255,0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        cursor: 'default',
      }}
    >
      {/* Number */}
      <span
        className="font-mono"
        style={{
          fontSize: '11px',
          letterSpacing: '0.14em',
          color: hovered ? 'rgba(99,102,241,0.7)' : 'rgba(255,255,255,0.15)',
          transition: 'color 0.3s ease',
        }}
      >
        {card.number}
      </span>

      {/* Title */}
      <h3
        className="font-display font-bold text-white leading-tight"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
      >
        {card.title}
      </h3>

      {/* Statement */}
      <p
        className="font-display leading-snug"
        style={{
          fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
          color: hovered ? '#94a3b8' : '#475569',
          transition: 'color 0.3s ease',
          marginTop: 'auto',
        }}
      >
        {card.lines[0]}
        <br />
        <span
          style={{
            color: hovered ? '#818cf8' : '#6366f1',
            opacity: hovered ? 1 : 0.7,
            transition: 'color 0.3s ease, opacity 0.3s ease',
          }}
        >
          {card.lines[1]}
        </span>
      </p>
    </motion.div>
  )
}

export function WhyWork() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      style={{
        padding: '8rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              Why Businesses Work With Me
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
            <div>
              <h2
                className="font-display font-bold text-white leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', marginBottom: '0.15em' }}
              >
                Technology is easy.
              </h2>
              <h2
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  color: '#818cf8',
                }}
              >
                Building the right
                <br />
                solution isn't.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="text-slate-400 leading-relaxed" style={{ fontSize: '1rem' }}>
                I've spent more than a decade working inside complex business environments where technology decisions impact real people, real customers, and real outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1rem' }}>
                Today I bring that experience into every project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards — 2×2 */}
        <div className="grid md:grid-cols-2 gap-4">
          {CARDS.map((card, i) => (
            <ValueCard key={card.number} card={card} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}
