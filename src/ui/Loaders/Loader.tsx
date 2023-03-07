import React from 'react'
import { useTheme } from '../../hooks/useTheme'

export function Loader() {
  const { isDark } = useTheme()

  return <div className={`loader ${!!isDark && 'dark'}`}></div>
}
