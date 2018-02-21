import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    let links = <div />;
    if(this.props.user){
      links = (
        <div>
          <Menu.Item name='Logout' active={activeItem === 'logout'} as={Link} to='/logout' updateUser={this.props.updateUser} />
        </div>);
    }
    else {
      links = (
        <div>
          <Menu.Item name='Login' active={activeItem === 'login'} as={Link} to='/login' onClick={this.handleItemClick} />
        </div>);
    }

    return (
      <Menu secondary stackable>
        <Menu.Item name='Home' active={activeItem === 'home'} as={Link} to='/' onClick={this.handleItemClick} />
        <Menu.Item name='Profile' active={activeItem === 'profile'} as={Link} to='/profile' onClick={this.handleItemClick} />
        <Menu.Menu position='left'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {links}
        </Menu.Menu>
      </Menu>
    )
  }
}
