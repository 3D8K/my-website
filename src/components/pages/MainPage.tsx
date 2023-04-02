import React, { useEffect } from 'react'

export const MainPage = () => {
  const text = 'React-MobX-JS-TS-html-scss-bem-next-'.split('')
  useEffect(() => {
    document.title = 'S3D8K'
  }, [])
  return (
    <div>
      <div className='main'>
        <div className='main__element'>
          <p className='main__title'>
            Frontend <br />
            developer.
          </p>
          <p className='main__subtitle'>
            I like to craft solid and scalable frontend products
            <br /> with great user experience.
          </p>
          <ul className='main__description-wrapper'>
            <li className='main__description-text'>
              <div>
                Highly skilled at progressive
                <br /> enhancement, design systems & <br /> UI Engineering.
              </div>
            </li>
            <li className='main__description-text'>
              <div>
                Over a decade of experience <br /> building products for clients <br /> across
                several countries.
              </div>
            </li>
          </ul>
        </div>
        <div className='main__element'>
          <div className='main__circle'>
            <div className='main__circle_text'>
              <p>
                {text.map((n, i) => (
                  <span key='n' style={{ transform: `rotate(${i * 10}deg)` }}>
                    {n}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className='main__button-wrapper'>
            <a className='learn-more' download='Osadchii_cv.pdf' href='Osadchii_cv.pdf'>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>download cv</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
