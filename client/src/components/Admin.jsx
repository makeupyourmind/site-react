import React, { Component } from "react";

//создаем главный класс и унаследуем компоненты react

class Admin extends Component{
  render()
  {
    return(
      <div>
      <div className = "realod">
      </div>
      <h2>Site Users</h2>
      <table className="table table-hover table-bordered table-dark" >
      <thead>
                <tr>
                   <th scope = "col">Id</th>
                   <th scope = "col">Name</th>
                   <th scope = "col">Password</th>
                   <th scope = "col">Email</th>
                   <th scope = "col">Date of registration</th>
                   <th scope = "col">Del user</th>
               </tr>
      </thead>
       <tbody>
           {this.props.Get.map(item => {
               return (
                     <tr key={item.name}>
                         <td className = "td">{item.id}</td>
                         <td className = "td">{item.name}</td>
                         <td className = "td">{item.password}</td>
                         <td className = "td">{item.email}</td>
                         <td className = "td">{item.date}</td>
                         <td className = "td"><button onClick = {this.props.delUser} value = {item.name} className = "btn btn-danger">Delete user</button></td>
                     </tr>
                   );
               })
           }
       </tbody>
      </table>
      </div>
    )
  }
}


export default Admin;
