import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Menu, Header } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then((result) => {
      localStorage.setItem('mernToken', result.data.token);
      this.setState({ success: true });
      this.props.updateUser();
    }).catch((error) => {
      console.log('error returned', error.response);
      this.props.setFlash('error', 'Invalid Credentials');
    });
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <Header as='h2' color='teal' textAlign='center'>
                  {' '}Log-in to your account
                </Header>
                <div>
                  <Form.Input name="Email"
                       placeholder="Enter your email"
                       fluid
                       icon = 'user'
                       iconPosition='left'
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                  />
                </div>
                <div>
                  <Form.Input name="Password"
                       placeholder="Enter your password"
                       fluid
                       icon='lock'
                       iconPosition='left'
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                  />
                </div>
                <Button color='teal' fluid size='large' type="submit">Login</Button>
              </form>);
    }
    return (
      <div>
        {form}
        <p>Not a member?</p><br />
        <Menu.Item name='Sign-up' as={Link} to='/signup' onClick={this.handleItemClick} />
      </div>
    );
  }
}

export default Login;
