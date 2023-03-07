import React from 'react'

interface IFormInputProps {
  type?: 'email' | 'text' | 'password'
  label: string
  onChange: () => void
  value: string | number
}

export function FormInput({ type = 'text', label, onChange }: IFormInputProps) {
  return (
    <div className='form-group'>
      <input type={type} className='form-group__input' onChange={onChange} placeholder=' ' />
      <label className='form-group__label'>{label}</label>
    </div>
  )
}
