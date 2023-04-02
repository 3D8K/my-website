import React, { useEffect, useState } from 'react'
import { useTheme } from '@hooks/index'
import { FormInput } from '@ui/index'
import { emailServiceId, myPublicKey, templateId } from '@constants/index'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

export const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact'
  }, [])
  const { isDark } = useTheme()
  const [sendEmail, setSendEmail] = useState(false)
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm()
  const onSubmit = (data: any) => {
    setSendEmail(true)
    emailjs.send(emailServiceId, templateId, data, myPublicKey).then(
      (response) => {
        reset()
      },
      (err) => {
        console.error(err)
      },
    )
    setSendEmail(false)
  }

  return (
    <div className='contact'>
      <div className='contact__marquee-wrapper'>
        <div className='contact__marquee'>
          <span>
            contact me / contact me / contact me / contact me / contact me / contact me / contact me
            / contact me / contact me / contact me / contact me / contact me / contact me / contact
            me / contact me / contact me / contact me / contact me / contact me / contact me /
            contact me /
          </span>
        </div>
      </div>
      <div className='contact__form-wrapper'>
        <div className='contact__form-element'>
          <p className='contact__title'>Let`s unlock together the next level of possibles!</p>
          <p className='contact__sub-title'>Reach out!</p>
          <div className='contact__socials'>
            <h3 className='contact__socials-title'>Social media</h3>
            <ul className='contact__socials-list'>
              <li>
                <a href='https://github.com/3D8K' target='_blank' rel='noreferrer'>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/stepan-osadchii-aa1541218/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href='https://t.me/S3D8K' target='_blank' rel='noreferrer'>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className='contact__email'>
            <div className='contact__email-title'>Get in touch</div>
            <div className='contact__email-text'>
              <a href='mailto:stepanoasdchii103@gmail.com'>stepanoasdchii103@gmail.com</a>
            </div>
          </div>
          <div className='contact__location'>
            <div className='contact__location-title'>Location</div>
            <div className='contact__location-text'>Bar, Montenegro</div>
          </div>
        </div>
        <form className='contact__form-element' onSubmit={handleSubmit(onSubmit)}>
          <div className='contact__inputs-wrapper'>
            <FormInput
              type='text'
              label='NAME'
              register={register('name', { required: true })}
              errors={errors?.name}
            />
            <FormInput type='text' label='COMPANY' register={register('company')} />
            <FormInput
              type='email'
              label='EMAIL'
              register={register('email', { required: true })}
              errors={errors?.email}
            />
            <FormInput type='text' label='BUDGET' register={register('budget')} />
            <div className='contact__textarea-wrapper'>
              <textarea
                placeholder=' '
                {...register('message', { required: true })}
                className={`contact__form-textarea ${isDark ? 'dark' : ''}`}
              ></textarea>
              <label className='contact__textarea-label'>Message</label>
              <p className='contact__textarea-error'>{errors?.message && '* required field'}</p>
            </div>
          </div>
          <div className='contact__inputs-button'>
            <button
              type='submit'
              className='contact__submit-button'
              disabled={!isValid && !sendEmail}
            >
              <span>submit</span>
              <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
