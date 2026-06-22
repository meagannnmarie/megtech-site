interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-indigo-500" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase font-medium text-indigo-400">
        {children}
      </span>
    </div>
  )
}
