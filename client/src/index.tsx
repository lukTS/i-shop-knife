import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './styles/_variables.scss'
import './styles/_global.scss'

const rootElement = document.getElementById('root')
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <GoogleOAuthProvider clientId = {clientId}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  )
} else {
  console.error('Element with id "root" not found.')
}
