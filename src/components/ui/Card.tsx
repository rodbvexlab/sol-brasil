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
 * Card — base glass + estados de hover (desktop) e active (touch/mobile).
 *
 * Variantes:
 * - `service`: glass leve, linha solar no topo revela no toque/hover
 * - `before-after`: aspect ratio fixo para fotos comparativas
 * - `testimonial`: borda solar sutil no topo
 * - `default`: surface simples com glow sutil
 *
 * Mobile-first — touch states:
 * - Tailwind `:active` replica o efeito visual do hover, sem spotlight radial
 *   (cursor não existe em touch — o glow estático cobre o caso de uso)
 * - Linha solar no topo do `service` card: opacity-100 no :active via `active:`
 * - `active:` é aplicado em todas as variantes independente de `onClick`
 *   (o feedback visual existe mesmo para cards não clicáveis, porque Tailwind
 *    não distingue — mas só é perceptível se o elemento for interativo)
 *
 * Glass é funcional: usado apenas onde reforça profundidade/hierarquia.
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
        // Hover — desktop mouse
        'hover:border-[rgba(255,107,53,0.25)]',
        'hover:shadow-[0_8px_40px_rgba(255,107,53,0.08),0_0_0_1px_rgba(255,107,53,0.1)]',
        'hover:-translate-y-0.5',
        // Active — touch/mobile (versão estática do hover, sem translateY)
        // glow solar estático: feedback sem cursor tracking
        'active:border-[rgba(255,107,53,0.3)]',
        'active:shadow-[0_4px_24px_rgba(255,107,53,0.12),0_0_0_1px_rgba(255,107,53,0.15)]',
        'active:scale-[0.99]',
      ].join(' '),

      service: [
        // glass funcional — profundidade real sobre o fundo dark
        'glass p-5 md:p-6',
        // Hover — desktop
        'hover:border-[rgba(242,169,59,0.3)]',
        'hover:shadow-[0_12px_48px_rgba(255,107,53,0.1),0_0_0_1px_rgba(242,169,59,0.15),inset_0_1px_0_rgba(255,255,255,0.04)]',
        'hover:-translate-y-1',
        // Active — touch: borda âmbar + glow sutil, sem translateY
        'active:border-[rgba(242,169,59,0.35)]',
        'active:shadow-[0_4px_28px_rgba(255,107,53,0.12),0_0_0_1px_rgba(242,169,59,0.2)]',
        'active:scale-[0.99]',
        // Linha solar no topo:
        // - hover: desktop
        // - active: touch — usa [&:active]:before: (Tailwind v4 group)
        'before:absolute before:inset-x-0 before:top-0 before:h-[2px]',
        'before:bg-gradient-to-r before:from-[var(--solar)] before:to-[var(--amber)]',
        'before:opacity-0 before:transition-opacity before:duration-[280ms]',
        'hover:before:opacity-100',
        // active:before não é suportado diretamente pelo Tailwind como classe composta,
        // então usamos a classe CSS auxiliar .card-solar-touch definida em index.css
        // (ver comentário lá). A classe é adicionada condicionalmente abaixo.
      ].join(' '),

      'before-after': [
        'bg-[var(--surface)] p-0',
        // Hover — desktop
        'hover:border-[rgba(255,107,53,0.3)]',
        'hover:shadow-[0_8px_40px_rgba(255,107,53,0.12)]',
        // Active — touch
        'active:border-[rgba(255,107,53,0.35)]',
        'active:shadow-[0_4px_20px_rgba(255,107,53,0.14)]',
        'active:scale-[0.99]',
      ].join(' '),

      testimonial: [
        'bg-[var(--surface-2)] p-5 md:p-6',
        'border-t border-t-[rgba(242,169,59,0.2)]',
        // Hover — desktop
        'hover:border-[rgba(242,169,59,0.35)]',
        'hover:shadow-[0_8px_32px_rgba(242,169,59,0.08)]',
        'hover:-translate-y-0.5',
        // Active — touch
        'active:border-[rgba(242,169,59,0.4)]',
        'active:shadow-[0_4px_20px_rgba(242,169,59,0.1)]',
        'active:scale-[0.99]',
      ].join(' '),
    }

    // Para cards de serviço: adiciona classe auxiliar para active:before:opacity-100
    const touchLineClass = variant === 'service' ? 'card-solar-touch' : ''

    const cls = [...base, variants[variant], touchLineClass, className].join(' ')

    return (
      <Tag ref={ref} className={cls} onClick={onClick}>
        {children}
      </Tag>
    )
  }
)

Card.displayName = 'Card'
