import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)[0]
export const useSetTheme = () => useContext(ThemeContext)[1]

export const useToggleTheme = () => {
  const theme = useTheme()
  const setTheme = useSetTheme()
  return () => setTheme(theme === 'light' ? 'dark' : 'light')
}
