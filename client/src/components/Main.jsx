import React from "react";
import LogIn from './logIn';
//создаем главный класс и унаследуем компоненты react
function Main({onSubmit, onClick})//принятие свойства
{
    return (
        <div className = "glava">
        <h1>Example site on React + Node.js + Postgresql</h1>
          <div className = "main">
            <button type = "submit" id = "signup" className = "mdc-button mdc-button--primary mdc-button--raised" onClick = {onSubmit}>Sign up</button>
            <button type = "submit" id = "logIn" className = "mdc-button mdc-button--primary mdc-button--raised" onClick = {onClick}>Log In</button>
          </div>
        </div>
    );
}

export default Main;
