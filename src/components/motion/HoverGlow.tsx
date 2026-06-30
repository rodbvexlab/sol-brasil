import React, { useRef } from 'react'

type GlowColor = 'solar' | 'amber' | 'white'

interface HoverGlowProps {
  children: React.ReactNode
  color?: GlowColor
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
  as?: React.ElementType
  disabled?: boolean
}

/**
 * HoverGlow — wrapper de micro-interação hover com glow solar.
 *
 * Implementa dois efeitos simultâneos no hover:
 * 1. translateY(-2px) — micro-deslocamento artesanal
 * 2. box-shadow com glow solar/âmbar — como reflexo de lataria polida
 *
 * O efeito de "spotlight" rastreia a posição do mouse via JS (onMouseMove)
 * criando um glow radial que segue o cursor — mais artesanal que um
 * box-shadow estático.
 *
 * Mobile: sem efeito hover (touch devices não têm hover real).
 * prefers-reduced-motion: só muda cor, sem translateY ou glow animado.
 */
export const HoverGlow: React.FC<HoverGlowProps> = ({
  children,
  color = 'solar',
  intensity = 'subtle',
  className = '',
  as: Tag = 'div',
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const glowColors: Record<GlowColor, string> = {
    solar: 'rgba(255, 107, 53',
    amber: 'rgba(242, 169, 59',
    white: 'rgba(255, 255, 255',
  }

  const intensityAlpha: Record<'subtle' | 'medium' | 'strong', number> = {
    subtle: 0.12,
    medium: 0.22,
    strong: 0.35,
  }

  const alpha = intensityAlpha[intensity]
  const glow  = glowColors[color]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ref.current.style.setProperty('--glow-x', `${x}px`)
    ref.current.style.setProperty('--glow-y', `${y}px`)
    ref.current.style.setProperty('--glow-color', `${glow}, ${alpha})`)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--glow-color', `${glow}, 0)`)
  }

  return (
    <Tag
      ref={ref}
      className={[
        'relative transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        !disabled ? 'hover:-translate-y-0.5 cursor-pointer' : '',
        className,
      ].join(' ')}
      style={
        {
          '--glow-x': '50%',
          '--glow-y': '50%',
          '--glow-color': `${glow}, 0)`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Camada de spotlight radial que segue o cursor */}
      {!disabled && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: 'radial-gradient(320px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 70%)',
          }}
        />
      )}
      {children}
    </Tag>
  )
}
