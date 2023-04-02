import React from 'react'
import { useTheme } from '@hooks/index'

export const ThemeSwitch = () => {
  const { isDark, setIsDark } = useTheme()
  const themeHandler = () => {
    if (setIsDark) {
      localStorage.setItem('themeIsDark', `${!isDark}`)
      setIsDark(!isDark)
    }
  }

  return (
    !!setIsDark && (
      <label className='switch'>
        <input type='checkbox' defaultChecked={!isDark} onClick={() => themeHandler()} />
        <span className='slider'></span>
      </label>
    )
  )
}
