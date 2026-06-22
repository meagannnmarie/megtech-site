import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { PrimaryButton, SecondaryButton } from '../ui/Buttons'

const CARDS = [
  {
    id: 'growth',
    title: 'Business Growth Systems',
    discipline: 'SEO  •  Automation  •  Lead Generation',
    description:
      'Built end-to-end digital growth infrastructure — search visibility, conversion systems, CRM automation, and analytics — engineered as compounding business advantage.',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.09) 60%, rgba(14,165,233,0.05) 100%)',
    accentGradient: 'linear-gradient(90deg, #10b981, #06b6d4)',
    dotColor: '#34d399',
    tags: ['Technical SEO', 'Lead Generation', 'CRM Automation', 'Analytics'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Technology',
    discipline: 'Cybersecurity  •  Infrastructure  •  Operations',
    description:
      'Delivered large-scale technology operations across enterprise environments — infrastructure design, cybersecurity programs, and business systems at corporate scale.',
    gradient: 'linear-gradient(135deg, rgba(71,85,105,0.22) 0%, rgba(51,65,85,0.15) 60%, rgba(99,102,241,0.07) 100%)',
    accentGradient: 'linear-gradient(90deg, #64748b, #818cf8)',
    dotColor: '#94a3b8',
    tags: ['Cybersecurity', 'Infrastructure', 'ISC2 Certified', 'Enterprise Scale'],
  },
  {
    id: 'software',
    title: 'Custom Software Solutions',
    discipline: 'Web Apps  •  Mobile Apps  •  Full Stack Development',
    description:
      'Designed and developed custom applications, internal tooling, automation systems, and digital products — from architecture through launch.',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(168,85,247,0.09) 60%, rgba(236,72,153,0.05) 100%)',
    accentGradient: 'linear-gradient(90deg, #8b5cf6, #c084fc)',
    dotColor: '#a78bfa',
    tags: ['React', 'Node.js', 'iOS / SwiftUI', 'Full Stack'],
  },
  {
    id: 'product',
    title: 'Product Development',
    discipline: 'Product Strategy  •  UX/UI  •  iOS Development',
    description:
      'I design and build digital products from concept to launch — combining product architecture, UX design, development, and business strategy.',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(129,140,248,0.11) 60%, rgba(139,92,246,0.06) 100%)',
    accentGradient: 'linear-gradient(90deg, #6366f1, #a78bfa)',
    dotColor: '#818cf8',
    tags: ['Product Strategy', 'UX/UI', 'iOS Development', 'Full-Stack Development'],
  },
]

function CardVisual({
  gradient,
  accentGradient,
  dotColor,
  id,
}: {
  gradient: string
  accentGradient: string
  dotColor: string
  id: string
}) {
  const patternId = `grid-${id}`
  return (
    <div
      style={{
        position: 'relative',
        height: '130px',
        background: gradient,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Subtle grid */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}
      >
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Glowing orb — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: dotColor,
          opacity: 0.1,
          filter: 'blur(24px)',
        }}
      />

      {/* Bottom accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: accentGradient,
          opacity: 0.5,
        }}
      />

      {/* Live indicator */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
        }}
      >
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: dotColor,
            boxShadow: `0 0 5px ${dotColor}88`,
          }}
        />
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.28)',
          }}
        >
          LIVE
        </span>
      </div>
    </div>
  )
}

export function Work() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="work"
      style={{
        padding: '8rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '4.5rem' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              Selected Work
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-end">
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
            >
              Building solutions that create{' '}
              <span style={{ color: '#818cf8' }}>growth, efficiency,</span>
              <br className="hidden lg:block" />
              {' '}and opportunity.
            </h2>
            <p
              className="text-slate-500 leading-relaxed"
              style={{ fontSize: '0.925rem' }}
            >
              A collection of products, systems, and digital experiences designed to solve real-world business challenges.
            </p>
          </div>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              style={{
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(99,102,241,0.28)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <CardVisual
                gradient={card.gradient}
                accentGradient={card.accentGradient}
                dotColor={card.dotColor}
                id={card.id}
              />

              <div style={{ padding: '1.75rem 2rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title */}
                <h3
                  className="font-display font-bold text-white leading-tight"
                  style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}
                >
                  {card.title}
                </h3>

                {/* Discipline tagline */}
                <p
                  className="font-mono text-indigo-400/50 tracking-wide"
                  style={{ fontSize: '10.5px', marginBottom: '1rem' }}
                >
                  {card.discipline}
                </p>

                {/* Description */}
                <p
                  className="text-slate-500 leading-relaxed flex-1"
                  style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}
                >
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-slate-600"
                      style={{
                        fontSize: '10px',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <PrimaryButton href="#contact">Start Your Project</PrimaryButton>
          <SecondaryButton href="mailto:hello@meaganholub.com?subject=Consultation Request">
            Book a consultation
          </SecondaryButton>
        </motion.div>

      </div>
    </section>
  )
}
