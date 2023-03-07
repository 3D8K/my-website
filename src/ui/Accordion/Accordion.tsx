import React, { useState } from 'react'

export function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const accordionOpenFunction = () => {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <div className='accordion'>
      <div className={`accordion__item ${!!accordionOpen && 'accordion__item-active'}`}>
        <div className='accordion__item-trigger' onClick={accordionOpenFunction}>
          <div className='trigger__text'>Accordion</div>
          <div className='trigger__img'>
            <span className='trigger__line-1'></span>
            <span className='trigger__line-2'></span>
          </div>
        </div>
        <div className='accordion__item-content'>
          <div className='content__text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis quo
            nulla eos. Reiciendis atque beatae dicta deserunt in accusamus.
          </div>
        </div>
      </div>
    </div>
  )
}
