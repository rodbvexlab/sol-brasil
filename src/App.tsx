import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Servicos } from './pages/Servicos'
import { Galeria } from './pages/Galeria'
import { Sobre } from './pages/Sobre'
import { Contato } from './pages/Contato'
import { Showcase } from './pages/Showcase'

/**
 * App — roteamento principal.
 * Configura todas as páginas reais do produto e a rota oculta /dev/showcase.
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/antes-depois" element={<Galeria />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        {/* Showcase de Validação de Componentes (Oculto) */}
        <Route path="/dev/showcase" element={<Showcase />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
