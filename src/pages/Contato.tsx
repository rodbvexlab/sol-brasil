import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/motion/ScrollReveal'
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const WA_NUMBER = '5511940229798'
const WA_MSG = encodeURIComponent('Olá! Quero um orçamento de funilaria/pintura.')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

export const Contato: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: '',
    servico: 'funilaria'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simula envio de contato
    setFormSubmitted(true)
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
              Fale Conosco
            </Badge>
            <SectionHeading
              title="Canais de Atendimento"
              titleHighlight="Atendimento"
              subtitle="Entre em contato com nossa equipe. A forma mais rápida de receber seu orçamento é pelo WhatsApp."
              align="center"
              showLine
            />
          </ScrollReveal>

          {/* Grid Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Coluna 1: Informações e CTA Principal WhatsApp (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* WhatsApp Box */}
              <ScrollReveal variant="left">
                <Card variant="testimonial" className="p-6 md:p-8 bg-[rgba(37,211,102,0.06)] border border-[#25D366]/20">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <Badge variant="solar" className="text-[9px] bg-[#25D366]/15 text-[#25D366] border-[#25D366]/25">
                        Canal Mais Rápido
                      </Badge>
                      <h3 className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[var(--text)]">
                        WhatsApp Oficina
                      </h3>
                    </div>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                    Mande fotos ou vídeo do estrago do seu carro pelo WhatsApp. Nossa equipe avalia a extensão do dano e responde com um pré-orçamento.
                  </p>
                  <Button
                    as="a"
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="lg"
                    fullWidthMobile
                    leftIcon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                      </svg>
                    }
                  >
                    (11) 94022-9798
                  </Button>
                </Card>
              </ScrollReveal>

              {/* Informações Físicas */}
              <ScrollReveal variant="fade" delay={100}>
                <Card variant="default" className="p-6 bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-6">
                  
                  {/* Endereço */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(242,169,59,0.08)] text-[var(--amber)] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[var(--text-muted)] text-[10px] font-semibold uppercase tracking-wider font-[family-name:var(--font-util)] mb-0.5">Endereço</p>
                      <p className="text-sm text-[var(--text)]">São Paulo, SP</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">Atendimento Leva e Traz em toda a Capital</p>
                    </div>
                  </div>

                  {/* Horários */}
                  <div className="flex gap-4 border-t border-[var(--border)] pt-4">
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[rgba(242,169,59,0.08)] text-[var(--amber)] shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[var(--text-muted)] text-[10px] font-semibold uppercase tracking-wider font-[family-name:var(--font-util)] mb-0.5">Horário de Funcionamento</p>
                      <p className="text-sm text-[var(--text)]">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-sm text-[var(--text)]">Sábado: 8h às 13h</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* Coluna 2: Formulário de Contato Secundário (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="scale" delay={150}>
                <Card variant="default" className="p-6 md:p-8 bg-[var(--surface)] border border-[var(--border)]">
                  <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--text)] mb-2">
                    Deixe Sua Mensagem
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mb-6">
                    Prefere e-mail? Preencha o formulário abaixo e entraremos em contato.
                  </p>

                  {formSubmitted ? (
                    <div className="py-10 text-center flex flex-col items-center justify-center gap-3">
                      <CheckCircle2 size={44} className="text-[var(--amber)]" />
                      <h4 className="font-[family-name:var(--font-display)] font-bold text-xl text-[var(--text)]">
                        Mensagem Enviada!
                      </h4>
                      <p className="text-[var(--text-muted)] text-xs max-w-xs leading-relaxed">
                        Agradecemos o contato. Nossa equipe retornará seu contato o mais breve possível.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Grid nome + tel */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="nome" className="text-xs font-semibold text-[var(--text-muted)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            id="nome"
                            required
                            placeholder="Ex: Carlos Silva"
                            className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-sm)] p-3 text-sm text-[var(--text)] focus:border-[var(--solar)] focus:outline-none transition-all placeholder:text-[var(--text-faint)] focus-ring"
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="telefone" className="text-xs font-semibold text-[var(--text-muted)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                            Telefone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="telefone"
                            required
                            placeholder="Ex: (11) 99999-9999"
                            className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-sm)] p-3 text-sm text-[var(--text)] focus:border-[var(--solar)] focus:outline-none transition-all placeholder:text-[var(--text-faint)] focus-ring"
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Serviço */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="servico" className="text-xs font-semibold text-[var(--text-muted)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                          Serviço de Interesse
                        </label>
                        <select
                          id="servico"
                          className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-sm)] p-3 text-sm text-[var(--text)] focus:border-[var(--solar)] focus:outline-none transition-all focus-ring"
                          value={formData.servico}
                          onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                        >
                          <option value="funilaria">Funilaria e Pintura</option>
                          <option value="martelinho">Martelinho de Ouro</option>
                          <option value="polimento">Polimento e Cristalização</option>
                          <option value="parachoques">Recuperação de Parachoques</option>
                          <option value="mecanica">Mecânica / Outros</option>
                        </select>
                      </div>

                      {/* Mensagem */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="mensagem" className="text-xs font-semibold text-[var(--text-muted)] font-[family-name:var(--font-util)] uppercase tracking-wider">
                          Descrição do Problema (Opcional)
                        </label>
                        <textarea
                          id="mensagem"
                          rows={4}
                          placeholder="Fale brevemente sobre o estado do seu veículo..."
                          className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-sm)] p-3 text-sm text-[var(--text)] focus:border-[var(--solar)] focus:outline-none transition-all placeholder:text-[var(--text-faint)] focus-ring resize-none"
                          value={formData.mensagem}
                          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        />
                      </div>

                      {/* Botão Enviar */}
                      <Button
                        type="submit"
                        variant="primary-solar"
                        size="md"
                        fullWidthMobile
                        leftIcon={<Send size={16} />}
                        className="mt-2"
                      >
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </Card>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
