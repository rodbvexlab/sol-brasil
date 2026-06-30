import React from 'react'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { ScrollReveal } from '../motion/ScrollReveal'

const WA_NUMBER = '5511940229798'
const WA_MSG = encodeURIComponent('Olá! Quero agendar um orçamento para meu veículo.')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--carbon)] border-t border-[var(--border)] overflow-hidden relative" id="contato">
      {/* Background soft glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle 600px at 50% 50%, rgba(255, 107, 53, 0.15), transparent 80%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal variant="scale">
          {/* Glass design panel representing industrial strength and quality polish */}
          <div className="glass-solar rounded-[var(--radius-xl)] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--solar)] to-transparent" aria-hidden="true" />
            
            <Badge variant="solar" dot className="mb-6">
              Orçamento Sem Compromisso
            </Badge>

            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] leading-tight text-[var(--text)] mb-6">
              RESOLVA O PROBLEMA DO SEU VEÍCULO <span className="text-gradient-solar">HOJE MESMO.</span>
            </h2>

            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Não perca tempo rodando com carro riscado ou amassado. Envie uma foto do estrago no WhatsApp e receba um pré-orçamento rápido, prático e sem enrolação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as="a"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                fullWidthMobile
                leftIcon={<Phone size={18} />}
              >
                Chamar no WhatsApp
              </Button>
              
              <Button
                as="a"
                href="/contato"
                variant="secondary"
                size="lg"
                fullWidthMobile
                leftIcon={<Calendar size={18} />}
              >
                Ver Outros Meios
              </Button>
            </div>

            <p className="mt-6 text-xs text-[var(--text-faint)] font-[family-name:var(--font-util)] uppercase tracking-wider">
              Resposta rápida · Sistema leva e traz gratuito
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
