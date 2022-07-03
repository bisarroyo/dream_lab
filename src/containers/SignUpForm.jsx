import React from 'react'
import ButtonPrimary from '@components/ButtonPrimary'
import Input from '@components/Input'

const SignUpForm = () => {
  return (
    <div>

      {/* name input */}
      <Input
        label='Nombre'
        name='fname'
        type='input'
        placeholder='Bismark'
        // value={value}
        // onChange={Onchange}
      />

      {/* last name input */}
      <Input
        label='Apellido'
        name='lname'
        type='input'
        placeholder='Arroyo'
        // value={value}
        // onChange={Onchange}
      />

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
        placeholder='Juan'
        // value={value}
        // onChange={Onchange}
      />

      {/* confirm password input */}
      <Input
        label='Confirmar contraseña'
        name='password2'
        type='password'
        placeholder='Juan'
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

export default SignUpForm
