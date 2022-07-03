import React from 'react'
import ButtonPrimary from '@components/ButtonPrimary'
import Input from '@components/Input'

const SignInForm = () => {
  return (
    <div>

      {/* mael input */}
      <Input
        label='Correo electrónico'
        name='email'
        type='email'
        placeholder='Juan'
        // value={value}
        // onChange={Onchange}
      />

      {/* password input */}
      <Input
        label='Contraseña'
        name='password'
        type='password'
        placeholder='********'
        // value={value}
        // onChange={Onchange}
      />

      <ButtonPrimary
        type='submit'
        // disabled={disabled}
        text='Registrarme'
      />
    </div>
  )
}

export default SignInForm
