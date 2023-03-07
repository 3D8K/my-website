import React from 'react'
import ReactLogo from '../assets/img/react-logo.svg'
import TypeScriptLogo from '../assets/img/typescript-logo.svg'
import WebPackLogo from '../assets/img/webpack-logo.svg'
import EsLintLogo from '../assets/img/eslint-logo.svg'
import BabelLogo from '../assets/img/babel-logo.svg'

export function Main() {
  return (
    <main>
      <div className='container'>
        <div className='main'>
          <div className='main__image'>
            <img src={ReactLogo} alt='logo' />
          </div>
          <div className='main__text'>
            <ul className='main__technologies'>
              <li className='main__technologies-item'>
                <img src={TypeScriptLogo} alt='typescript' />
              </li>
              <li className='main__technologies-item'>
                <img src={WebPackLogo} alt='webpack' />
              </li>
              <li className='main__technologies-item'>
                <img src={EsLintLogo} alt='eslint' />
              </li>
              <li className='main__technologies-item'>
                <img src={BabelLogo} alt='babel' />
              </li>
            </ul>
            <h1 className='main__text-title'>Create React app</h1>
            <p className='main__text-subtitle'>Set up a modern web app bu running one command</p>
          </div>
        </div>
      </div>
    </main>
  )
}
