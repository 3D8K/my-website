import React from 'react'
import { useTheme } from '@hooks/index'

interface IFormInputProps {
  type?: 'email' | 'text' | 'password'
  label: string
  register: any
  value?: string | number
  errors?: any
}

export function FormInput({ type = 'text', label, register, errors }: IFormInputProps) {
  const { isDark } = useTheme()
  return (
    <div className='form-group'>
      <input
        type={type}
        className={`form-group__input ${isDark ? 'dark' : ''}`}
        placeholder=' '
        {...register}
      />
      <label className='form-group__label'>{label}</label>
      <p className='form-group__error'>{!!errors && '* required field'}</p>
    </div>
  )
}
