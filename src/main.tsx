import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserStorage } from './context/UserContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { GlobalStyle } from './styles/globalStyles.ts'
import { Theme } from './styles/Theme.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserStorage>
    <AuthProvider>
      <Theme>
        <BrowserRouter>
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </Theme>
    </AuthProvider>
    </UserStorage>
  </React.StrictMode>,
)
