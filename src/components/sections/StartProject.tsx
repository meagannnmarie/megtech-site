import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { ArrowRight, Check } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────

interface FormData {
  projectType: string
  name: string
  email: string
  company: string
  website: string
  industry: string
  phone: string
  goal: string
  successVision: string
  challenges: string
  budget: string
  timeline: string
}

const EMPTY: FormData = {
  projectType: '',
  name: '',
  email: '',
  company: '',
  website: '',
  industry: '',
  phone: '',
  goal: '',
  successVision: '',
  challenges: '',
  budget: '',
  timeline: '',
}

// ── Step data ──────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  'Website Design',
  'Website Redesign',
  'SEO & Marketing',
  'Mobile App',
  'Custom Software',
  'AI Integration',
  'Technology Consulting',
  'Something Else',
]

const BUDGETS = [
  'Under $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  "Let's discuss",
]

const TIMELINES = ['ASAP', '30 Days', '60 Days', '90 Days', 'Flexible']

const TOTAL_STEPS = 5

// ── Shared primitives ──────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontFamily: 'JetBrains Mono, monospace',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#64748b',
  marginBottom: '8px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.035)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: '8px',
  padding: '0.8rem 1rem',
  fontSize: '0.925rem',
  color: '#e2e8f0',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={labelStyle}>{label}{required && <span style={{ color: '#818cf8' }}> *</span>}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.09)',
        }}
      />
    </div>
  )
}

function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required,
}: {
  label: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  rows?: number
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={labelStyle}>{label}{required && <span style={{ color: '#818cf8' }}> *</span>}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          resize: 'vertical',
          minHeight: `${rows * 1.75}rem`,
          borderColor: focused ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.09)',
        }}
      />
    </div>
  )
}

function OptionCard({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        padding: '0.9rem 1rem',
        borderRadius: '8px',
        border: selected ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
        background: selected ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.025)',
        color: selected ? '#a5b4fc' : '#94a3b8',
        fontSize: '0.875rem',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.15s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
      }}
    >
      <span>{label}</span>
      {selected && <Check size={14} style={{ color: '#818cf8', flexShrink: 0 }} />}
    </button>
  )
}

// ── Progress bar ───────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '10px' }}>
        <span className="font-mono text-slate-600" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
          STEP {step} OF {TOTAL_STEPS}
        </span>
        <span className="font-mono text-indigo-400/60" style={{ fontSize: '11px' }}>
          {Math.round((step / TOTAL_STEPS) * 100)}%
        </span>
      </div>
      <div
        style={{
          height: '2px',
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #818cf8)',
            borderRadius: '2px',
          }}
          initial={{ width: `${((step - 1) / TOTAL_STEPS) * 100}%` }}
          animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

// ── Step components ────────────────────────────────────────────────────

function Step1({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        What are you looking to build?
      </h3>
      <p className="text-slate-500" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
        Select the area that best describes your project.
      </p>
      <div
        className="grid grid-cols-2"
        style={{ gap: '8px' }}
      >
        {PROJECT_TYPES.map((t) => (
          <OptionCard
            key={t}
            label={t}
            selected={data.projectType === t}
            onSelect={() => update('projectType', t)}
          />
        ))}
      </div>
    </div>
  )
}

function Step2({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Tell me about your business.
      </h3>
      <p className="text-slate-500" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
        Basic details so I can put your project in context.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Input label="Full Name" placeholder="Jane Smith" value={data.name} onChange={(v) => update('name', v)} required />
        <Input label="Email" type="email" placeholder="jane@company.com" value={data.email} onChange={(v) => update('email', v)} required />
        <Input label="Company" placeholder="Acme Corp" value={data.company} onChange={(v) => update('company', v)} />
        <Input label="Website" placeholder="https://yoursite.com" value={data.website} onChange={(v) => update('website', v)} />
        <Input label="Industry" placeholder="e.g. Healthcare, Real Estate" value={data.industry} onChange={(v) => update('industry', v)} />
        <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" value={data.phone} onChange={(v) => update('phone', v)} />
      </div>
    </div>
  )
}

function Step3({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Project vision.
      </h3>
      <p className="text-slate-500" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
        This is where I understand what you're actually trying to accomplish.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Textarea
          label="What are you trying to accomplish?"
          placeholder="Describe the goal of this project — what problem it solves, who it's for, and what you need built."
          value={data.goal}
          onChange={(v) => update('goal', v)}
          rows={4}
          required
        />
        <Textarea
          label="What would success look like 12 months from now?"
          placeholder="Be specific — revenue goals, user growth, systems running, capabilities unlocked."
          value={data.successVision}
          onChange={(v) => update('successVision', v)}
          rows={3}
        />
        <Textarea
          label="What challenges are you facing right now?"
          placeholder="What's broken, missing, or blocking you? What have you already tried?"
          value={data.challenges}
          onChange={(v) => update('challenges', v)}
          rows={3}
        />
      </div>
    </div>
  )
}

function Step4({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Investment range.
      </h3>
      <p className="text-slate-500" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
        Select the range that fits your current thinking. We can always discuss.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {BUDGETS.map((b) => (
          <OptionCard key={b} label={b} selected={data.budget === b} onSelect={() => update('budget', b)} />
        ))}
      </div>
    </div>
  )
}

function Step5({ data, update }: { data: FormData; update: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Timeline.
      </h3>
      <p className="text-slate-500" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
        When are you hoping to get started or go live?
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: '8px' }}>
        {TIMELINES.map((t) => (
          <OptionCard key={t} label={t} selected={data.timeline === t} onSelect={() => update('timeline', t)} />
        ))}
      </div>
    </div>
  )
}

// ── Submitted state ────────────────────────────────────────────────────

function Submitted() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
      style={{ padding: '3rem 1rem' }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}
      >
        <Check size={22} style={{ color: '#818cf8' }} />
      </div>
      <h3 className="font-display font-bold text-white" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
        Project received.
      </h3>
      <p className="text-slate-400" style={{ fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto', lineHeight: 1.7 }}>
        I'll personally review what you've shared and reach out within one business day to discuss next steps.
      </p>
    </motion.div>
  )
}

// ── Main component ─────────────────────────────────────────────────────

export function StartProject() {
  const { ref, inView } = useInView(0.05)
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [data, setData] = useState<FormData>(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }))

  const next = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const back = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1))
  }

  const canAdvance = () => {
    if (step === 1) return !!data.projectType
    if (step === 2) return !!(data.name && data.email)
    if (step === 3) return !!data.goal
    if (step === 4) return !!data.budget
    if (step === 5) return !!data.timeline
    return false
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: context */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
              <span
                className="font-mono text-indigo-400 tracking-widest uppercase"
                style={{ fontSize: '11px' }}
              >
                Start your project
              </span>
            </div>

            <h2
              className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Let's build something{' '}
              <span style={{ color: '#818cf8' }}>remarkable.</span>
            </h2>

            <p className="text-slate-400 leading-relaxed" style={{ fontSize: '1rem', marginBottom: '2.5rem' }}>
              Tell me about your goals, your challenges, and where you want your business to go. I'll personally review your project and reach out with the next steps.
            </p>

            {/* What to expect */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Personal review', detail: 'Every submission is read by me directly — not a team, not an algorithm.' },
                { title: 'Response within 24 hours', detail: "I'll reach out with an honest assessment and clear next steps." },
                { title: 'No obligation', detail: "Submitting a project brief doesn't commit you to anything." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(99,102,241,0.12)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={10} style={{ color: '#818cf8' }} />
                  </div>
                  <div>
                    <div className="text-white font-medium" style={{ fontSize: '0.875rem' }}>{item.title}</div>
                    <div className="text-slate-500" style={{ fontSize: '12px', marginTop: '2px' }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer copy */}
            <p
              style={{
                marginTop: '3rem',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: 1.8,
              }}
            >
              No sales team.<br />
              No automated replies.<br />
              Just a conversation about where you are today, where you want to go, and how we can turn your vision into reality.
            </p>

            {/* Consultation alt */}
            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="text-white font-medium" style={{ fontSize: '0.875rem', marginBottom: '4px' }}>
                Prefer to talk first?
              </div>
              <div className="text-slate-500" style={{ fontSize: '12px', marginBottom: '12px' }}>
                Book a no-commitment 30-minute consultation to discuss your project before filling out the brief.
              </div>
              <a
                href="mailto:hello@meaganholub.com?subject=Consultation Request"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-mono transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.05em' }}
              >
                Book a consultation →
              </a>
            </div>
          </motion.div>

          {/* Right: multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '2.25rem' }}>
                {submitted ? (
                  <Submitted />
                ) : (
                  <form onSubmit={handleSubmit}>
                    <ProgressBar step={step} />

                    <div style={{ minHeight: '340px', overflow: 'hidden', position: 'relative' }}>
                      <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                          key={step}
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {step === 1 && <Step1 data={data} update={update} />}
                          {step === 2 && <Step2 data={data} update={update} />}
                          {step === 3 && <Step3 data={data} update={update} />}
                          {step === 4 && <Step4 data={data} update={update} />}
                          {step === 5 && <Step5 data={data} update={update} />}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div
                      className="flex items-center justify-between"
                      style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={back}
                          className="font-mono text-slate-500 hover:text-white transition-colors"
                          style={{ fontSize: '12px', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          ← Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < TOTAL_STEPS ? (
                        <button
                          type="button"
                          onClick={next}
                          disabled={!canAdvance()}
                          className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-200"
                          style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '7px',
                            background: canAdvance()
                              ? 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)'
                              : 'rgba(255,255,255,0.06)',
                            color: canAdvance() ? '#fff' : '#475569',
                            fontSize: '0.875rem',
                            border: 'none',
                            cursor: canAdvance() ? 'pointer' : 'not-allowed',
                            transition: 'all 0.2s',
                          }}
                        >
                          Continue
                          <ArrowRight size={15} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!canAdvance()}
                          className="inline-flex items-center gap-2 font-semibold text-white"
                          style={{
                            padding: '0.75rem 1.75rem',
                            borderRadius: '7px',
                            background: canAdvance()
                              ? 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)'
                              : 'rgba(255,255,255,0.06)',
                            color: canAdvance() ? '#fff' : '#475569',
                            fontSize: '0.875rem',
                            border: 'none',
                            cursor: canAdvance() ? 'pointer' : 'not-allowed',
                          }}
                        >
                          Start My Project
                          <ArrowRight size={15} />
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
