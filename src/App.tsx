import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Showcase } from './pages/Showcase'

/**
 * App — roteamento principal.
 * Por ora, apenas a rota de Showcase.
 * Home e demais páginas serão adicionadas nos próximos prompts.
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Showcase temporário — substituir por Home no Prompt 02 */}
        <Route path="/" element={<Showcase />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
