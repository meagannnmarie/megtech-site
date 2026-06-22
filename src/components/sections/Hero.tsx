import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '../ui/Buttons'

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
})

const btnEase = [0.22, 1, 0.36, 1].join(',')

function ConsultButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="mailto:hello@meaganholub.com?subject=Consultation Request"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.9rem 1.75rem',
        borderRadius: '6px',
        border: `1px solid ${hovered ? 'rgba(99,102,241,0.45)' : 'rgba(255,255,255,0.11)'}`,
        background: hovered ? 'rgba(99,102,241,0.06)' : 'transparent',
        color: hovered ? '#c7d2fe' : '#94a3b8',
        fontSize: '0.875rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        textDecoration: 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: `border-color 0.3s cubic-bezier(${btnEase}), background 0.3s cubic-bezier(${btnEase}), color 0.3s cubic-bezier(${btnEase}), transform 0.3s cubic-bezier(${btnEase})`,
        overflow: 'hidden',
      }}
    >
      <span>Book a Consultation</span>
      <ArrowRight
        size={14}
        style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: `transform 0.3s cubic-bezier(${btnEase})`,
          flexShrink: 0,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: hovered ? '100%' : '0%',
          background: 'linear-gradient(90deg, #6366f1, #818cf8)',
          transition: `width 0.35s cubic-bezier(${btnEase})`,
        }}
      />
    </a>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050508]"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Cinematic photo panel: full-height, right side ── */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{ width: '42%' }}
      >
        <img
          src="/Meg.png"
          alt="Meagan Holub"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 20%' }}
          draggable={false}
        />
        {/* Left edge gradient: blends photo into dark bg */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '260px',
            background: 'linear-gradient(to right, #050508 0%, transparent 100%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '220px',
            background: 'linear-gradient(to top, #050508 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Text content ── */}
      <div
        className="hero-text-container relative z-10"
        style={{
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '96px',
          paddingBottom: '80px',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: '560px' }}>

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span
                className="font-mono text-slate-500 tracking-widest uppercase"
                style={{ fontSize: '11px' }}
              >
                Builder &nbsp;•&nbsp; Developer &nbsp;•&nbsp; Problem Solver
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="hero-headline font-display font-bold text-white leading-[1.05] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.75rem, 5vw, 4.75rem)' }}
            >
              Building the future,
              <br />
              <motion.span
                animate={{ color: ['#6366f1', '#818cf8', '#6366f1'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              >
                one product
              </motion.span>
              <br />
              at a time.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-slate-400 leading-relaxed mb-12"
              style={{ fontSize: '1.05rem', maxWidth: '440px' }}
            >
              <span className="text-white/70 font-medium">Software. SEO. Growth.</span>
              <br />
              Helping businesses attract more customers, streamline operations, and build technology that scales.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-4 items-center">
              <PrimaryButton href="#contact">Start Your Project</PrimaryButton>
              <ConsultButton />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Mobile photo ── */}
      <div
        className="lg:hidden relative"
        style={{ height: '80vw', maxHeight: '520px', marginTop: '64px' }}
      >
        <img
          src="/Meg.png"
          alt="Meagan Holub"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 15%' }}
          draggable={false}
        />
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, #050508 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '140px',
            background: 'linear-gradient(to top, #050508 0%, transparent 100%)',
          }}
        />
      </div>
    </section>
  )
}
