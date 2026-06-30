import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { ScrollReveal } from '../motion/ScrollReveal'

const WA_NUMBER = '5511940229798'
const WA_MSG = encodeURIComponent('Olá! Quero um orçamento para o meu carro.')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[var(--carbon)]">
      {/* Background radial gradient glow representing solar reflecting on polished car bodies */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle 800px at 50% -200px, rgba(255, 107, 53, 0.15), transparent 80%), radial-gradient(circle 600px at 100% 80%, rgba(242, 169, 59, 0.08), transparent 70%)'
        }}
        aria-hidden="true"
      />

      {/* Decorative metal texture grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side text column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <ScrollReveal variant="up">
            <Badge variant="solar" dot className="mb-6">
              Funilaria, Pintura & Estética Premium
            </Badge>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={80}>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-[-0.03em] leading-[0.95] text-[var(--text)] mb-6">
              SEU CARRO COM<br />
              ACABAMENTO DE<br />
              <span className="text-gradient-solar">CONCESSIONÁRIA.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={160}>
            <p className="text-[var(--text-muted)] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Bateu ou riscou o veículo? Recuperamos a estética e a estrutura original sem enrolação, com prazo cumprido e acabamento artesanal impecável.
            </p>
          </ScrollReveal>

          {/* CTAs column - Mobile first prioritized (full width button stacked) */}
          <ScrollReveal variant="up" delay={240} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
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
                Orçamento via WhatsApp
              </Button>
              <Button
                as="a"
                href="/servicos"
                variant="secondary"
                size="lg"
                fullWidthMobile
                rightIcon={<ArrowRight size={18} />}
              >
                Nossos Serviços
              </Button>
            </div>
          </ScrollReveal>

          {/* Quick info list for reassurance */}
          <ScrollReveal variant="fade" delay={320} className="mt-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-util)] uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--solar)]" />
                Orçamento Rápido Sem Compromisso
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)]" />
                Sistema Leva e Traz Incluso
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--solar)]" />
                Leva até 48h em Pequenos Reparos
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right side visual showcase (ambient layout) */}
        <div className="lg:col-span-5 hidden lg:block relative">
          <ScrollReveal variant="scale" delay={200}>
            {/* Outer solar ring glow */}
            <div className="absolute -inset-4 rounded-[var(--radius-xl)] bg-gradient-to-tr from-[var(--solar)] to-[var(--amber)] opacity-10 blur-xl" aria-hidden="true" />
            
            {/* The showcase box representing premium automobile structure */}
            <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[rgba(255,107,53,0.15)] to-transparent rounded-bl-full" aria-hidden="true" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[var(--solar)] animate-ping" />
                <span className="font-[family-name:var(--font-util)] text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase">
                  Oficina Operante
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--text)] mb-3">
                Sistema Leva e Traz
              </h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Buscamos seu veículo em casa ou no trabalho e o entregamos 100% pronto. Conforto total para você não perder tempo.
              </p>

              <div className="space-y-3.5 border-t border-[var(--border)] pt-5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Horário comercial</span>
                  <span className="text-[var(--text)] font-semibold">Seg a Sex, 8h às 18h</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Tempo médio reparo leve</span>
                  <span className="text-[var(--solar)] font-semibold">24 a 48 horas</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Atendimento SP Capital</span>
                  <span className="text-[var(--text)] font-semibold">Zona Sul, Leste e Centro</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
