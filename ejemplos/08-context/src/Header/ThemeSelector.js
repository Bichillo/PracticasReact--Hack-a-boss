import { useTheme, useToggleTheme } from "../ThemeContext"

function ThemeSelector() {
  const theme = useTheme()
  const toggleTheme = useToggleTheme()

  return (
    <span className="theme-selector" onClick={() => toggleTheme()}>
      {theme === 'light' ? '☀️' : '🌙'}
    </span>
  )
}

export default ThemeSelector
