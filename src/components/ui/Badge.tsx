import React from 'react'

type BadgeVariant = 'solar' | 'amber' | 'muted' | 'success'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
}

/**
 * Badge — label compacta para categorias, status e destaques de serviço.
 * Usa Barlow (utility font) em uppercase para reforçar o caráter industrial.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'muted',
  children,
  className = '',
  dot = false,
}) => {
  const base = [
    'inline-flex items-center gap-1.5',
    'font-[family-name:var(--font-util)] text-[11px] font-semibold tracking-[0.1em] uppercase',
    'px-3 py-1 rounded-full border',
  ]

  const variants: Record<BadgeVariant, string> = {
    solar: [
      'bg-[rgba(255,107,53,0.12)] text-[var(--solar)]',
      'border-[rgba(255,107,53,0.25)]',
    ].join(' '),

    amber: [
      'bg-[rgba(242,169,59,0.10)] text-[var(--amber)]',
      'border-[rgba(242,169,59,0.22)]',
    ].join(' '),

    muted: [
      'bg-[var(--surface-2)] text-[var(--text-muted)]',
      'border-[var(--border)]',
    ].join(' '),

    success: [
      'bg-[rgba(34,197,94,0.10)] text-[#4ade80]',
      'border-[rgba(34,197,94,0.2)]',
    ].join(' '),
  }

  const dotColors: Record<BadgeVariant, string> = {
    solar:   'bg-[var(--solar)]',
    amber:   'bg-[var(--amber)]',
    muted:   'bg-[var(--text-faint)]',
    success: 'bg-[#4ade80]',
  }

  const cls = [...base, variants[variant], className].join(' ')

  return (
    <span className={cls}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
