import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componets/App/App.jsx'
import './index.css'
import { SettingContextProvider } from './context/SettingsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingContextProvider>
    <App />
  </SettingContextProvider>
)
