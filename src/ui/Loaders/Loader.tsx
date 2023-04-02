import React from 'react'
import { useTheme } from '@hooks/index'

export function Loader() {
  const { isDark } = useTheme()

  return <div className={`loader ${isDark ? 'dark' : ''}`}></div>
}
