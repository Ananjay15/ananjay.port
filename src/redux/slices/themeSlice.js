import { createSlice } from '@reduxjs/toolkit'

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const initialState = {
  isDarkMode: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', state.isDarkMode)
    },
    applyTheme(state) {
      document.documentElement.classList.toggle('dark', state.isDarkMode)
    },
  },
})

export const { toggleTheme, applyTheme } = themeSlice.actions
export default themeSlice.reducer
