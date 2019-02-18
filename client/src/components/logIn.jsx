import React, { Component } from "react";
import Input from './Input';

//создаем главный класс и унаследуем компоненты react
class LogIn extends Component//принятие свойства
{
   render(){
    return (
        <form className = "signup-form mdc-theme--dark" onSubmit = {this.props.onSubmit}>
          <Input required id = "name" type = "text" name = "firstName" placeholder = "First name"/>
          <Input required id = "password" type = "password" name = "password" placeholder = "Password" />
          <input type = "submit" className = "mdc-button mdc-button--primary" value = "Forgot password?" onClick = {this.props.forgotPassword}/>
          <button type = "submit" className = "mdc-button mdc-button--primary mdc-button--raised">Log in</button>
        </form>
    )
  }
}

export default LogIn;