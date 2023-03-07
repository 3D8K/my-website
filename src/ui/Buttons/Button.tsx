import React from 'react'

interface ILinkButtonProps {
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'dark'
  href?: string
  onClick?: () => void
  text: string
}

export function Button({ type, href, text, onClick }: ILinkButtonProps) {
  return (
    <div>
      {href ? (
        <a href={href} className={`button ${!!type && type}`}>
          {text}
        </a>
      ) : (
        <a onClick={onClick} className={`button ${!!type && type}`}>
          {text}
        </a>
      )}
    </div>
  )
}
