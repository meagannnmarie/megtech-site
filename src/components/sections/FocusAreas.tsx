import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { PrimaryButton, SecondaryButton } from '../ui/Buttons'

const AREAS = [
  {
    number: '01',
    title: 'Product Development',
    tagline: 'I build things that didn\'t exist before.',
    description:
      'I design and develop custom software, mobile applications, websites, and digital products from concept to launch. Strategy, design, development, and deployment — owned end to end.',
    tags: ['iOS Development', 'SwiftUI', 'Full-Stack Web', 'Firebase', 'Product Design'],
  },
  {
    number: '02',
    title: 'Technology Strategy',
    tagline: 'Technology should create momentum, not complexity.',
    description:
      'Helping organizations make smarter technology decisions. From infrastructure and security to software architecture and growth systems, I focus on building solutions that scale.',
    tags: ['Technology Roadmaps', 'Infrastructure Design', 'Cybersecurity', 'Vendor Strategy', 'Systems Architecture'],
  },
  {
    number: '03',
    title: 'Business Growth Systems',
    tagline: 'Growth happens when technology and strategy align.',
    description:
      'Building digital ecosystems that attract customers, automate operations, and create measurable business growth through modern web experiences and marketing infrastructure.',
    tags: ['SEO Strategy', 'Lead Generation', 'Automation', 'Website Design', 'Analytics'],
  },
  {
    number: '04',
    title: 'Custom Software Solutions',
    tagline: 'The best software solves real business problems.',
    description:
      'Creating tailored software that solves operational challenges, streamlines workflows, and improves efficiency across growing organizations.',
    tags: ['Custom Applications', 'Internal Tools', 'Automation', 'Process Optimization', 'System Integrations'],
  },
]

function AreaRow({
  area,
  index,
  inView,
}: {
  area: (typeof AREAS)[0]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: hovered ? '1.25rem' : '0',
        borderLeft: hovered ? '2px solid #6366f1' : '2px solid transparent',
        transition: 'padding-left 0.35s cubic-bezier(0.22,1,0.36,1), border-left-color 0.35s ease',
        cursor: 'default',
      }}
    >
      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20">

        {/* Left — number, title, tagline */}
        <div>
          <span
            className="font-mono tracking-widest block"
            style={{
              fontSize: '11px',
              color: hovered ? 'rgba(99,102,241,0.7)' : 'rgba(255,255,255,0.15)',
              marginBottom: '1.25rem',
              transition: 'color 0.3s ease',
            }}
          >
            {area.number}
          </span>

          <h3
            className="font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
              color: hovered ? '#ffffff' : 'rgba(255,255,255,0.9)',
              marginBottom: '1rem',
              transition: 'color 0.3s ease',
            }}
          >
            {area.title}
          </h3>

          <p
            className="font-display italic"
            style={{
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              color: hovered ? 'rgba(129,140,248,0.9)' : 'rgba(129,140,248,0.45)',
              lineHeight: 1.5,
              transition: 'color 0.35s ease',
            }}
          >
            "{area.tagline}"
          </p>
        </div>

        {/* Right — description, tags */}
        <div className="flex flex-col justify-center">
          <p
            className="text-slate-400 leading-relaxed"
            style={{
              fontSize: '1rem',
              marginBottom: '1.75rem',
              color: hovered ? '#94a3b8' : '#64748b',
              transition: 'color 0.3s ease',
            }}
          >
            {area.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: '11px',
                  padding: '5px 11px',
                  borderRadius: '5px',
                  background: hovered ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.03)',
                  border: hovered ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(255,255,255,0.07)',
                  color: hovered ? '#a5b4fc' : '#475569',
                  transition: 'all 0.3s ease',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export function FocusAreas() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="focus" style={{ padding: '8rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              Areas of Focus
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-end">
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Where expertise
              <br />
              meets execution.
            </h2>
            <p
              className="text-slate-500 leading-relaxed"
              style={{ fontSize: '0.95rem' }}
            >
              Every engagement is built on a foundation of strategic thinking, technical depth, and a relentless focus on results that matter.
            </p>
          </div>
        </motion.div>

        {/* Editorial rows */}
        <div>
          {AREAS.map((area, i) => (
            <AreaRow key={area.number} area={area} index={i} inView={inView} />
          ))}
          {/* Closing rule */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 flex flex-wrap items-center gap-6"
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
