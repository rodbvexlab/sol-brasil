import React from 'react'

type CardVariant = 'service' | 'before-after' | 'testimonial' | 'default'

interface CardProps {
  variant?: CardVariant
  className?: string
  children: React.ReactNode
  onClick?: () => void
  as?: React.ElementType
  href?: string
}

/**
 * Card — base glass + borda âmbar sutil no hover.
 *
 * Variantes:
 * - `service`: glass leve, ícone + título + descrição
 * - `before-after`: aspect ratio fixo para fotos comparativas
 * - `testimonial`: borda solar sutil no topo
 * - `default`: surface simples com hover glow
 *
 * Mobile-first: full-width por padrão, responsividade pelo pai.
 * Glass é funcional — usado apenas onde reforça profundidade.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className = '', children, onClick, as: Tag = 'div' }, ref) => {
    const base = [
      'relative rounded-[var(--radius-lg)] overflow-hidden',
      'border border-[var(--border)]',
      'transition-all duration-[280ms] ease-[var(--ease-out-expo)]',
      onClick ? 'cursor-pointer' : '',
    ]

    const variants: Record<CardVariant, string> = {
      default: [
        'bg-[var(--surface)] p-5',
        'hover:border-[rgba(255,107,53,0.25)]',
        'hover:shadow-[0_8px_40px_rgba(255,107,53,0.08),0_0_0_1px_rgba(255,107,53,0.1)]',
        'hover:-translate-y-0.5',
      ].join(' '),

      service: [
        // glass funcional — profundidade real sobre o fundo dark
        'glass p-5 md:p-6',
        'hover:border-[rgba(242,169,59,0.3)]',
        'hover:shadow-[0_12px_48px_rgba(255,107,53,0.1),0_0_0_1px_rgba(242,169,59,0.15),inset_0_1px_0_rgba(255,255,255,0.04)]',
        'hover:-translate-y-1',
        // linha solar sutil no topo — aparece no hover
        'before:absolute before:inset-x-0 before:top-0 before:h-[2px]',
        'before:bg-gradient-to-r before:from-[var(--solar)] before:to-[var(--amber)]',
        'before:opacity-0 before:transition-opacity before:duration-[280ms]',
        'hover:before:opacity-100',
      ].join(' '),

      'before-after': [
        'bg-[var(--surface)] p-0',
        'hover:border-[rgba(255,107,53,0.3)]',
        'hover:shadow-[0_8px_40px_rgba(255,107,53,0.12)]',
      ].join(' '),

      testimonial: [
        'bg-[var(--surface-2)] p-5 md:p-6',
        'border-t border-t-[rgba(242,169,59,0.2)]',
        'hover:border-[rgba(242,169,59,0.35)]',
        'hover:shadow-[0_8px_32px_rgba(242,169,59,0.08)]',
        'hover:-translate-y-0.5',
      ].join(' '),
    }

    const cls = [...base, variants[variant], className].join(' ')

    return (
      <Tag ref={ref} className={cls} onClick={onClick}>
        {children}
      </Tag>
    )
  }
)

Card.displayName = 'Card'
