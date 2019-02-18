import React from "react";
//создаем главный класс и унаследуем компоненты react
function Input({ required, id, type, name, placeholder }){

    return (

          <div className = "mdc-textfield">
            <input
              required = {required}
              id = {id}
              type = {type}
              name = {name}
              className = "mdc-textfield__input"
              placeholder = {placeholder}
            />
          </div>
    );
}

export default Input;
