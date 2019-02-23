import React, { Component } from "react";
import Input from './Input';

class ForgotPassword extends Component{
  render(){
    return(
<div className="forgot">
<form className = "signup-form mdc-theme--dark" onSubmit = {this.props.forgot}>
    <div class="msg">
        Enter your email address that you used to register. We'll send you an email with your new password
    </div>
    <div class="remain">
        <Input required id = "email" type="email" name="email" placeholder="Email" />
        <Input required id = "newPassword" type="password" name="newPassword" placeholder="Enter a new password" />
        <button type = "submit" class="mdc-button mdc-button--primary mdc-button--raised" type="submit">SET NEW PASSWORD</button>
    </div>
</form>
</div>
    )
  }
}

export default ForgotPassword;
