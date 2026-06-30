import React from 'react'
import { Star, CheckCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../motion/ScrollReveal'

interface Testimonial {
  name: string
  service: string
  text: string
  rating: number
}

export const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Rodrigo M.',
      service: 'Funilaria e Pintura',
      text: 'Bati o carro na garagem e achei que ia custar uma fortuna. O pessoal da Sol Brasil alinhou perfeitamente e a pintura ficou impecável, na cor exata. Atendimento muito honesto.',
      rating: 5
    },
    {
      name: 'Camila T.',
      service: 'Martelinho de Ouro',
      text: 'Alguém amassou a porta do meu carro no shopping e saiu sem deixar contato. Fui na oficina e eles resolveram com martelinho de ouro super rápido. Nem parece que foi amassado.',
      rating: 5
    },
    {
      name: 'Eduardo S.',
      service: 'Sistema Leva e Traz',
      text: 'Utilizei o sistema Leva e Traz da oficina. Buscaram o meu carro na minha empresa de manhã e devolveram à tarde, lavado e com o serviço pronto. Praticidade nota 10 para quem não tem tempo a perder.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-[var(--carbon)] border-t border-[var(--border)]" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal variant="up">
          <SectionHeading
            eyebrow="Quem Confia em Nós"
            title="Opinião de Quem Já"
            titleHighlight="Aprovou"
            subtitle="Veja o que dizem os clientes que trouxeram seus carros para a nossa oficina."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} variant="up" delay={index * 80}>
              <Card variant="testimonial" className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1" aria-label={`${t.rating} estrelas`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[var(--amber)] fill-[var(--amber)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Feedback text */}
                  <p className="text-[var(--text)] text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 mt-6">
                  <div>
                    <p className="text-[var(--text)] text-sm font-semibold">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{t.service}</p>
                  </div>
                  <CheckCircle size={18} className="text-[var(--amber)]" aria-hidden="true" />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
