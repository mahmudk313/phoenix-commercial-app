import { NextPage } from 'next';
import RegisterForm from '../../app/forms/auth/registerForm';

const Register : NextPage = () => {

  return(
    <div className="h-screen flex justify-center items-center bg-violet-200">
      <div className="md:col-span-2">
        
        <RegisterForm />

      </div>
    </div>
  )
}

export default Register;