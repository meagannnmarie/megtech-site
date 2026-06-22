import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

export function About() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="about"
      style={{
        padding: '8rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: founder story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ height: '1px', width: '32px', background: '#6366f1' }} />
              <span
                className="font-mono text-indigo-400 tracking-widest uppercase"
                style={{ fontSize: '11px' }}
              >
                About
              </span>
            </div>

            <h2
              className="font-display font-bold text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Building at the
              <br />
              <span style={{ color: '#818cf8' }}>intersection of technology</span>
              <br />
              and vision.
            </h2>

            <div className="space-y-5" style={{ color: '#94a3b8', lineHeight: '1.75' }}>
              <p>
                I'm a technology founder and strategist with over a decade building at the intersection of software, cybersecurity, digital growth, and business systems — not as separate disciplines, but as one integrated way of solving problems.
              </p>
              <p>
                I started as an engineer. I've worked across hospitals, airports, banking, restaurants, and enterprise infrastructure at scale. I hold a BS in Computer Science, graduated Cum Laude with a 3.9 GPA, and earned an ISC2 cybersecurity certification. Today I build software, websites, growth systems, and digital strategies that help organizations make better technology decisions, attract more customers, and scale with confidence.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center font-medium text-indigo-400 hover:text-white transition-colors duration-200"
              style={{ marginTop: '2.5rem', fontSize: '0.875rem', letterSpacing: '0.02em' }}
            >
              Work with me →
            </a>
          </motion.div>

          {/* Right: background at a glance */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                overflow: 'hidden',
              }}
            >
              {[
                {
                  label: 'Education',
                  title: 'BS Computer Science',
                  detail: 'Cum Laude · 3.9 GPA · Dean\'s List',
                },
                {
                  label: 'Certification',
                  title: 'ISC2 Certified',
                  detail: 'Cybersecurity professional credential',
                },
                {
                  label: 'Enterprise experience',
                  title: 'Hospitals · Airports · Banking · Restaurants',
                  detail: 'Large-scale technology systems at corporate scale',
                },
                {
                  label: 'Reach',
                  title: '50K+ combined',
                  detail: 'TikTok, LinkedIn, and social platforms',
                },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    padding: '1.75rem 2rem',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <div
                    className="font-mono text-indigo-400/60 tracking-widest uppercase mb-2"
                    style={{ fontSize: '10px' }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="font-medium text-white"
                    style={{ fontSize: '0.9rem', marginBottom: '3px' }}
                  >
                    {item.title}
                  </div>
                  <div className="text-slate-600" style={{ fontSize: '12px' }}>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
