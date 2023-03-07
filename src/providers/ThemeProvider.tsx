import { createContext, Dispatch, ReactElement, SetStateAction, useMemo, useState } from 'react'

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IContext {
  isDark: boolean
  setIsDark?: TypeSetState<boolean>
}

function getThemeScheme() {
  const defaultTheme = localStorage.getItem('themeIsDark')
  if (defaultTheme === null) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    return matches
  }
  return defaultTheme === 'true' ? true : false
}
export const ThemeContext = createContext<IContext>({ isDark: getThemeScheme() })

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [isDark, setIsDark] = useState(getThemeScheme())
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
