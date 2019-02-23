import React from "react";

function Input({ autoFocus, required, id, type, name, placeholder }){

    return (
          <div className = "mdc-textfield">
            <input
              autoFocus = {autoFocus}
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
