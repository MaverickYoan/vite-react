import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './wink.tsx'
import './wink.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <wink />
    </StrictMode>,
)
