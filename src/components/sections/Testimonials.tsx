import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { TESTIMONIALS } from '../../data/content'

export function Testimonials() {
  const { ref, inView } = useInView(0.1)

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              In their words
            </span>
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            What they say.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Opening mark */}
              <div
                className="font-display text-indigo-500/30 font-bold leading-none select-none"
                style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '-0.5rem' }}
                aria-hidden
              >
                "
              </div>

              <blockquote
                className="text-slate-400 leading-relaxed flex-1"
                style={{ fontSize: '0.925rem' }}
              >
                {t.quote}
              </blockquote>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="text-white font-medium" style={{ fontSize: '0.875rem' }}>
                  {t.name}
                </div>
                <div className="text-slate-600" style={{ fontSize: '12px', marginTop: '2px' }}>
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
