import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './UserLoginPage.scss';
const UserLoginPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}

export default UserLoginPage
