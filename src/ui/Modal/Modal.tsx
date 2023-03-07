import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../Buttons/Button'
import CancelIcon from '../../assets/img/cancel-icon.svg'

export function Modal() {
  const [modalOpen, setModalOpen] = useState(false)
  const { isDark } = useTheme()

  function openModal() {
    const body = document.body
    setModalOpen(!modalOpen)
    body.classList.toggle('locked')
  }

  return (
    <>
      <div className={`modal__wrapper ${!!modalOpen && 'open'} `}>
        <div className={`modal ${!!isDark && 'dark'}`}>
          <div className='modal__close'>
            <img src={CancelIcon} onClick={openModal} alt='cancel' width='10px' height='10px' />
          </div>
          <div className='modal__title'>
            <span>Modal Title</span>
          </div>
          <div className='modal__body'>Modal Body</div>
        </div>
      </div>
      <Button type='primary' text='Open modal' onClick={() => openModal()} />
    </>
  )
}
