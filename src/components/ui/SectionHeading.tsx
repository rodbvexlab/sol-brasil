import React from 'react'

type Align = 'left' | 'center' | 'right'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleHighlight?: string   // parte do título com gradiente solar
  subtitle?: string
  align?: Align
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  showLine?: boolean        // linha solar decorativa
}

/**
 * SectionHeading — hierarquia de título de seção.
 *
 * Usa Barlow Condensed (display) para o título — peso 800, tracking -0.02em.
 * A hierarquia tipográfica carrega a personalidade da página sem depender
 * de decoração. A linha solar é usada com intenção: marca o início da seção,
 * não decora.
 *
 * Mobile-first:
 * - title: text-3xl mobile → text-5xl md
 * - eyebrow: text-[11px] uppercase, espaçamento Barlow
 * - alinhamento center por padrão (leitura mais natural no celular)
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
  as: Tag = 'h2',
  showLine = true,
}) => {
  const alignClasses: Record<Align, string> = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }

  // Monta o título: substitui `titleHighlight` com gradiente solar
  const renderTitle = () => {
    if (!titleHighlight) {
      return <span>{title}</span>
    }
    const parts = title.split(titleHighlight)
    return (
      <>
        {parts[0]}
        <span className="text-gradient-solar">{titleHighlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`flex flex-col gap-3 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span
          className={[
            'font-[family-name:var(--font-util)] text-[11px] font-semibold',
            'tracking-[0.14em] uppercase text-[var(--solar)]',
          ].join(' ')}
        >
          {eyebrow}
        </span>
      )}

      {showLine && (
        <span
          className={[
            'line-solar',
            align === 'center' ? 'mx-auto' : '',
            align === 'right'  ? 'ml-auto'  : '',
          ].join(' ')}
          aria-hidden="true"
        />
      )}

      <Tag
        className={[
          'font-[family-name:var(--font-display)] font-extrabold',
          'text-3xl sm:text-4xl md:text-5xl',
          'tracking-[-0.02em] leading-[1.05]',
          'text-[var(--text)]',
        ].join(' ')}
      >
        {renderTitle()}
      </Tag>

      {subtitle && (
        <p
          className={[
            'text-[var(--text-muted)] text-base md:text-lg',
            'leading-relaxed max-w-prose',
            align === 'center' ? 'mx-auto' : '',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
