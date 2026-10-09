import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, wheelMultiplier: 1 }}>
      <App />
    </ReactLenis>
  </StrictMode>,
)
