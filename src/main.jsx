import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import { applyTheme } from './redux/slices/themeSlice'
import './index.css'

// Apply theme immediately
const theme = localStorage.getItem('theme')
if (theme === 'dark') {
  document.documentElement.classList.add('dark')
} else if (theme === 'light') {
  document.documentElement.classList.remove('dark')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
