import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const WA_NUMBER = '5511940229798'
const WA_MSG    = encodeURIComponent('Olá! Vi o site da Sol Brasil e quero um orçamento.')
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

/**
 * Footer — informações de contato, serviços e links.
 *
 * Mobile-first:
 * - Stack vertical (1 coluna) em mobile
 * - 2 colunas em sm
 * - 4 colunas em lg
 *
 * Utiliza Link do react-router-dom para SPA routing sem reload.
 */
export const Footer: React.FC = () => {
  const services = [
    'Funilaria e Pintura',
    'Martelinho de Ouro',
    'Polimento e Cristalização',
    'Recuperação de Parachoques',
    'Sistema Leva e Traz',
    'Mecânica em Geral',
    'Suspensão e Injeção Eletrônica',
    'Troca de Óleo',
  ]

  return (
    <footer
      role="contentinfo"
      className="relative bg-[var(--surface)] border-t border-[var(--border)]"
    >
      {/* Linha solar no topo do footer */}
      <div
        className="h-[2px] bg-gradient-to-r from-transparent via-[var(--solar)] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Col 1 — Identidade */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-[family-name:var(--font-display)] font-extrabold text-2xl tracking-[-0.02em] text-[var(--text)] focus-ring">
                Sol Brasil
              </Link>
              <Badge variant="amber" dot>
                Aberto agora
              </Badge>
            </div>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Funilaria, pintura e mecânica de quem entende de carro. Cuidando de cada detalhe com transparência e honestidade.
            </p>

            <Button
              as="a"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              fullWidthMobile
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              Pedir orçamento
            </Button>
          </div>

          {/* Col 2 — Serviços */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-util)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--solar)]">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {services.map((s, index) => (
                <li key={s}>
                  <Link
                    to={`/servicos#service-${index}`}
                    className={[
                      'focus-ring text-sm text-[var(--text-muted)]',
                      'hover:text-[var(--text)] transition-colors duration-[200ms]',
                      'flex items-center gap-2',
                    ].join(' ')}
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[var(--border)] shrink-0"
                      aria-hidden="true"
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-util)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--solar)]">
              Contato
            </h3>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-start gap-3 group"
                  aria-label="WhatsApp: 11 94022-9798"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 text-[var(--solar)] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-0.5 font-[family-name:var(--font-util)]">
                      WhatsApp
                    </p>
                    <p className="text-sm text-[var(--text)] group-hover:text-[var(--solar)] transition-colors duration-[200ms]">
                      (11) 94022-9798
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 text-[var(--amber)] shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-0.5 font-[family-name:var(--font-util)]">
                    Localização
                  </p>
                  <p className="text-sm text-[var(--text)]">
                    São Paulo, SP
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="mt-0.5 text-[var(--amber)] shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-0.5 font-[family-name:var(--font-util)]">
                    Horário
                  </p>
                  <p className="text-sm text-[var(--text)]">
                    Seg–Sex: 8h às 18h
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Sáb: 8h às 13h
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 — Redes Sociais */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-util)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--solar)]">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram da Funilaria Sol Brasil"
                className={[
                  'focus-ring flex items-center justify-center',
                  'w-10 h-10 rounded-[var(--radius-sm)]',
                  'bg-[var(--surface-2)] border border-[var(--border)]',
                  'text-[var(--text-muted)] hover:text-[var(--text)]',
                  'hover:border-[rgba(255,107,53,0.3)]',
                  'transition-all duration-[200ms]',
                ].join(' ')}
              >
                {/* Instagram SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook da Funilaria Sol Brasil"
                className={[
                  'focus-ring flex items-center justify-center',
                  'w-10 h-10 rounded-[var(--radius-sm)]',
                  'bg-[var(--surface-2)] border border-[var(--border)]',
                  'text-[var(--text-muted)] hover:text-[var(--text)]',
                  'hover:border-[rgba(255,107,53,0.3)]',
                  'transition-all duration-[200ms]',
                ].join(' ')}
              >
                {/* Facebook SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-faint)] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Funilaria Sol Brasil. Todos os direitos reservados.
          </p>
          <p className="text-[var(--text-faint)] text-xs">
            CNPJ disponível no local
          </p>
        </div>
      </div>
    </footer>
  )
}
