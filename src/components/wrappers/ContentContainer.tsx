import React, { ReactElement } from 'react'
import { useTheme } from '@hooks/index'

export const ContentContainer = ({ children }: { children: ReactElement }) => {
  const { isDark } = useTheme()
  return (
    <div className='container center'>
      <div className={`content-container ${isDark ? 'dark' : ''}`}>{children}</div>
    </div>
  )
}
