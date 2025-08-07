import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './app0805-1';
// import App from './App0805-2';
// import App from './pages/App0806-1';
import App from './pages/App0806-2';
// import App from './pages/App0806-3';



createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <App />
  </StrictMode>,
)
