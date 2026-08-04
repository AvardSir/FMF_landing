import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CmsDataProvider } from './context/CmsDataContext' // добавить

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CmsDataProvider pageId={12}>   {/* обернуть */}
      <App />
    </CmsDataProvider>
  </StrictMode>,
)