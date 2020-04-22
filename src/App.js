import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Login from './components/login';
import Admin from './components/admin';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Admin></Admin>
        <Navbar />
        <switch> 
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
