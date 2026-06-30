import React, { useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/motion/ScrollReveal'
import { HoverGlow } from '../components/motion/HoverGlow'
import { Wrench, Sparkles, Droplets, Shield, Zap, RefreshCw, Layers, Phone } from 'lucide-react'

interface DetailedService {
  icon: React.ReactNode
  title: string
  intro: string
  details: string[]
  badge?: string
}

export const Servicos: React.FC = () => {
  useEffect(() => {
    // Se vier com hash na URL (ex: #service-2), rola até o elemento
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  const services: DetailedService[] = [
    {
      icon: <Wrench size={32} />,
      title: 'Funilaria e Pintura',
      intro: 'Recuperação estética e estrutural de latarias danificadas em colisões de qualquer porte.',
      details: [
        'Reparo de batidas traseiras, laterais e frontais',
        'Pintura em cabina climatizada com filtragem de impurezas',
        'Laboratório de tintas próprio para ajuste exato da cor original',
        'Uso de soldas e materiais homologados pelas fabricantes',
        'Garantia de acabamento contra descascamento e bolhas'
      ],
      badge: 'Principal'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Martelinho de Ouro',
      intro: 'Remoção cirúrgica de amassados que mantém a pintura original intacta.',
      details: [
        'Ideal para batidas leves de trânsito ou amassados de portas em garagens',
        'Preserva 100% o valor de revenda original do veículo',
        'Processo sem necessidade de massa plástica ou repintura',
        'Executado no mesmo dia (reparos rápidos de 1h a 4h)',
        'Eficaz em amassados de granizo ou chuva de pedra'
      ],
      badge: 'Sem Repintura'
    },
    {
      icon: <Droplets size={32} />,
      title: 'Polimento e Cristalização',
      intro: 'Tratamento estético profundo para remover riscos na superfície do verniz e realçar o brilho.',
      details: [
        'Polimento técnico em 3 etapas (corte, refino e lustro)',
        'Remoção de marcas de chuva ácida e contaminações da pintura',
        'Aplicação de cristalizador de alta durabilidade (selagem)',
        'Proteção contra raios solares (UV), seiva de árvore e fezes de aves',
        'Devolve a aparência de carro recém-saído da concessionária'
      ],
      badge: 'Brilho Espelhado'
    },
    {
      icon: <Shield size={32} />,
      title: 'Recuperação de Parachoques',
      intro: 'Soldagem e reparo técnico de para-choques de plástico sem necessidade de troca.',
      details: [
        'Solda plástica interna com inserção de tela de aço de reforço',
        'Alinhamento e eliminação de deformidades causadas por calor ou impacto',
        'Acabamento com massa elástica específica para plástico (não trinca)',
        'Pintura localizada precisa com fusão invisível do verniz',
        'Alternativa econômica e ecológica à compra de uma peça nova'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Sistema Leva e Traz',
      intro: 'Sua oficina de confiança na comodidade do seu lar ou escritório.',
      details: [
        'Buscamos seu carro no local agendado em horário pré-definido',
        'Motoristas profissionais cadastrados e segurados',
        'Seguro total ativo durante todo o trajeto de ida e volta',
        'Checklist fotográfico completo feito no ato da retirada',
        'Entrega com o veículo lavado e pronto para uso'
      ],
      badge: 'Exclusivo'
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Mecânica em Geral',
      intro: 'Manutenção preventiva e corretiva completa dos sistemas mecânicos do veículo.',
      details: [
        'Troca e manutenção de freios (discos, pastilhas e fluído)',
        'Manutenção e diagnóstico do sistema de arrefecimento do motor',
        'Troca de correia dentada, velas de ignição e cabos',
        'Manutenção de embreagem e reparos de câmbio manual',
        'Limpeza técnica de bicos injetores e corpo de borboletas'
      ]
    },
    {
      icon: <Layers size={32} />,
      title: 'Suspensão e Injeção Eletrônica',
      intro: 'Estabilidade nas pistas e diagnóstico de luzes de alerta de injeção no painel.',
      details: [
        'Substituição de amortecedores, molas, buchas, pivôs e bandejas',
        'Diagnóstico computadorizado de injeção eletrônica com scanner OBD2',
        'Leitura e limpeza de códigos de erro na centralina do veículo',
        'Ajuste e reparo de sensores de injeção, ABS e airbag',
        'Alinhamento e balanceamento tridimensional de precisão'
      ]
    },
    {
      icon: <Droplets size={32} />,
      title: 'Troca de Óleo',
      intro: 'Substituição rápida e preventiva dos lubrificantes recomendados para seu veículo.',
      details: [
        'Substituição do óleo do motor conforme especificações (viscosidade/marca)',
        'Troca do filtro de óleo, filtro de ar do motor e filtro de combustível',
        'Higienização e substituição do filtro de cabine (ar-condicionado)',
        'Checklist gratuito de 10 itens de segurança a cada troca',
        'Descarte ecológico e certificado de todos os resíduos retirados'
      ]
    }
  ]

  const getWhatsAppLink = (serviceName: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de fazer um orçamento de *${serviceName}* para o meu veículo.`)
    return `https://wa.me/5511940229798?text=${text}`
  }

  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />

      <main className="min-h-screen bg-[var(--carbon)] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal variant="up" className="text-center mb-16">
            <Badge variant="solar" dot className="mb-4">
              Nossa Oficina
            </Badge>
            <SectionHeading
              title="Serviços Profissionais"
              titleHighlight="Serviços"
              subtitle="Trabalho qualificado do motor ao polimento final. Confira em detalhes tudo o que oferecemos para o seu carro."
              align="center"
              showLine
            />
          </ScrollReveal>

          {/* Grid detalhado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((s, index) => (
              <div key={s.title} id={`service-${index}`}>
                <ScrollReveal variant="scale" delay={index * 40} className="h-full">
                  <HoverGlow color="amber" intensity="subtle" className="h-full">
                    <Card variant="default" className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full bg-[var(--surface)] border border-[var(--border)] relative">
                      <div className="flex flex-col gap-4 md:gap-6">
                        {/* Ícone e título */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-[var(--radius-md)] flex items-center justify-center bg-[rgba(255,107,53,0.08)] text-[var(--solar)] shrink-0 [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-8 md:[&_svg]:h-8">
                              {s.icon}
                            </div>
                            <div>
                              {s.badge && (
                                <Badge variant="solar" className="mb-0.5 text-[8px] md:text-[9px]">
                                  {s.badge}
                                </Badge>
                              )}
                              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-xl md:text-2xl tracking-tight text-[var(--text)]">
                                {s.title}
                              </h2>
                            </div>
                          </div>
                        </div>

                        {/* Intro */}
                        <p className="text-[var(--text-muted)] text-xs md:text-sm leading-relaxed border-b border-[var(--border)] pb-3 md:pb-4 line-clamp-2 md:line-clamp-none">
                          {s.intro}
                        </p>

                        {/* Detalhes do processo - oculto no mobile */}
                        <div className="hidden md:block">
                          <p className="text-[var(--text)] text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-util)] mb-3">
                            O que inclui o serviço:
                          </p>
                          <ul className="space-y-2 list-none p-0 m-0">
                            {s.details.map((detail, dIndex) => (
                              <li key={dIndex} className="text-xs text-[var(--text-muted)] flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--solar)] mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* WhatsApp contextualizado */}
                      <div className="mt-4 md:mt-8 border-t border-[var(--border)] pt-4 md:pt-5">
                        <Button
                          as="a"
                          href={getWhatsAppLink(s.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="whatsapp"
                          size="md"
                          fullWidthMobile
                          leftIcon={<Phone size={16} />}
                        >
                          Orçamento de {s.title}
                        </Button>
                      </div>
                    </Card>
                  </HoverGlow>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
