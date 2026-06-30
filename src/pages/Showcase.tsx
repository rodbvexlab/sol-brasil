import React from 'react'
import {
  Wrench, Droplets, Shield, Zap, Sparkles,
  Star, CheckCircle, ArrowRight, ChevronRight,
} from 'lucide-react'

import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/motion/ScrollReveal'
import { HoverGlow } from '../components/motion/HoverGlow'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'

/**
 * Showcase — página temporária de validação de componentes.
 * Exibe cada componente com suas variantes para revisão visual.
 * Substitua por Home.tsx após aprovação.
 */
const Section: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({
  title,
  id,
  children,
}) => (
  <section
    id={id}
    className="py-16 border-b border-[var(--border)]"
    aria-labelledby={`${id}-heading`}
  >
    <div className="mb-8 flex items-center gap-3">
      <span
        className="line-solar"
        aria-hidden="true"
      />
      <h2
        id={`${id}-heading`}
        className="font-[family-name:var(--font-util)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-faint)]"
      >
        {title}
      </h2>
    </div>
    {children}
  </section>
)

export const Showcase: React.FC = () => {
  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />

      <main className="min-h-screen bg-[var(--carbon)]">
        {/* Header da showcase */}
        <div className="pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
          <ScrollReveal variant="up">
            <Badge variant="solar" dot className="mb-6">
              Design System — Showcase
            </Badge>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={80}>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] leading-[1.0] text-[var(--text)] mb-4">
              Funilaria{' '}
              <span className="text-gradient-solar">Sol Brasil</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={160}>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mt-4">
              Sistema de design completo — "Premium Solar Industrial".
              Todos os componentes validados mobile-first.
            </p>
          </ScrollReveal>
        </div>

        <div className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">

          {/* ─── TIPOGRAFIA ─── */}
          <Section title="Tipografia" id="tipografia">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-3">
                  Barlow Condensed — Display (800)
                </p>
                <p className="font-[family-name:var(--font-display)] font-extrabold text-6xl md:text-8xl tracking-[-0.03em] leading-none text-[var(--text)]">
                  Lataria Nova
                </p>
                <p className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl tracking-[-0.02em] text-gradient-solar mt-2">
                  Sol Brasil
                </p>
              </div>

              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-3">
                  Barlow — Utility (600)
                </p>
                <p className="font-[family-name:var(--font-util)] font-semibold text-xl uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  FUNILARIA · PINTURA · MECÂNICA
                </p>
              </div>

              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-3">
                  DM Sans — Body (400/500)
                </p>
                <p className="font-[family-name:var(--font-body)] text-base text-[var(--text)] leading-relaxed max-w-prose">
                  Seu carro saiu amassado de um estacionamento? A gente cuida disso sem
                  você precisar acionar o seguro. Martelinho de ouro de verdade — sem
                  repintura, sem perda de valor de revenda.
                </p>
              </div>
            </div>
          </Section>

          {/* ─── PALETA ─── */}
          <Section title="Paleta de Cores" id="cores">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { name: 'Carbon',   hex: '#0A0A0B', cls: 'bg-[#0A0A0B] border border-[#2A2A2E]' },
                { name: 'Surface',  hex: '#16161A', cls: 'bg-[#16161A] border border-[#2A2A2E]' },
                { name: 'Surface2', hex: '#1E1E24', cls: 'bg-[#1E1E24] border border-[#2A2A2E]' },
                { name: 'Border',   hex: '#2A2A2E', cls: 'bg-[#2A2A2E]' },
                { name: 'Solar',    hex: '#FF6B35', cls: 'bg-[#FF6B35]' },
                { name: 'Amber',    hex: '#F2A93B', cls: 'bg-[#F2A93B]' },
                { name: 'Text',     hex: '#EDEDED', cls: 'bg-[#EDEDED]' },
              ].map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div className={`h-16 rounded-[var(--radius-md)] ${c.cls}`} />
                  <p className="text-[var(--text)] text-xs font-medium">{c.name}</p>
                  <p className="text-[var(--text-faint)] text-[10px] font-mono">{c.hex}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ─── BADGES ─── */}
          <Section title="Badges" id="badges">
            <div className="flex flex-wrap gap-3">
              <Badge variant="solar">Solar</Badge>
              <Badge variant="solar" dot>Destaque</Badge>
              <Badge variant="amber">Âmbar</Badge>
              <Badge variant="amber" dot>Novo</Badge>
              <Badge variant="muted">Muted</Badge>
              <Badge variant="success" dot>Aberto</Badge>
            </div>
          </Section>

          {/* ─── BUTTONS ─── */}
          <Section title="Botões" id="botoes">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-4">
                  Tamanhos & Variantes
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="primary-solar" size="sm">
                    Pequeno
                  </Button>
                  <Button variant="primary-solar" size="md" rightIcon={<ArrowRight size={16} />}>
                    Pedir Orçamento
                  </Button>
                  <Button variant="primary-solar" size="lg">
                    Grande
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="secondary" leftIcon={<ChevronRight size={16} />}>
                  Ver Serviços
                </Button>
                <Button variant="ghost">
                  Saiba Mais
                </Button>
                <Button variant="whatsapp">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  WhatsApp
                </Button>
                <Button variant="primary-solar" loading>
                  Carregando
                </Button>
                <Button variant="secondary" disabled>
                  Desabilitado
                </Button>
              </div>

              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-4">
                  Mobile Full Width
                </p>
                <Button variant="primary-solar" size="lg" fullWidthMobile rightIcon={<ArrowRight size={18} />}>
                  Solicitar Visita
                </Button>
              </div>
            </div>
          </Section>

          {/* ─── CARDS ─── */}
          <Section title="Cards" id="cards">
            <div className="flex flex-col gap-8">

              {/* Service Cards */}
              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-4">
                  Card de Serviço (variante: service)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: <Wrench size={28} />,    title: 'Funilaria e Pintura',        desc: 'Amassados, riscos, batidas — cuidamos de tudo com acabamento de fábrica.' },
                    { icon: <Sparkles size={28} />,  title: 'Martelinho de Ouro',          desc: 'Retira amassados sem repintura e sem perda de valor de revenda.' },
                    { icon: <Droplets size={28} />,  title: 'Polimento e Cristalização',   desc: 'Devolvemos o brilho da lataria como se fosse zero quilômetro.' },
                    { icon: <Shield size={28} />,    title: 'Recuperação de Parachoques',  desc: 'Parachoques trincado, quebrado ou riscado. A gente recupera ou troca.' },
                  ].map((s, i) => (
                    <ScrollReveal key={s.title} variant="scale" delay={i * 80}>
                      <HoverGlow color="amber" intensity="subtle">
                        <Card variant="service">
                          <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(255,107,53,0.1)] text-[var(--solar)]">
                              {s.icon}
                            </div>
                            <div>
                              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl tracking-[-0.01em] text-[var(--text)] mb-1.5">
                                {s.title}
                              </h3>
                              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                {s.desc}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </HoverGlow>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Testimonial Card */}
              <div>
                <p className="text-[var(--text-faint)] text-xs font-[family-name:var(--font-util)] uppercase tracking-widest mb-4">
                  Card de Depoimento (variante: testimonial)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'Rodrigo M.',
                      service: 'Funilaria e Pintura',
                      text: 'Bati o carro na garagem e fiquei sem acreditar no resultado — saiu como se nunca tivesse batido. O pessoal é muito honesto também, não empurrou nada a mais.',
                    },
                    {
                      name: 'Camila T.',
                      service: 'Martelinho de Ouro',
                      text: 'Estacionamento de shopping. Alguém abriu a porta no meu carro e foi embora. A Sol Brasil tirou o amassado sem repintar nada. Nem percebi depois.',
                    },
                  ].map((t, i) => (
                    <ScrollReveal key={t.name} variant="left" delay={i * 100}>
                      <Card variant="testimonial">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-1" aria-label={`5 estrelas`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="text-[var(--amber)] fill-[var(--amber)]"
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="text-[var(--text)] text-sm leading-relaxed italic">
                            "{t.text}"
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[var(--text)] text-sm font-semibold">{t.name}</p>
                              <p className="text-[var(--text-muted)] text-xs">{t.service}</p>
                            </div>
                            <CheckCircle size={18} className="text-[var(--amber)]" aria-hidden="true" />
                          </div>
                        </div>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ─── SECTION HEADINGS ─── */}
          <Section title="Section Headings" id="headings">
            <div className="flex flex-col gap-16">
              <ScrollReveal variant="up">
                <SectionHeading
                  eyebrow="Nossos Serviços"
                  title="O que a gente resolve"
                  titleHighlight="resolve"
                  subtitle="Da lataria amassada ao motor falhando — não tem problema de carro que a gente não conheça."
                  showLine
                />
              </ScrollReveal>

              <ScrollReveal variant="left">
                <SectionHeading
                  eyebrow="Por que nos escolher"
                  title="Sem enrolação."
                  subtitle="Orçamento claro, prazo cumprido, e você fica sabendo de tudo o que está sendo feito no seu carro."
                  align="left"
                />
              </ScrollReveal>
            </div>
          </Section>

          {/* ─── MOTION ─── */}
          <Section title="ScrollReveal — Variantes" id="motion">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(
                [
                  { v: 'up'    as const, label: 'Reveal Up',    desc: 'Seções principais' },
                  { v: 'left'  as const, label: 'Reveal Left',  desc: 'Layouts assimétricos' },
                  { v: 'scale' as const, label: 'Reveal Scale', desc: 'Cards de serviço' },
                  { v: 'fade'  as const, label: 'Reveal Fade',  desc: 'Elementos secundários' },
                ]
              ).map(({ v, label, desc }) => (
                <ScrollReveal key={v} variant={v} delay={100}>
                  <Card variant="default">
                    <Badge variant="muted" className="mb-3">
                      {label}
                    </Badge>
                    <p className="text-[var(--text)] text-sm font-medium mb-1">{label}</p>
                    <p className="text-[var(--text-muted)] text-xs">{desc}</p>
                    <p className="text-[var(--text-faint)] text-[10px] font-mono mt-3">
                      variant="{v}"
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Section>

          {/* ─── HOVER GLOW ─── */}
          <Section title="HoverGlow — Mouse Tracking" id="hover">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(
                [
                  { color: 'solar' as const,  label: 'Solar Glow' },
                  { color: 'amber' as const,  label: 'Amber Glow' },
                  { color: 'white' as const,  label: 'White Glow' },
                ]
              ).map(({ color, label }) => (
                <HoverGlow key={color} color={color} intensity="medium">
                  <Card variant="default">
                    <p className="text-[var(--text)] text-sm font-medium">{label}</p>
                    <p className="text-[var(--text-muted)] text-xs mt-1">
                      Passe o mouse sobre o card — o glow segue o cursor.
                    </p>
                    <p className="text-[var(--text-faint)] text-[10px] font-mono mt-3">
                      color="{color}"
                    </p>
                  </Card>
                </HoverGlow>
              ))}
            </div>
          </Section>

          {/* ─── SERVIÇOS COMPLETOS ─── */}
          <Section title="Grid de Serviços — 8 Completos" id="servicos-completos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Wrench size={24} />,   title: 'Funilaria e Pintura',               badge: 'Mais procurado' },
                { icon: <Sparkles size={24} />, title: 'Martelinho de Ouro',                badge: null },
                { icon: <Droplets size={24} />, title: 'Polimento e Cristalização',         badge: 'Destaque' },
                { icon: <Shield size={24} />,   title: 'Recuperação de Parachoques',        badge: null },
                { icon: <Zap size={24} />,      title: 'Sistema Leva e Traz',               badge: 'Grátis' },
                { icon: <Wrench size={24} />,   title: 'Mecânica em Geral',                 badge: null },
                { icon: <Zap size={24} />,      title: 'Suspensão e Injeção Eletrônica',    badge: null },
                { icon: <Droplets size={24} />, title: 'Troca de Óleo',                     badge: null },
              ].map((s, i) => (
                <ScrollReveal key={s.title} variant="scale" delay={i * 50}>
                  <HoverGlow color="solar" intensity="subtle">
                    <Card variant="service">
                      <div className="flex flex-col gap-3 min-h-[120px]">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(255,107,53,0.1)] text-[var(--solar)]">
                            {s.icon}
                          </div>
                          {s.badge && <Badge variant="amber">{s.badge}</Badge>}
                        </div>
                        <h3 className="font-[family-name:var(--font-display)] font-bold text-lg tracking-[-0.01em] text-[var(--text)]">
                          {s.title}
                        </h3>
                      </div>
                    </Card>
                  </HoverGlow>
                </ScrollReveal>
              ))}
            </div>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  )
}
