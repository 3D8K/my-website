import React from 'react'
import MyPhoto from '../../assets/img/my-photo.png'

export const AboutPage = () => {
  return (
    <div className='about'>
      <p className='about__title'>ABOUT ME</p>
      <div className='about__inside-wrapper'>
        <div className='about__section first'>
          <div className='about__text'>
            Hello there! My name is Stepan, and I am a front-end developer with 2+ years of
            experience in the field. I started my career in 2020 at Freematiq, and have since gained
            expertise in a variety of technologies including React, Redux, HTML, CSS, and SCSS. I am
            passionate about building beautiful and functional user interfaces, and am always eager
            to learn new skills and take on new challenges. In my free time, I enjoy tinkering with
            new technologies, reading up on industry trends, and contributing to open source
            projects. If you're looking for a dedicated and talented developer for your next
            project, I'd love to hear from you!
          </div>
        </div>
        <div className='about__section second'>
          <div className='about__image-wrapper'>
            <div className='about__image_square'></div>
            <img src={MyPhoto} alt='My photo' className='my_photo' />
          </div>
        </div>
      </div>
      <div className='about__skills'>
        <ul>
          <li>JavaScript (ES 6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>ReactNative</li>
        </ul>
        <ul>
          <li>NestJs</li>
          <li>Shopify</li>
          <li>Node.js</li>
          <li>SASS</li>
        </ul>
      </div>
    </div>
  )
}
