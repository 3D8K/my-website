import React, { ReactElement } from 'react'
import { useTheme } from '../hooks/useTheme'

export const Layout = ({ children }: { children: ReactElement }) => {
  const { isDark } = useTheme()
  return <div className={`layout ${!!isDark && 'dark'}`}>{children}</div>
}
