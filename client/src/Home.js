import React, { Component } from 'react';
import EditableLabel from './Editable.js';
import Search from './Search.js';

class Home extends Component {

  render(){
    return (
        <div>
        <EditableLabel />
        <Search />
        </div>
      );
  }
}

export default Home;
