import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from './components/Header/Header';
import UserLoginPage from './pages/UserLoginPage/UserLoginPage';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
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
