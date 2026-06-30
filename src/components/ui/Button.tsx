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
 * Button — 3 variantes: primary-solar, secondary, ghost
 *
 * Mobile-first: min-h 48px em todas as variantes (touch target ≥ 44px).
 * Em mobile, `fullWidthMobile` expande para full width por padrão.
 * `primary-solar` pulsa com glow quando não desabilitado.
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
      'primary-solar': [
        'bg-[var(--solar)] text-white',
        'hover:bg-[#ff7d4d] hover:shadow-[0_0_32px_rgba(255,107,53,0.35),0_4px_16px_rgba(255,107,53,0.25)]',
        'active:scale-[0.97]',
        'shadow-[0_0_16px_rgba(255,107,53,0.2),0_4px_12px_rgba(255,107,53,0.12)]',
        !isDisabled ? 'animate-[pulse-solar_3s_ease-in-out_infinite]' : '',
      ].join(' '),

      secondary: [
        'bg-transparent text-[var(--text)] border border-[var(--border)]',
        'hover:border-[var(--solar)] hover:text-[var(--solar)]',
        'hover:shadow-[0_0_0_1px_var(--solar),inset_0_0_20px_rgba(255,107,53,0.04)]',
        'active:scale-[0.97]',
      ].join(' '),

      ghost: [
        'bg-transparent text-[var(--text-muted)]',
        'hover:text-[var(--text)] hover:bg-[rgba(255,255,255,0.05)]',
        'active:scale-[0.97]',
      ].join(' '),

      whatsapp: [
        'bg-[#25D366] text-white',
        'hover:bg-[#22c55e] hover:shadow-[0_0_24px_rgba(37,211,102,0.35)]',
        'active:scale-[0.97]',
        'shadow-[0_4px_16px_rgba(37,211,102,0.2)]',
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
