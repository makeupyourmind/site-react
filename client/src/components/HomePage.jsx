import React, { Component } from "react";

class HomePage extends Component
{
  render()
  {
    return (
        <form>
          <div className = "form">
          <a href = "/">Log out</a>
           <p>Welcome to Your home page</p>

           {this.props.usersInfo.map(item => {
               return (
                       <div className = "blockInfoUser">
                         <p className = "infoUser">Your id :  {item.id}</p>
                         <p className = "infoUser">Your name : {item.name}</p>
                         <p className = "infoUser">Your email : {item.email}</p>
                         <p className = "infoUser">Your date registration : {item.date}</p>
                      </div>
                   );
               })
           }
          </div>
        </form>
    )
  }
}

export default HomePage;
