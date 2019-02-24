import React from 'react';
import decode from 'jwt-decode';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Scores from './components/Scores';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile';
import './App.css';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to = {{ pathname: '/' }} />
      )     
    )} />
)

const checkAuth =() =>  {
  const tokenAuth = localStorage.getItem('tokenAuth');
  if(!tokenAuth)
      return false;

  try {
    const exp = decode(tokenAuth);
    if (exp < new Date().getTime()/1000){  
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Login {...props}/>}/>
          <AuthRoute exact path="/home" component={Home} />
          <AuthRoute exact path="/scores" component={Scores} />
          <AuthRoute exact path="/profile" component={Profile} />
          <AuthRoute exact path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
