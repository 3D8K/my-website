import React, { useState } from 'react'
import ReactLogo from '../assets/img/react-logo.svg'
import { ThemeSwitch } from './ThemeSwitch'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark } = useTheme()

  const burgerOpenFunction = () => {
    setMenuOpen(!menuOpen)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      setMenuOpen(false)
    }
  })

  return (
    <header>
      <div className={`header ${!!isDark && 'dark'}`}>
        <div className='container'>
          <div className='navbar'>
            <div className='logo'>
              <a href='#'>
                <img src={ReactLogo} alt='logo' />
                <span>React assembly</span>
              </a>
            </div>
            <nav>
              <ul className={`menu ${!!menuOpen && 'active'}`}>
                <li className='menu__item'>
                  <a
                    href='https://github.com/3D8K'
                    target='_blank'
                    className='menu__item-link'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>
                </li>
                <li className='menu__item'>
                  <a
                    href='https://www.linkedin.com/in/stepan-osadchii-aa1541218/'
                    target='_blank'
                    className='menu__item-link'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='menu__item'>
                  <a
                    href='https://t.me/S3D8K'
                    target='_blank'
                    className='menu__item-link'
                    rel='noreferrer'
                  >
                    Telegram
                  </a>
                </li>
                <li className='menu__item theme__switcher'>
                  <ThemeSwitch />
                </li>
              </ul>
            </nav>
            <div className='menu__theme_switcher'>
              <ThemeSwitch />
            </div>
            <button className={`burger ${!!menuOpen && 'active'}`} onClick={burgerOpenFunction}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
