import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SignIn extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="White">
                    <h4 className="grey-text text-darken-3">Log In</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Button color="primary">Log In</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn