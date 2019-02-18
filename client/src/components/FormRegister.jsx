import React, { Component } from "react";
import Input from './Input';

//создаем главный класс и унаследуем компоненты react

class Form extends Component{
  render()
  {
    return(
      <form className = "signup-form mdc-theme--dark" onSubmit = {this.props.onSubmit}>
        <Input required id = "name" type = "text" name = "firstName" placeholder = "First name"/>
        <Input required id = "password" type = "password" name = "password" placeholder = "Password" />
        <Input required id = "email" type = "email" name = "email" placeholder = "Email" />
        <button type = "submit" className = "mdc-button mdc-button--primary mdc-button--raised">Sign up</button>
      </form>
    )
  }
}


export default Form;