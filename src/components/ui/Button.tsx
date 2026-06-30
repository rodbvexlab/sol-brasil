import React from 'react'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary-solar' | 'secondary' | 'ghost' | 'whatsapp'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidthMobile?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

/**
 * Button — 4 variantes: primary-solar, secondary, ghost, whatsapp
 *
 * Mobile-first:
 * - min-h 48px em todas as variantes (touch target ≥ 44px)
 * - `fullWidthMobile` expande para 100% em telas pequenas
 * - Estado `:active` com scale + feedback visual em TODAS as variantes
 *   (touch não tem hover real — o active é o único feedback em mobile)
 *
 * Sem pulse infinito — glow solar é estático no box-shadow base.
 * Movimento só com intenção: scale no active, transição no hover.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary-solar',
      size = 'md',
      fullWidthMobile = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      as = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const base = [
      'relative inline-flex items-center justify-center gap-2',
      'font-[family-name:var(--font-util)] font-semibold tracking-wide',
      'rounded-[var(--radius-md)] transition-all focus-ring',
      'select-none whitespace-nowrap',
      'cursor-pointer',
      isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    ]

    const sizes: Record<ButtonSize, string> = {
      sm: 'text-sm px-4 py-2.5 min-h-[40px]',
      md: 'text-sm px-6 py-3   min-h-[48px]',
      lg: 'text-base px-8 py-4 min-h-[52px]',
    }

    const variants: Record<ButtonVariant, string> = {
      // Glow solar estático no box-shadow base — sem pulse infinito.
      // O calor/energia do acento já está presente como luz ambiente;
      // não precisa piscar para comunicar isso.
      'primary-solar': [
        'bg-[var(--solar)] text-white',
        // Glow base estático — presente sempre, não pulsante
        'shadow-[0_0_20px_rgba(255,107,53,0.22),0_4px_14px_rgba(255,107,53,0.14)]',
        // Hover desktop: intensifica glow + escurece levemente
        'hover:bg-[#ff7d4d]',
        'hover:shadow-[0_0_36px_rgba(255,107,53,0.38),0_4px_20px_rgba(255,107,53,0.28)]',
        // Active (touch + click): scale down + glow recolhe — feedback tátil nítido
        'active:scale-[0.96] active:bg-[#e85a26]',
        'active:shadow-[0_0_10px_rgba(255,107,53,0.15),0_2px_6px_rgba(255,107,53,0.1)]',
      ].join(' '),

      secondary: [
        'bg-transparent text-[var(--text)] border border-[var(--border)]',
        // Hover desktop
        'hover:border-[var(--solar)] hover:text-[var(--solar)]',
        'hover:shadow-[0_0_0_1px_var(--solar),inset_0_0_20px_rgba(255,107,53,0.04)]',
        // Active touch: borda solar sólida + bg levíssimo — feedback sem depender de hover
        'active:scale-[0.97]',
        'active:border-[var(--solar)] active:text-[var(--solar)]',
        'active:bg-[rgba(255,107,53,0.06)]',
      ].join(' '),

      ghost: [
        'bg-transparent text-[var(--text-muted)]',
        // Hover desktop
        'hover:text-[var(--text)] hover:bg-[rgba(255,255,255,0.05)]',
        // Active touch: bg visível + texto claro — sem depender de hover
        'active:scale-[0.97]',
        'active:text-[var(--text)] active:bg-[rgba(255,255,255,0.08)]',
      ].join(' '),

      whatsapp: [
        'bg-[#25D366] text-white',
        // Glow base estático
        'shadow-[0_4px_16px_rgba(37,211,102,0.2)]',
        // Hover desktop
        'hover:bg-[#22c55e] hover:shadow-[0_0_28px_rgba(37,211,102,0.38)]',
        // Active touch: escurece + scale — feedback nítido em mobile
        'active:scale-[0.96] active:bg-[#1da851]',
        'active:shadow-[0_2px_8px_rgba(37,211,102,0.15)]',
      ].join(' '),
    }

    const mobileWidth = fullWidthMobile ? 'w-full sm:w-auto' : ''

    const cls = [
      ...base,
      sizes[size],
      variants[variant],
      mobileWidth,
      className,
    ].join(' ')

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cls}
          aria-disabled={isDisabled}
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : leftIcon}
          {children}
          {!loading && rightIcon}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={cls}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
