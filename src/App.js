import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from './components/Header/Header';
import UserLoginPage from './pages/UserLoginPage/UserLoginPage';
import { auth } from './firebase/firebase.utils'


function App() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    })
    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <div >
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={UserLoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
