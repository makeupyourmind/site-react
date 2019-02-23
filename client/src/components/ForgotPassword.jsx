import React, { Component } from "react";
import Input from './Input';

class ForgotPassword extends Component{

  render(){
    return(
<div className="div">
<form className = "signup-form mdc-theme--dark" onSubmit = {this.props.forgot}>
    <div class="msg">
        Enter your email address that you used to register. We'll send you an email with your new password
    </div><br/>
        <Input autocomplete="off" autoFocus = "on" required id = "email" type = "email" name = "email" placeholder="Email" />
        <Input autocomplete="off" required id = "newPassword" type="password" name="newPassword" placeholder="Enter a new password" />
        <button type = "submit" class="mdc-button mdc-button--primary mdc-button--raised" type="submit">SET NEW PASSWORD</button>
</form>
  <div className = "down">
    <a href = "/" id = "ddc" className = "mdc-button mdc-button--primary mdc-button--raised"><span>Main</span></a>
  </div>
</div>
    )
  }
}

export default ForgotPassword;
