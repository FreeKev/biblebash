import React, { Component } from 'react';

class Profile extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
        </div>);
    }
    else {
      return (
        <div>
        <p>Log in to view your profile.</p>
        </div>
      );
    }
  }
}

export default Profile;
