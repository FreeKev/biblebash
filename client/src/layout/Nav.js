import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    let links = <div />;
    if(this.props.user){
      links = (
          <Menu.Item name='Logout' active={activeItem === 'logout'}>
          <Logout updateUser={this.props.updateUser} />
          </Menu.Item>
      )
    }
    else {
      links = (
          <Menu.Item name='Login' active={activeItem === 'login'} as={Link} to='/login' onClick={this.handleItemClick} />
      )
    }

    return (
      <Menu secondary stackable>
        <Menu.Item name='Home' active={activeItem === 'home'} as={Link} to='/' onClick={this.handleItemClick} />
        <Menu.Item name='Profile' active={activeItem === 'profile'} as={Link} to='/profile' onClick={this.handleItemClick} />
        <Menu.Menu position='left'>
          {links}
        </Menu.Menu>
      </Menu>
    )
  }
}
