import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                    <h4 className="grey-text text-darken-3">Register</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>First Name</Label>
                            <Col sm={10}>
                                <input type="firstName" id="firstName" placeholder="First Name" onChange={this.handleChange}/>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Last Name</Label>
                            <Col sm={10}>
                                <input type="lastName" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                            </Col>
                    </FormGroup>
                    <div>
                        <Button color="primary" size="lg" active>Log In</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp