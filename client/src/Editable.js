import React, { Component } from 'react';

class EditableLabel extends Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      text: ''
    }
    this.labelClicked = this.labelClicked.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
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

  render() {
  	if(this.state.editing)
    	return <input
      	ref='textInput'
        className='editable'
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
