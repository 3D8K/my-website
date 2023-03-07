import React from 'react'
import { ICheckBoxProps } from './types'

export function RadioInput({ text, value, changeValue }: ICheckBoxProps) {
  return (
    <label className='radio__item'>
      <input
        type='radio'
        name='radio'
        value={value}
        onChange={changeValue}
        className='radio__input'
      />
      <span className='fake'></span>
      <span>{text}</span>
    </label>
  )
}
