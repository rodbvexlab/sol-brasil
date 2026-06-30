import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

const WA_NUMBER = '5511940229798'
const WA_MSG    = encodeURIComponent('Olá! Vi o site da Sol Brasil e quero um orçamento.')
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

interface NavbarProps {
  logoText?: string
}

/**
 * Navbar — sticky, com CTA WhatsApp sempre visível.
 *
 * Mobile-first behavior:
 * - Logo + botão WhatsApp compacto (ícone) + hamburger
 * - Ao scroll > 20px: glass activado (backdrop-filter)
 * - Menu mobile: overlay fullscreen com links e CTA
 * - Utiliza Link do react-router-dom para SPA routing sem reload
 *
 * Acessibilidade:
 * - aria-expanded no botão do menu
 * - aria-label descritivos
 * - ESC fecha o menu
 */
export const Navbar: React.FC<NavbarProps> = ({ logoText = 'Sol Brasil' }) => {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Serviços',        to: '/servicos' },
    { label: 'Antes & Depois',  to: '/antes-depois' },
    { label: 'Sobre Nós',       to: '/sobre' },
    { label: 'Contato',         to: '/contato' },
  ]

  return (
    <>
      <header
        role="banner"
        className={[
          'fixed inset-x-0 top-0 z-50',
          'transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled || menuOpen
            ? 'glass border-b border-[var(--border)] py-3'
            : 'bg-transparent border-b border-transparent py-4',
        ].join(' ')}
      >
        <nav
          aria-label="Navegação principal"
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Sol Brasil — Voltar ao início"
            className="focus-ring flex items-center gap-2.5 shrink-0"
          >
            {/* Sol — ícone SVG inline minimalista */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="7" fill="url(#sun-gradient)" />
              {/* Raios */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <line
                  key={i}
                  x1="16"
                  y1="16"
                  x2={16 + 14 * Math.cos((deg * Math.PI) / 180)}
                  y2={16 + 14 * Math.sin((deg * Math.PI) / 180)}
                  stroke="url(#ray-gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(0, 16, 16)`}
                  strokeDasharray="3 4"
                />
              ))}
              <defs>
                <radialGradient id="sun-gradient" cx="50%" cy="30%">
                  <stop offset="0%"   stopColor="#F2A93B" />
                  <stop offset="100%" stopColor="#FF6B35" />
                </radialGradient>
                <linearGradient id="ray-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#FF6B35" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F2A93B" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl tracking-[-0.02em] text-[var(--text)]">
              {logoText}
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={[
                    'focus-ring px-4 py-2 rounded-[var(--radius-sm)]',
                    'text-sm font-medium text-[var(--text-muted)]',
                    'transition-colors duration-[200ms]',
                    'hover:text-[var(--text)] hover:bg-[rgba(255,255,255,0.04)]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Ações direita */}
          <div className="flex items-center gap-2">
            {/* CTA WhatsApp — ícone em mobile, texto em desktop */}
            <Button
              as="a"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              aria-label="Chamar no WhatsApp"
              className="gap-2"
            >
              {/* Ícone WhatsApp SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Hamburger — só mobile */}
            <button
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={[
                'focus-ring md:hidden',
                'flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)]',
                'text-[var(--text-muted)] hover:text-[var(--text)]',
                'hover:bg-[rgba(255,255,255,0.05)]',
                'transition-colors duration-[200ms]',
              ].join(' ')}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile — overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={[
          'fixed inset-0 z-40 md:hidden',
          'transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--carbon)]/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Conteúdo do menu */}
        <nav
          aria-label="Menu mobile"
          className={[
            'absolute inset-x-0 top-[64px] bottom-0',
            'flex flex-col justify-between px-6 py-8',
            'transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
            menuOpen ? 'translate-y-0' : '-translate-y-4',
          ].join(' ')}
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                className={[
                  'transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                  menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
                ].join(' ')}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'focus-ring flex items-center py-4 px-2',
                    'font-[family-name:var(--font-display)] font-extrabold',
                    'text-4xl tracking-[-0.02em] text-[var(--text)]',
                    'border-b border-[var(--border)]',
                    'hover:text-[var(--solar)] transition-colors duration-[200ms]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA no rodapé do menu mobile */}
          <div
            className={[
              'transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '200ms' : '0ms' }}
          >
            <Button
              as="a"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              fullWidthMobile
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={18} aria-hidden="true" />
              Chamar no WhatsApp
            </Button>
            <p className="mt-3 text-center text-[var(--text-faint)] text-xs">
              (11) 94022-9798
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
