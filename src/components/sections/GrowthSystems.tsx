import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { PrimaryButton, SecondaryButton } from '../ui/Buttons'

const CARDS = [
  {
    id: 'seo',
    eyebrow: 'Visibility',
    title: 'SEO & Search Visibility',
    description:
      'Help businesses increase organic visibility, improve local rankings, dominate location-based searches, and attract qualified customers through strategic SEO and technical optimization.',
    services: [
      'Local SEO',
      'Technical SEO',
      'Landing Pages',
      'Google Business Optimization',
      'Content Strategy',
      'Analytics & Reporting',
    ],
    tagline: 'Get found when customers are ready to buy.',
    accentColor: '#10b981',
    accentFaint: 'rgba(16,185,129,0.08)',
    accentBorder: 'rgba(16,185,129,0.22)',
    accentLine: 'linear-gradient(90deg, #10b981, #06b6d4)',
  },
  {
    id: 'leads',
    eyebrow: 'Conversion',
    title: 'Lead Generation Systems',
    description:
      'Build digital systems that convert traffic into opportunities through CRM automation, lead capture workflows, conversion optimization, and performance tracking.',
    services: [
      'CRM Integration',
      'Lead Capture Systems',
      'Marketing Automation',
      'Conversion Optimization',
      'Analytics Dashboards',
    ],
    tagline: 'Turn attention into customers.',
    accentColor: '#6366f1',
    accentFaint: 'rgba(99,102,241,0.08)',
    accentBorder: 'rgba(99,102,241,0.25)',
    accentLine: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'web',
    eyebrow: 'Performance',
    title: 'Website Design & Development',
    description:
      'Modern websites engineered for performance, visibility, and conversion — not just appearance. Every build is designed to support long-term business growth.',
    services: [
      'Website Design',
      'Website Development',
      'Conversion Optimization',
      'Performance Optimization',
      'Mobile Experience',
    ],
    tagline: 'Built to perform. Designed to convert.',
    accentColor: '#818cf8',
    accentFaint: 'rgba(129,140,248,0.08)',
    accentBorder: 'rgba(129,140,248,0.22)',
    accentLine: 'linear-gradient(90deg, #818cf8, #c084fc)',
  },
]

function GrowthCard({ card, index, inView }: { card: typeof CARDS[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.08 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '16px',
        border: `1px solid ${hovered ? card.accentBorder : 'rgba(255,255,255,0.07)'}`,
        background: hovered ? card.accentFaint : 'rgba(255,255,255,0.02)',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        cursor: 'default',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: '2px',
          background: card.accentLine,
          opacity: hovered ? 0.8 : 0.3,
          transition: 'opacity 0.3s ease',
          flexShrink: 0,
        }}
      />

      <div style={{ padding: '2rem 2rem 2.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Eyebrow */}
        <span
          className="font-mono tracking-widest uppercase block"
          style={{
            fontSize: '10px',
            color: hovered ? card.accentColor : 'rgba(255,255,255,0.2)',
            marginBottom: '1.25rem',
            transition: 'color 0.3s ease',
          }}
        >
          {card.eyebrow}
        </span>

        {/* Title */}
        <h3
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', marginBottom: '1rem' }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-slate-500 leading-relaxed"
          style={{ fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.7 }}
        >
          {card.description}
        </p>

        {/* Services list */}
        <div style={{ flex: 1, marginBottom: '2rem' }}>
          <div
            className="font-mono tracking-widest uppercase"
            style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.2)', marginBottom: '0.875rem' }}
          >
            Includes
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {card.services.map((service) => (
              <li
                key={service}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: hovered ? '#94a3b8' : '#475569',
                  transition: 'color 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: card.accentColor,
                    opacity: hovered ? 0.9 : 0.4,
                    flexShrink: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: `1px solid ${hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'}`,
            transition: 'border-color 0.3s ease',
          }}
        >
          <p
            className="font-display italic"
            style={{
              fontSize: '0.9rem',
              color: hovered ? card.accentColor : 'rgba(255,255,255,0.25)',
              lineHeight: 1.5,
              transition: 'color 0.35s ease',
            }}
          >
            "{card.tagline}"
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function GrowthSystems() {
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
          style={{ marginBottom: '4.5rem' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
            <span
              className="font-mono text-indigo-400 tracking-widest uppercase"
              style={{ fontSize: '11px' }}
            >
              Growth Systems
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-16 items-end">
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
            >
              Technology that drives{' '}
              <span style={{ color: '#818cf8' }}>visibility,</span>
              <br />
              leads, and revenue.
            </h2>
            <p className="text-slate-500 leading-relaxed" style={{ fontSize: '0.95rem' }}>
              The most valuable technology isn't what happens behind the scenes — it's what creates measurable business growth.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <GrowthCard key={card.id} card={card} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
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
