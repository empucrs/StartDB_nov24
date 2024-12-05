import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.tsx'

import PaginaInicial from './components/atomic/PaginaInicial';
import PaginaSobre from './components/atomic/PaginaSobre';
import PaginaNaoEcontrado from './components/atomic/PaginaNaoEncontrado';
import PaginaUsuarios from './components/atomic/PaginaUsuarios.tsx'
import PaginaDetalhamentoUsuario from './components/atomic/PaginaDetalhamentoUsuario.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PaginaInicial />} />
          <Route path="sobre" element={<PaginaSobre />} />
          <Route path="usuarios" element={<PaginaUsuarios />}>
            <Route path=':userID' element={<PaginaDetalhamentoUsuario />} />
          </Route>
        </Route>
        <Route path="*" element={<PaginaNaoEcontrado />} />
      </Routes>
    </BrowserRouter>
    
    
  </StrictMode>,
)
