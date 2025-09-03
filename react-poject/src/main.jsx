import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './app0805-1';
// import App from './App0805-2';
// import App from './pages/App0806-1';
// import App from './pages/App0806-2';
// import App from './pages/App0806-3';
// import App from './pages/App0811-weather';
// import App from './pages/App0811-weather2'
// import App from './pages/App0812-weather1'
// import './assets/all.scss'
// import App from './pages/App0813-weather1'
// import App from './MyApp'
// import App from './pages/App0818-1';
// import App from './pages/App0818-2';
// import App from './pages/App0818-3';
// import App from './pages/App0819-1';
// import App from './pages/App0819-2';
// import App from './pages/App0819-3';
// import App from './pages/App0820-1';
// import App from './pages/App0825-localstorage';
// import App from './pages/App0825-localstorage2';
// import App from './pages/App0826-jquery1';
// import App from './pages/App0826-slide';
// import App from './pages/App0826-tooltip';
// import App from './pages/App0902useMemo';
// import App from './pages/App0902b';
// import App from './pages/App0903useRef';
// import App from './pages/App0903useRef-2';
import App from './pages/App0903useRef-4.jsx';















import { HashRouter } from 'react-router-dom'




createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
)
