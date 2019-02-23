import React, { Component } from "react";
import Input from './Input';

class LogIn extends Component{
   render(){
    return (
       <div className = "div">
        <form className = "signup-form mdc-theme--dark" onSubmit = {this.props.onSubmit}>
          <Input autocomplete="off" autoFocus = "on" required id = "name" type = "text" name = "firstName" placeholder = "First name"/>
          <Input autocomplete="off" required id = "password" type = "password" name = "password" placeholder = "Password" />
          <button type = "submit" className = "mdc-button mdc-button--primary mdc-button--raised">Log in</button>
          <button type = "submit" className = "mdc-button mdc-button--primary" onClick = {this.props.forgotPassword}>Forgot password ?</button>
        </form>
        <div className = "down">
          <a href = "/" id = "ddc" className = "mdc-button mdc-button--primary mdc-button--raised">Main</a>
        </div>
      </div>
    )
  }
}

export default LogIn;
