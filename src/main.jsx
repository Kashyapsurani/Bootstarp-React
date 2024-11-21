import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import '../node_modules/swiper/swiper-bundle.min.js'; // Ensure the correct CSS import
// Correct way to import Swiper styles
import 'swiper/swiper-bundle.css'; // For Swiper v10 and below


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
