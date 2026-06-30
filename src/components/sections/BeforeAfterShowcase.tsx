import React from 'react'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../motion/ScrollReveal'

interface ShowcaseItem {
  id: string
  title: string
  category: string
  // Usamos SVG placeholders com cores customizadas para simular carro real batido e recuperado
  beforeBg: string
  afterBg: string
  beforeText: string
  afterText: string
}

export const BeforeAfterShowcase: React.FC = () => {
  const cases: ShowcaseItem[] = [
    {
      id: 'case-1',
      title: 'Porta Lateral e Paralama — Honda Civic',
      category: 'Funilaria e Pintura',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #2c3540 0%, #161c24 100%)',
      beforeText: 'Colisão profunda, lataria deformada e tinta descascada.',
      afterText: 'Lataria alinhada a laser e pintura idêntica à de fábrica.'
    },
    {
      id: 'case-2',
      title: 'Amassado na Tampa Traseira — Toyota Corolla',
      category: 'Martelinho de Ouro',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #40352c 0%, #201a15 100%)',
      beforeText: 'Amassado de estacionamento (sem vinco na chapa).',
      afterText: 'Recuperado 100% sem repintura em apenas 3 horas.'
    },
    {
      id: 'case-3',
      title: 'Parachoques Dianteiro Trincado — Jeep Compass',
      category: 'Recuperação de Parachoques',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #262e26 0%, #121812 100%)',
      beforeText: 'Trinca estrutural de 15cm e ralados profundos.',
      afterText: 'Soldagem plástica, pintura localizada e fixação refeita.'
    }
  ]

  return (
    <section className="py-20 bg-[var(--carbon)] border-t border-[var(--border)]" id="antes-depois">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal variant="left" className="md:max-w-2xl">
            <SectionHeading
              eyebrow="Portfólio de Resultados"
              title="A Prova do Nosso Acabamento"
              titleHighlight="Acabamento"
              subtitle="Veja casos reais de carros danificados que recuperamos integralmente na oficina. Resultados sem retoques artificiais."
              align="left"
              showLine
            />
          </ScrollReveal>

          <ScrollReveal variant="fade" className="shrink-0">
            <Button
              as="a"
              href="/antes-depois"
              variant="secondary"
              rightIcon={<ArrowRight size={16} />}
            >
              Galeria Completa
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={c.id} variant="up" delay={i * 80}>
              <Card variant="before-after" className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
                {/* Imagens comparativas side-by-side */}
                <div className="grid grid-cols-2 h-48 border-b border-[var(--border)] relative">
                  {/* Divisória visual central */}
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[var(--border)] z-20" aria-hidden="true" />
                  
                  {/* ANTES */}
                  <div 
                    className="relative flex flex-col justify-between p-4"
                    style={{ background: c.beforeBg }}
                  >
                    <Badge variant="muted" className="self-start text-[9px] bg-red-950/20 text-red-400 border-red-900/30">
                      Antes
                    </Badge>
                    <div className="text-center py-4 text-[var(--text-faint)] flex flex-col items-center justify-center gap-1">
                      <ImageIcon size={28} className="opacity-40" />
                      <span className="text-[10px] uppercase font-semibold tracking-wider font-[family-name:var(--font-util)]">Danificado</span>
                    </div>
                  </div>

                  {/* DEPOIS */}
                  <div 
                    className="relative flex flex-col justify-between p-4"
                    style={{ background: c.afterBg }}
                  >
                    <Badge variant="solar" className="self-start text-[9px] bg-green-950/20 text-green-400 border-green-900/30">
                      Depois
                    </Badge>
                    <div className="text-center py-4 text-[var(--solar)] flex flex-col items-center justify-center gap-1">
                      <ImageIcon size={28} className="opacity-80" />
                      <span className="text-[10px] uppercase font-semibold tracking-wider font-[family-name:var(--font-util)]">Restaurado</span>
                    </div>
                  </div>
                </div>

                {/* Descrições e Título */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <span className="font-[family-name:var(--font-util)] text-[10px] font-semibold uppercase tracking-wider text-[var(--amber)]">
                      {c.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--text)] tracking-tight mt-1 mb-3">
                      {c.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs border-t border-[var(--border)] pt-3">
                    <div>
                      <p className="text-[var(--text-faint)] uppercase font-semibold tracking-wider mb-1 font-[family-name:var(--font-util)]">Problema</p>
                      <p className="text-[var(--text-muted)] leading-relaxed">{c.beforeText}</p>
                    </div>
                    <div>
                      <p className="text-[var(--solar)] uppercase font-semibold tracking-wider mb-1 font-[family-name:var(--font-util)]">Solução</p>
                      <p className="text-[var(--text)] leading-relaxed">{c.afterText}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
