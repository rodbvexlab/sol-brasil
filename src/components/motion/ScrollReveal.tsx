import React, { useEffect, useRef, useState } from 'react'

type RevealVariant =
  | 'up'       // reveal-up — padrão, para a maioria das seções
  | 'left'     // reveal lateral — layouts assimétricos
  | 'scale'    // reveal com scale — cards de serviço
  | 'fade'     // simples fade — para elementos secundários

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number          // delay em ms (para stagger entre filhos)
  duration?: number       // duração em ms
  threshold?: number      // 0-1, quanto do elemento precisa estar visível
  className?: string
  once?: boolean          // anima só uma vez
}

/**
 * ScrollReveal — wrapper de animação de entrada por scroll.
 *
 * Cada seção do site usa uma variante levemente distinta (não o mesmo
 * fade-up genérico em tudo). A assinatura de movimento é controlada aqui
 * via keyframes definidos em index.css e aplicados inline como estilo.
 *
 * prefers-reduced-motion: elemento aparece direto sem animação.
 * Usa IntersectionObserver nativo — sem dependência de biblioteca.
 *
 * Mobile: translateY menor (20px vs 28px) para não deslocar muito
 * em telas pequenas onde o conteúdo já está comprimido.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)

    const el = ref.current
    if (!el) return

    // Se prefere menos movimento, mostra direto
    if (mq.matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  // Mapeamento de variante → keyframe CSS
  const animationMap: Record<RevealVariant, string> = {
    up:    'reveal-up',
    left:  'reveal-left',
    scale: 'reveal-scale',
    fade:  'reveal-up', // fade usa reveal-up mas com translateY menor (via CSS var)
  }

  // Estados inicial e final para cada variante
  const hiddenStyles: Record<RevealVariant, React.CSSProperties> = {
    up:    { opacity: 0, transform: 'translateY(28px)' },
    left:  { opacity: 0, transform: 'translateX(-20px)' },
    scale: { opacity: 0, transform: 'translateY(20px) scale(0.97)' },
    fade:  { opacity: 0, transform: 'translateY(12px)' },
  }

  const style: React.CSSProperties = prefersReduced
    ? { opacity: 1 }
    : visible
    ? {
        animation: `${animationMap[variant]} ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
      }
    : hiddenStyles[variant]

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
