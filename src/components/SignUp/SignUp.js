import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.scss';

const SignUp = () => {
  const [user, setUser] = React.useState({ displayName: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      alert('Passwords dont match')
      return;
    }

    try {
      const currentUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log(currentUser.user)
      await createUserProfileDocument(currentUser.user, { displayName })
      setUser({ displayName: '', email: '', password: '', confirmPassword: '' })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name)
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput type='text'
          name='displayName'
          label='Display Name'
          value={user.displayName}
          onChange={handleChange}
          required
        >
        </FormInput>
        <FormInput type='email'
          name='email'
          label='Email'
          value={user.email}
          onChange={handleChange}
          required
        >
        </FormInput>
        <FormInput type='password'
          name='password'
          label='Password'
          value={user.password}
          onChange={handleChange}
          required
        >
        </FormInput>
        <FormInput type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={user.confirmPassword}
          onChange={handleChange}
          required
        >
        </FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>


      </form>

    </div>
  )
}

export default SignUp
