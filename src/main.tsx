import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyle.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <App />
      <GlobalStyle />
  </BrowserRouter>
)
