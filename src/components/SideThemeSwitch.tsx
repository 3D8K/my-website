import React from 'react'
import { useTheme } from '@hooks/index'

export const SideThemeSwitch = () => {
  const { isDark, setIsDark } = useTheme()

  const setLightHandler = () => {
    !!setIsDark &&
      (() => {
        localStorage.setItem('themeIsDark', `${!isDark}`)
        setIsDark(false)
      })()
  }

  const setDarkHandler = () => {
    !!setIsDark &&
      (() => {
        localStorage.setItem('themeIsDark', `${!isDark}`)
        setIsDark(true)
      })()
  }

  return (
    <div className='side-theme-switch'>
      <div
        className={`side-theme-switch__light-wrapper ${isDark ? 'dark' : ''}`}
        onClick={setLightHandler}
      >
        <div className='side-theme-switch__marker'>
          <div className={`side-theme-switch__current ${!isDark ? 'active' : ''}`}></div>
        </div>
        <p className='side-theme-switch__label'>light</p>
      </div>
      <div
        className={`side-theme-switch__dark-wrapper ${isDark ? 'dark' : ''}`}
        onClick={setDarkHandler}
      >
        <div className='side-theme-switch__marker'>
          <div className={`side-theme-switch__current ${isDark ? 'active' : ''}`}></div>
        </div>
        <p className='side-theme-switch__label'>dark</p>
      </div>
    </div>
  )
}
