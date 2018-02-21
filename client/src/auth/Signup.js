import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', 'Failure message here');
    })
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<Form onSubmit={this.handleSubmit}>
                <div>
                  <input name="Name"
                       placeholder="What is your first name?"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                  />
                </div>
                <div>
                  <Form.Input name="Email"
                       placeholder="What is your email?"
                       fluid
                       icon = 'user'
                       iconPosition='left'
                       value={this.state.email}
                       onChange={this.handleEmailChange} />
               </div>
               <div>
                  <Form.Input name="Password"
                     placeholder="Choose a password - Min six characters"
                     fluid
                     icon='lock'
                     iconPosition='left'
                     type="password"
                     value={this.state.password}
                     onChange={this.handlePasswordChange} />
                 </div>
                 <Button color='teal' fluid size='large' type="submit">Sign up!</Button>
              </Form>);
    }
    return (
      <div>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
