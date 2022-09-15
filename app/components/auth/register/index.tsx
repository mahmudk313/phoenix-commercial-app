import React from 'react'
import RegisterForm from '../../../forms/auth/registerForm';

const Register:React.FC = () => {

  return(
    <div className="h-screen flex justify-center items-center bg-violet-200">
      <div className="md:col-span-2">
        
        <RegisterForm />

      </div>
    </div>
  )
}

export default Register;