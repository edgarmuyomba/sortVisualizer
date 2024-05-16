import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.scss'

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} 
