import React, { Component } from "react";
import Input from './Input';


class Form extends Component{
  render(){
    return(
      <div className = "div">
        <form className = "signup-form mdc-theme--dark" onSubmit = {this.props.onSubmit}>
          <Input required id = "name" type = "text" name = "firstName" placeholder = "First name"/>
          <Input required id = "password" type = "password" name = "password" placeholder = "Password" />
          <Input required id = "email" type = "email" name = "email" placeholder = "Email" />
          <button type = "submit" className = "mdc-button mdc-button--primary mdc-button--raised">Sign up</button>
        </form>
        <div className = "down">
          <a href = "/" id = "ddc" className = "mdc-button mdc-button--primary mdc-button--raised"><span>Main</span></a>
        </div>
      </div>
    )
  }
}


export default Form;
