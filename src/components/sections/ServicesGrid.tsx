import React from 'react'
import { ArrowRight, Wrench, Sparkles, Droplets, Shield, Zap, RefreshCw, Layers } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../motion/ScrollReveal'
import { HoverGlow } from '../motion/HoverGlow'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  desc: string
  badge?: string
}

export const ServicesGrid: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Wrench size={24} />,
      title: 'Funilaria e Pintura',
      desc: 'Amassados de colisões, riscos e batidas. Acabamento artesanal com tintas e verniz de alto padrão.',
      badge: 'Mais Procurado'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Martelinho de Ouro',
      desc: 'Remoção de pequenos amassados sem necessidade de repintura, preservando a originalidade do carro.',
      badge: 'Artesanal'
    },
    {
      icon: <Droplets size={24} />,
      title: 'Polimento e Cristalização',
      desc: 'Correção de verniz, remoção de riscos superficiais e proteção duradoura para o brilho da lataria.',
      badge: 'Estética'
    },
    {
      icon: <Shield size={24} />,
      title: 'Recuperação de Parachoques',
      desc: 'Solda plástica e alinhamento de para-choques trincados ou deformados com reforço estrutural.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Sistema Leva e Traz',
      desc: 'Buscamos e entregamos seu veículo em domicílio com total segurança e comodidade para você.',
      badge: 'Diferencial'
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Mecânica em Geral',
      desc: 'Revisão completa de motor, freios, embreagem e câmbio para garantir sua segurança nas ruas.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Suspensão e Injeção',
      desc: 'Alinhamento, amortecedores, diagnóstico por scanner e correção de falhas eletrônicas no painel.',
    },
    {
      icon: <Droplets size={24} />,
      title: 'Troca de Óleo',
      desc: 'Substituição rápida de óleo do motor e filtros recomendados de acordo com a fabricante.',
    }
  ]

  return (
    <section className="py-20 bg-gradient-carbon-surface bg-industrial-grid border-t border-[var(--border)] overflow-hidden" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal variant="up">
          <SectionHeading
            eyebrow="O Que Fazemos"
            title="Especialistas em Deixar Seu Veículo"
            titleHighlight="Novo"
            subtitle="Cuidamos de toda a estética, funilaria e manutenção mecânica do seu carro com processos modernos e claros."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} variant="scale" delay={index * 60}>
              <HoverGlow color="solar" intensity="subtle" className="h-full">
                <Card 
                  variant="service" 
                  className="h-full flex flex-col justify-between"
                  onClick={() => window.location.href = `/servicos#service-${index}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(255,107,53,0.1)] text-[var(--solar)]">
                        {service.icon}
                      </div>
                      {service.badge && (
                        <Badge variant="amber" className="text-[9px]">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-lg tracking-[-0.01em] text-[var(--text)] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--solar)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                    Saber mais <ArrowRight size={12} />
                  </div>
                </Card>
              </HoverGlow>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
