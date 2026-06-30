import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/motion/ScrollReveal'
import { Image as ImageIcon, Phone } from 'lucide-react'

interface GalleryItem {
  id: string
  title: string
  category: string
  beforeBg: string
  afterBg: string
  beforeDesc: string
  afterDesc: string
}

export const Galeria: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: 'todos', label: 'Todos os Casos' },
    { id: 'funilaria', label: 'Funilaria & Pintura' },
    { id: 'martelinho', label: 'Martelinho de Ouro' },
    { id: 'polimento', label: 'Polimento & Cristalização' },
    { id: 'parachoques', label: 'Recuperação de Parachoques' }
  ]

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Paralama Traseiro e Porta — Honda Civic',
      category: 'funilaria',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #2c3540 0%, #161c24 100%)',
      beforeDesc: 'Impacto lateral, deformação acentuada do vinco original.',
      afterDesc: 'Alinhamento mecânico, funilaria artesanal e pintura original.'
    },
    {
      id: 'g-2',
      title: 'Amassado na Porta — Toyota Corolla',
      category: 'martelinho',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #40352c 0%, #201a15 100%)',
      beforeDesc: 'Amassado sem quebra de tinta provocado por outro veículo.',
      afterDesc: 'Resolução em 3 horas utilizando ferramentas de martelinho de ouro.'
    },
    {
      id: 'g-3',
      title: 'Parachoques Trincado — Jeep Compass',
      category: 'parachoques',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #262e26 0%, #121812 100%)',
      beforeDesc: 'Para-choque dianteiro trincado no encaixe do farol de milha.',
      afterDesc: 'Solda plástica e pintura localizada. Encaixe original perfeito.'
    },
    {
      id: 'g-4',
      title: 'Paralama Dianteiro e Capô — Chevrolet Onix',
      category: 'funilaria',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #202b36 0%, #0d1318 100%)',
      beforeDesc: 'Colisão com danos significativos no paralama e parte do capô.',
      afterDesc: 'Substituição do paralama, funilaria no capô e pintura combinada.'
    },
    {
      id: 'g-5',
      title: 'Recuperação de Brilho — Hyundai HB20',
      category: 'polimento',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #38312e 0%, #1e1a18 100%)',
      beforeDesc: 'Pintura queimada de sol, marcas de lavagem e opacidade geral.',
      afterDesc: 'Polimento em 3 etapas e aplicação de selante de alta proteção.'
    },
    {
      id: 'g-6',
      title: 'Teto Amassado (Granizo) — Volkswagen Polo',
      category: 'martelinho',
      beforeBg: 'linear-gradient(135deg, #1f1f23 0%, #151518 100%)',
      afterBg: 'linear-gradient(135deg, #2d2d35 0%, #16161a 100%)',
      beforeDesc: 'Múltiplos pequenos amassados na folha do teto causados por granizo.',
      afterDesc: 'Recuperação completa sem alterar a estrutura interna ou teto solar.'
    }
  ]

  const filteredItems = selectedCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const WA_NUMBER = '5511940229798'
  const WA_MSG = encodeURIComponent('Olá! Quero um orçamento de funilaria/pintura baseado na galeria de antes e depois.')
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />

      <main className="min-h-screen bg-[var(--carbon)] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <ScrollReveal variant="up" className="text-center mb-10">
            <Badge variant="solar" dot className="mb-4">
              Antes & Depois
            </Badge>
            <SectionHeading
              title="Galeria de Resultados"
              titleHighlight="Resultados"
              subtitle="Confira a qualidade técnica do nosso trabalho em imagens comparativas de antes e depois."
              align="center"
              showLine
            />
          </ScrollReveal>

          {/* Filtros horizontais com scroll em mobile */}
          <ScrollReveal variant="fade" delay={100} className="mb-12">
            <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none justify-start md:justify-center -mx-4 px-4 md:mx-0 md:px-0">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={[
                    'focus-ring shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider',
                    'font-[family-name:var(--font-util)] transition-all duration-[200ms]',
                    selectedCategory === c.id
                      ? 'bg-[var(--solar)] text-white border border-[var(--solar)] shadow-[0_4px_12px_rgba(255,107,53,0.2)]'
                      : 'bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[rgba(255,107,53,0.25)] hover:text-[var(--text)]'
                  ].join(' ')}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid de Casos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} variant="scale" delay={index * 50}>
                <Card variant="before-after" className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
                  
                  {/* Comparações */}
                  <div className="grid grid-cols-2 h-44 border-b border-[var(--border)] relative">
                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[var(--border)] z-20" aria-hidden="true" />
                    
                    {/* ANTES */}
                    <div className="relative flex flex-col justify-between p-3.5" style={{ background: item.beforeBg }}>
                      <Badge variant="muted" className="self-start text-[8px] bg-red-950/20 text-red-400 border-red-900/30">
                        Antes
                      </Badge>
                      <div className="text-center py-2 text-[var(--text-faint)] flex flex-col items-center justify-center gap-1">
                        <ImageIcon size={22} className="opacity-40" />
                        <span className="text-[9px] uppercase font-semibold tracking-wider font-[family-name:var(--font-util)]">Danificado</span>
                      </div>
                    </div>

                    {/* DEPOIS */}
                    <div className="relative flex flex-col justify-between p-3.5" style={{ background: item.afterBg }}>
                      <Badge variant="solar" className="self-start text-[8px] bg-green-950/20 text-green-400 border-green-900/30">
                        Depois
                      </Badge>
                      <div className="text-center py-2 text-[var(--solar)] flex flex-col items-center justify-center gap-1">
                        <ImageIcon size={22} className="opacity-80" />
                        <span className="text-[9px] uppercase font-semibold tracking-wider font-[family-name:var(--font-util)]">Restaurado</span>
                      </div>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                    <div>
                      <span className="font-[family-name:var(--font-util)] text-[9px] font-semibold uppercase tracking-wider text-[var(--amber)]">
                        {categories.find(c => c.id === item.category)?.label || item.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-base text-[var(--text)] mt-1 mb-2 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[11px] border-t border-[var(--border)] pt-3">
                      <div>
                        <p className="text-[var(--text-faint)] uppercase font-semibold tracking-wider mb-1 font-[family-name:var(--font-util)]">Dano</p>
                        <p className="text-[var(--text-muted)] leading-relaxed">{item.beforeDesc}</p>
                      </div>
                      <div>
                        <p className="text-[var(--solar)] uppercase font-semibold tracking-wider mb-1 font-[family-name:var(--font-util)]">Reparo</p>
                        <p className="text-[var(--text)] leading-relaxed">{item.afterDesc}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state caso a filtragem não encontre nada */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] mt-6">
              <ImageIcon size={40} className="mx-auto text-[var(--text-faint)] mb-3" />
              <p className="text-[var(--text-muted)] text-sm">Nenhum caso encontrado para essa categoria ainda.</p>
            </div>
          )}

          {/* Call to action de rodapé de galeria */}
          <ScrollReveal variant="up" className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl text-[var(--text)] mb-4">
              Quer Seu Carro Perfeito Assim Também?
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Mande foto do seu veículo pelo WhatsApp para darmos uma primeira avaliação sem compromisso sobre o reparo.
            </p>
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
              Pedir Orçamento Agora
            </Button>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  )
}
