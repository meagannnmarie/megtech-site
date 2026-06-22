import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { BookConsultation } from '../ui/BookConsultation'
import { PrimaryButton } from '../ui/Buttons'

export function CTABlock() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      style={{
        padding: '9rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>
        <div style={{ maxWidth: '720px' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-3"
            style={{ marginBottom: '3rem' }}
          >
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              Start Something Remarkable
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              marginBottom: '2.25rem',
            }}
          >
            Let's build something
            <br />
            <span style={{ color: '#818cf8' }}>worth talking about.</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.4, 0, 0.2, 1] }}
            style={{ marginBottom: '3rem' }}
          >
            <p className="text-slate-400 leading-relaxed" style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>
              Whether you're launching something new, improving an existing business, or exploring what's possible, I'd love to hear what you're working on.
            </p>
            <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.05rem' }}>
              I'll personally review your project and reach out with next steps.
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.4, 0, 0.2, 1] }}
            style={{ marginBottom: '1.5rem' }}
          >
            <PrimaryButton href="#contact">Start a Conversation</PrimaryButton>
          </motion.div>

          {/* Book a Consultation — premium interactive button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <BookConsultation />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
