import React, { Component } from 'react';

class EditableLabel extends Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      text: 'Edit Me!'
    }
  }

	labelClicked() {
  	this.setState({ editing: true });
  }

  textChanged() {
  	this.setState({ text: this.refs.textInput.value});
  }

  inputLostFocus() {
  	this.setState({ editing: false });
  }

  keyPressed(event) {
  	if(event.key == 'Enter') {
    	this.inputLostFocus();
    }
  }

  getInitialState() {
  	return {
    	editing: false,
      text: 'Edit Me!'
    }
  }

  render() {
  	if(this.state.editing)
    	return <input
      	ref='textInput'
        type='text'
        onChange={this.textChanged}
        onBlur={this.inputLostFocus}
        onKeyPress={this.keyPressed}
        value={this.state.text}
        autoFocus
     	/>;

		return <div className="editable" onClick={this.labelClicked} >{this.state.text}</div>;
  }

};

export default EditableLabel;
