import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const E = 'cubic-bezier(.22,1,.36,1)'
const T = `350ms ${E}`

// ── Primary ────────────────────────────────────────────────────────────

export function PrimaryButton({
  href,
  children,
  onClick,
}: {
  href?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const shared = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0.9rem 2rem',
      borderRadius: '6px',
      background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      color: '#fff',
      fontSize: '0.875rem',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: '0.01em',
      transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hovered
        ? '0 12px 32px rgba(99,102,241,.18)'
        : '0 0px 0px rgba(99,102,241,0)',
      transition: `transform ${T}, box-shadow ${T}`,
    } as React.CSSProperties,
  }

  const arrow = (
    <ArrowRight
      size={14}
      style={{
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: `transform ${T}`,
        flexShrink: 0,
      }}
    />
  )

  if (href) {
    return (
      <a href={href} {...shared}>
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} {...shared}>
      {children}
      {arrow}
    </button>
  )
}

// ── Secondary ──────────────────────────────────────────────────────────

export function SecondaryButton({
  href,
  children,
  onClick,
}: {
  href?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)

  const shared = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: 'relative' as const,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '0.9rem 1.75rem',
      borderRadius: '6px',
      border: `1px solid ${hovered ? 'rgba(99,102,241,.45)' : 'rgba(255,255,255,.11)'}`,
      background: 'transparent',
      color: hovered ? '#c7d2fe' : '#94a3b8',
      fontSize: '0.875rem',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      textDecoration: 'none',
      cursor: 'pointer',
      overflow: 'hidden' as const,
      transition: `border-color ${T}, color ${T}`,
    } as React.CSSProperties,
  }

  const inner = (
    <>
      {children}
      <ArrowRight
        size={14}
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
          transition: `opacity ${T}, transform ${T}`,
          flexShrink: 0,
        }}
      />
      {/* Underline — sweeps left to right */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: hovered ? '100%' : '0%',
          background: '#6366f1',
          transition: `width ${T}`,
        }}
      />
    </>
  )

  if (href) {
    return (
      <a href={href} {...shared}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} {...shared}>
      {inner}
    </button>
  )
}
