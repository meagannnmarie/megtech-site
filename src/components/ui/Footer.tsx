import { Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '3rem 1.5rem',
      }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <div>
          <div
            className="font-mono font-medium text-white/60 tracking-widest mb-1"
            style={{ fontSize: '12px', letterSpacing: '0.16em' }}
          >
            MEAGAN HOLUB
          </div>
          <div className="text-slate-700" style={{ fontSize: '12px' }}>
            © {year} · Technology Founder · Product Builder · Strategist
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors font-mono"
            style={{ fontSize: '12px' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors font-mono"
            style={{ fontSize: '12px' }}
          >
            GitHub
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors font-mono"
            style={{ fontSize: '12px' }}
          >
            TikTok
          </a>
          <a
            href="mailto:hello@meaganholub.com"
            aria-label="Email"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div
        className="text-center text-slate-800 font-mono"
        style={{ maxWidth: '1100px', margin: '2rem auto 0', fontSize: '11px' }}
      >
        <a href="#contact" className="hover:text-slate-500 transition-colors">
          Start Your Project →
        </a>
      </div>
    </footer>
  )
}
