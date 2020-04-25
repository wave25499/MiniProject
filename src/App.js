import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Login from './components/Login';
import Admin from './components/Admin';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch> 
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </switch>
        <Admin></Admin>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
