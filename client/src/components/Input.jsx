import React from "react";

function Input({ autocomplete, autoFocus, required, id, type, name, placeholder }){

    return (
          <div className = "mdc-textfield">
            <input
              autocomplete = {autocomplete}
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
