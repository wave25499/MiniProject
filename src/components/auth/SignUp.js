import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
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
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="fisrtName">First Name</label>
                        <input type="firstName" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp