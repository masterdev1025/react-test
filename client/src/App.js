import React from 'react';
import Home from './Pages';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Pages/Form.js';
import LoginForm from './Pages/LoginForm.js';
import Lists from './components/Lists';
import User from './components/User';
import { LoginProvider } from './utils/GlobalState'
function App() {

  return (<BrowserRouter>
    <>
      <LoginProvider>
        <Switch>
          <Route path='/signup' component={Form} exact />
          <Route path='/login' component={LoginForm} exact />
          <Route path='/' component={Home} />

        </Switch>
      </LoginProvider>
    </>
  </BrowserRouter>)

}

export default App;
