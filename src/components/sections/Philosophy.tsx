import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const VALUES = [
  {
    number: '01',
    title: 'Curiosity',
    body: 'I stay obsessed with understanding what makes businesses work.',
  },
  {
    number: '02',
    title: 'Execution',
    body: 'Ideas have value.\nExecution creates outcomes.',
  },
  {
    number: '03',
    title: 'Clarity',
    body: 'Technology should simplify decisions, not complicate them.',
  },
  {
    number: '04',
    title: 'Growth',
    body: 'Every project should create momentum that compounds over time.',
  },
]

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

export function Philosophy() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      style={{
        padding: '9rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
          <span
            className="font-mono text-indigo-400 tracking-widest uppercase"
            style={{ fontSize: '11px' }}
          >
            Philosophy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="font-display font-bold text-white leading-[1.05] tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '2rem',
            maxWidth: '820px',
          }}
        >
          Technology should feel invisible.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
          className="text-slate-400 leading-relaxed"
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            maxWidth: '640px',
            marginBottom: '3.5rem',
          }}
        >
          The best systems don't demand attention.
          <br />
          They remove friction, create momentum, and allow people to focus on what matters most.
        </motion.p>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
          style={{ maxWidth: '580px', marginBottom: '2rem' }}
        >
          <p className="text-slate-500 leading-relaxed" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
            Whether I'm designing software, improving search visibility, developing growth systems, or modernizing operations, my goal is always the same:
          </p>
          <p
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', lineHeight: 1.25 }}
          >
            Build things people actually want to use.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            margin: '5rem 0',
            transformOrigin: 'left',
          }}
        />

        {/* Values row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: EASE }}
            >
              {/* Top rule */}
              <div
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, #6366f1, transparent)',
                  opacity: 0.4,
                  marginBottom: '1.75rem',
                }}
              />

              <span
                className="font-mono block"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  color: 'rgba(99,102,241,0.5)',
                  marginBottom: '1rem',
                }}
              >
                {v.number}
              </span>

              <h3
                className="font-display font-bold text-white"
                style={{ fontSize: '1.25rem', marginBottom: '0.875rem', lineHeight: 1.2 }}
              >
                {v.title}
              </h3>

              <p
                className="text-slate-500 leading-relaxed"
                style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
              >
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
