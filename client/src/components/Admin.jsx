import React, { Component } from "react";

class Admin extends Component{

  render()
  {
    return(
      <div>
      <h2>Site Users</h2>
      <a href = "/" id = "ddc" className = "mdc-button mdc-button--primary mdc-button--raised"><span>Main</span></a>
      <div class="cont">
      <table className = "table table-hover table-bordered table-dark">
      <thead>
                <tr>
                   <th scope = "col"><span className = "th">Id</span> <div className = "dvig">Id</div></th>
                   <th scope = "col"><span className = "th">Name</span> <div>Name</div></th>
                   <th scope = "col"><span className = "th">Password</span> <div>Password</div></th>
                   <th scope = "col"><span className = "th">Email</span> <div>Email</div></th>
                   <th scope = "col"><span className = "th">Registration</span> <div>Registration</div></th>
                   <th scope = "col"><span className = "th">Del user</span> <div>Del user</div></th>
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
                         <td className = "td"><button onClick = {this.props.delUser}
                         value = {item.name} className = "btn btn-danger">Delete user</button></td>
                     </tr>
                   );
               })
           }
       </tbody>
      </table>
      </div>
      </div>
    )
  }
}


export default Admin;
