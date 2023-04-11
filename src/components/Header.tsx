import React, { useState } from 'react'
import Logo from '../assets/img/logo.svg'
import LogoDark from '../assets/img/logo-dark.svg'
import TriangleIcon from '../assets/img/triangle.svg'
import TriangleIconDark from '../assets/img/triangle_dark.svg'
import { useTheme } from '@hooks/index'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const { isDark } = useTheme()

  const burgerOpenFunction = () => {
    menuOpen ? document.body.classList.remove('locked') : document.body.classList.add('locked')
    setMenuOpen(!menuOpen)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      setMenuOpen(false)
    }
  })

  return (
    <header>
      <div className={`header ${isDark ? 'dark' : ''}`}>
        <div className='container'>
          <div className='navbar'>
            <a href='/' className={`navbar__sign ${isDark ? 'dark' : ''}`}>
              Stepan Osadchii
            </a>
            <div className='logo'>
              <img src={isDark ? Logo : LogoDark} alt='logo' />
            </div>
            <nav>
              <ul className={`menu ${!!menuOpen && 'active'}`}>
                <li className='menu__item'>
                  <Link to='/' className='menu__item-link' onClick={burgerOpenFunction}>
                    main
                  </Link>
                </li>
                <li className='menu__item'>
                  <Link to='/projects' className='menu__item-link' onClick={burgerOpenFunction}>
                    projects
                  </Link>
                </li>
                <li className='menu__item'>
                  <Link to='/about' className='menu__item-link' onClick={burgerOpenFunction}>
                    about
                  </Link>
                </li>
                <li className='menu__item'>
                  <Link to='/contact' className='menu__item-link' onClick={burgerOpenFunction}>
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='menu__navigation'>
              <div onClick={() => setSubmenuOpen(!submenuOpen)}>
                <p>navigation</p>
                <img
                  src={isDark ? TriangleIconDark : TriangleIcon}
                  alt='triangle'
                  className={`${submenuOpen ? 'active' : ''}`}
                />
              </div>
              <ul className={`submenu__list ${submenuOpen ? 'active' : ''}`}>
                <li className='submenu__item'>
                  <Link
                    to='/'
                    className='submenu__link'
                    onClick={() => setTimeout(() => setSubmenuOpen(false), 400)}
                  >
                    main
                  </Link>
                </li>
                <li className='submenu__item'>
                  <Link
                    to='/projects'
                    className='submenu__link'
                    onClick={() => setTimeout(() => setSubmenuOpen(false), 400)}
                  >
                    projects
                  </Link>
                </li>
                <li className='submenu__item'>
                  <Link
                    to='/about'
                    className='submenu__link'
                    onClick={() => setTimeout(() => setSubmenuOpen(false), 400)}
                  >
                    about
                  </Link>
                </li>
                <li className='submenu__item'>
                  <Link
                    to='/contact'
                    className='submenu__link'
                    onClick={() => setTimeout(() => setSubmenuOpen(false), 400)}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <button
              aria-label='menu'
              className={`burger ${!!menuOpen && 'active'} ${isDark ? 'dark' : ''}`}
              onClick={burgerOpenFunction}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
