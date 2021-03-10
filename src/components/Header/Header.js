import React from 'react';
import {connect } from 'react-redux';
import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <div className='logo'>V</div>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to="/signin">
              SIGN IN
            </Link>
        }

      </div>

    </div>
  )
}

const mapStateToProps = state =>({
   currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
