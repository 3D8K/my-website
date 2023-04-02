import React, { useEffect } from 'react'

export const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects'
  }, [])
  return (
    <div className='projects'>
      <ul className='projects__list'>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2023</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Nike shop</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2023</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>commission</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Special</span>
            </div>
            <h3 className='project__title'>veritty</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2023</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Rick & Morty</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2022</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Furni</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2022</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Munchim</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2022</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Marico</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2022</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>Nft peeps</h3>
          </a>
        </li>
        <li className='projects__item'>
          <a
            href='https://veritty.io'
            target='_blank'
            rel='noreferrer'
            className='projects__item-link'
          >
            <div className='project__inside-wrapper'>
              <span className='project__date'>2021</span>
              <span className='project__slash'>/</span>
              <span className='project__status'>personal</span>
              <span className='project__slash'>/</span>
              <span className='project__for'>Portfolio</span>
            </div>
            <h3 className='project__title'>React pizza</h3>
          </a>
        </li>
      </ul>
    </div>
  )
}
