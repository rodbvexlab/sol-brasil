import React, { useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/motion/ScrollReveal'
import { HoverGlow } from '../components/motion/HoverGlow'
import { Shield, Sparkles, Clock, Compass } from 'lucide-react'

export const Sobre: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Transparência Total',
      desc: 'Mostramos exatamente o que precisa ser feito no seu veículo, sem orçamentos inflados ou serviços desnecessários.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Acabamento Premium',
      desc: 'Usamos materiais e tintas de alta qualidade para garantir que a cor e a textura fiquem idênticas às originais.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Prazo Cumprido',
      desc: 'Entendemos que ficar sem carro é um problema. Por isso, cumprimos rigorosamente o prazo de entrega prometido.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Leva e Traz Grátis',
      desc: 'Buscamos e entregamos seu veículo em São Paulo com seguro total ativo, sem dor de cabeça ou perda de tempo.'
    }
  ]

  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />

      <main className="min-h-screen bg-[var(--carbon)] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <ScrollReveal variant="up" className="text-center mb-16">
            <Badge variant="solar" dot className="mb-4">
              Nossa História
            </Badge>
            <SectionHeading
              title="Sobre a Sol Brasil"
              titleHighlight="Sobre"
              subtitle="Uma oficina focada em resolver os problemas do seu carro com qualidade premium, honestidade e praticidade."
              align="center"
              showLine
            />
          </ScrollReveal>

          {/* Posicionamento & Valores */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <ScrollReveal variant="left">
                <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl text-[var(--text)] tracking-tight">
                  Sem Enrolação. Do Orçamento ao Prazo de Entrega.
                </h2>
              </ScrollReveal>
              
              <ScrollReveal variant="fade" delay={80}>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  A Funilaria Sol Brasil nasceu com uma missão clara: combater a desconfiança que muitos proprietários têm ao deixar o carro em uma oficina. Acreditamos que a honestidade e a clareza no orçamento são tão importantes quanto o alinhamento da lataria ou a qualidade do verniz.
                </p>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mt-4">
                  Trabalhamos com profissionais experientes em funilaria artesanal (martelinho de ouro), reparos rápidos de parachoques e pintura automotiva de alto padrão. Cuidamos do seu veículo usando o que há de melhor em tecnologia e insumos automotivos, respeitando as curvas e o design original de cada fabricante.
                </p>
              </ScrollReveal>
            </div>

            {/* Destaque Diferencial */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal variant="scale" delay={120}>
                <div className="absolute -inset-2 rounded-[var(--radius-xl)] bg-gradient-to-tr from-[var(--solar)] to-[var(--amber)] opacity-5 blur-lg" aria-hidden="true" />
                <Card variant="testimonial" className="p-6 md:p-8 bg-[var(--surface)] border border-[var(--border)]">
                  <span className="font-[family-name:var(--font-util)] text-[10px] font-semibold uppercase tracking-wider text-[var(--solar)] mb-2 block">
                    Nosso Compromisso
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[var(--text)] mb-3">
                    Satisfação & Qualidade Garantida
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">
                    Não fazemos apenas reparos automotivos, devolvemos a tranquilidade e a alegria de ter o carro impecável na garagem de novo. Cada veículo passa por uma inspeção de controle de qualidade rigorosa antes da liberação.
                  </p>
                  <div className="border-t border-[var(--border)] pt-4 flex gap-4 text-xs font-semibold text-[var(--text)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                    <div>100% Satisfeito</div>
                    <div className="text-[var(--solar)]">OU REFAZEMOS</div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Grid de diferenciais */}
          <div>
            <ScrollReveal variant="up" className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[var(--text)] tracking-tight">
                Nossos Diferenciais Operacionais
              </h2>
              <p className="text-[var(--text-muted)] text-sm mt-2 max-w-xl mx-auto">
                Facilitamos todo o processo para que você não precise alterar sua rotina diária ao cuidar do seu carro.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} variant="scale" delay={i * 60}>
                  <HoverGlow color="solar" intensity="subtle" className="h-full">
                    <Card variant="default" className="h-full p-6 bg-[var(--surface-2)] flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(255,107,53,0.1)] text-[var(--solar)]">
                        {f.icon}
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--text)] mb-2">
                          {f.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </Card>
                  </HoverGlow>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
