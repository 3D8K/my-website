import React from 'react'
import { ICheckBoxProps } from './types'

export function CheckboxInput({ text, value, changeValue }: ICheckBoxProps) {
  return (
    <label className='checkbox__item'>
      <input
        type='checkbox'
        name='checkbox'
        value={value}
        onChange={changeValue}
        className='checkbox__input'
      />
      <span className='fake'></span>
      <span>{text}</span>
    </label>
  )
}
