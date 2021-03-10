import React, { useEffect } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from './components/Header/Header';
import UserLoginPage from './pages/UserLoginPage/UserLoginPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux';
import { setCurrentUser} from './redux/user/userActions';

function App({setCurrentUser}) {


  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        if (userAuth.metadata.creationTime === userAuth.metadata.lastSignInTime) {
          return;
        }
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })

      }
      setCurrentUser(userAuth);



    })
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser])



  return (
    <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={UserLoginPage} />
        </Switch>
      
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
