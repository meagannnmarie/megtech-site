import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

export function PhilosophyStrip() {
  const { ref, inView } = useInView(0.2)

  return (
    <section
      ref={ref}
      className="border-y border-white/[0.06]"
      style={{ padding: '5rem 1.5rem', background: 'rgba(255,255,255,0.012)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">

          {/* Statement */}
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-medium text-white/75 leading-[1.3] tracking-tight m-0"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Technology isn't a tool you adopt.
            <br />
            It's the medium you either master —
            <br />
            <span className="text-white/40">or fall behind in.</span>
          </motion.blockquote>

          {/* Credentials — quiet, not a brag strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-5 flex-shrink-0"
          >
            {[
              { val: '10+', label: 'Years in enterprise\ntechnology' },
              { val: '3.9', label: 'GPA · BS Computer Science\nCum Laude' },
              { val: 'ISC2', label: 'Cybersecurity\ncertified' },
            ].map((s) => (
              <div key={s.val} className="flex items-baseline gap-4">
                <span
                  className="font-display font-bold text-white"
                  style={{ fontSize: '1.5rem', minWidth: '52px' }}
                >
                  {s.val}
                </span>
                <span
                  className="text-slate-600 whitespace-pre-line leading-snug"
                  style={{ fontSize: '11px' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
