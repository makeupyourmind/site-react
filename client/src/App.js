import React, { Component } from 'react';
import Form from './components/FormRegister';
import HomePage from './components/HomePage';
import Main from './components/Main';
import LogIn from './components/logIn';
import Admin from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class App extends Component {
  state = {
    response: '',
    date: '',
    post: '',
    email: '',
    password: '',
    responseToPost: '',
    main: true,
    formRegister: false,
    formLogIn : false,
    homePage: false,
    data: [],
    users: [],
    requestAddress: '/api/hello',
    admin: false,
    forgotPassword: false,
    temp: '',
    newPassword: '',
    show: true
  };

  //скрытие формы в момент нажатия кнопки регистрации
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({main: false});
          setTimeout(
      function() {
          this.setState({formRegister: true, formLogIn: false, homePage: false});
      }.bind(this),300);
    };

    Submit = event =>{
        event.preventDefault();
        this.setState({main: false});
          setTimeout(
      function() {
          this.setState({formRegister: false, formLogIn: true, homePage: false});
      }.bind(this),300);
    };

    handleSubmit2 = async (e) =>{
        e.preventDefault();
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        const response = await fetch('/confirmUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: name, password: password }),
        })
      fetch(this.state.requestAddress).then(results => {return results.json()}).then(data => {
         this.setState({users: data});
       })
       //this.loadData();
        const body = await response.text();

        if(body === 'admin'){
          this.setState({formLogIn: false})
          setTimeout(
          function() {
              this.setState({admin: true});
          }.bind(this),400);
        }
        if(body === 'true'){
            this.setState({main: false, formRegister: false, formLogIn: false});
            setTimeout(
            function() {
                this.setState({homePage: true});
            }.bind(this),400);
        }
        if(body !== 'admin' && body !== 'true') {

            confirmAlert({
              customUI: ({ onClose }) => {
            return (
              <div>
                <Modal size="sm" show={this.state.show} onHide={onClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Username or Password is incorrect</Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
                </div>
            )}
        })

        }

    };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  getData(){
    fetch(this.state.requestAddress).then(results => {return results.json()}).then(data => {
      this.setState({users: data});
      var name = document.getElementById("name").value;
      var password = document.getElementById("password").value;
      for(var i = 0; i < this.state.users.length; i++){
          if(name === this.state.users[i].name){
            confirmAlert({
              customUI: ({ onClose }) => {
              return (
                <div>
                  <Modal size="sm" show={this.state.show} onHide={onClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Username is taken.</Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                  </Modal>
                  </div>
              )}
             })
            document.getElementById("name").value = '';
            break;
          }
          else {
              if( (i === this.state.users.length - 1) && name !== this.state.users[i].name)
            {
              var d = new Date();
              //var day = new Array("Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
              var month=new Array("January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December");
              var date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
              var name = document.getElementById("name").value;
              var email = document.getElementById("email").value;
              var password = document.getElementById("password").value;
              const response = fetch('/api/world', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date: date, post: name, email: email, password: password }),
              });
              confirmAlert({
                customUI: ({ onClose }) => {
              return (
                <div>
                  <Modal size="sm" show={this.state.show} onHide={onClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for registering</Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                  </Modal>
                  </div>
              )}
          })
              this.setState({ main: false, formRegister: false, formLogIn: false });
              setTimeout(
              function() {
                  this.setState({homePage: true});
              }.bind(this),400);
            }
         }
      }
  })
}


  handleSubmitNode = async e => {
    e.preventDefault();
    this.getData()
  };

  delUser = async e =>{
    //alert("HAA");
    confirmAlert({
      customUI: ({ onClose }) => {
    return (
      <div className = 'react-confirm-alert'>
       <div className = "react-confirm-alert-body">
        <h1 className = "conf">Are you sure?</h1>
        <p>You want to delete this user?</p>
        <div className = "react-confirm-alert-button-group">
          <button  onClick = {onClose}>No</button>
          <button type = "submit" value = {e.target.value} onClick = {
            (e) => {
              this.T(e)
              onClose()
            }}>Yes, Delete it!</button>
        </div>
         </div>
      </div>
    )
  }
})

 }

 T(e){
    e.preventDefault();
    var name = e.target.value;
    if(name === 'admin'){
      alert("Error")
    }
    else{
    const response = fetch('/del', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: name }),
    });
    //const body = await response.text();
    //alert("User deleted");
    this.loadData();
  }

}
    forgotPassword = async e =>{
      this.setState({homePage: false, formLogIn: false})

      setTimeout(
      function() {
          this.setState({forgotPassword: true});
      }.bind(this),400);

    }

    forgot = async e =>{
      e.preventDefault();

      var email = document.getElementById('email').value;
      var newPassword = document.getElementById('newPassword').value;
      fetch(this.state.requestAddress).then(results => {return results.json()}).then(data => {
        this.setState({users: data});
        for(var i = 0; i < this.state.users.length; i++){
            if(email === this.state.users[i].email){
              confirmAlert({
                customUI: ({ onClose }) => {
                return (
                  <div>
                    <Modal size="sm" show={this.state.show} onHide={onClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>You receive on your email your password</Modal.Body>
                      <Modal.Footer>
                      </Modal.Footer>
                    </Modal>
                    </div>
                )}
               })
              const response = fetch('/forgot', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post: email, newPassword: newPassword }),
              });
              this.setState({forgotPassword: false});
              setTimeout(
              function() {
                  this.setState({formLogIn: true});
              }.bind(this),400);
              break;
            }else {
              if( (i === this.state.users.length - 1) && email !== this.state.users[i].email){
              confirmAlert({
                customUI: ({ onClose }) => {
                return (
                  <div>
                    <Modal size="sm" show={this.state.show} onHide={onClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Error email.Try again</Modal.Body>
                      <Modal.Footer>
                      </Modal.Footer>
                    </Modal>
                    </div>
                )}
               })
              document.getElementById('email').value = '';
              }
            }
        }
      })

    }

    loadData(){
      fetch(this.state.requestAddress).then(results => {return results.json()}).then(data => {
        this.setState({users: data});
    })
  }

render() {
    return (
      <div className="app">
        <CSSTransitionGroup
               transitionName = "fade"
               transitionAppear = {true}//процесс появления компонента
               transitionAppearTimeout = {500}//процесс появления компонента
               transitionEnter = {false}//спрятать и показать элемент по умолчанию значение true
               transitionLeave = {true}//удаление компонента по умолчанию true можно не указывать
               transitionLeaveTimeout = {1}>
               {this.state.main && <Main onSubmit = {this.handleSubmit} onClick = {this.Submit}/>}
             <CSSTransitionGroup
                  transitionName = "fade"
                  transitionAppear = {true}//процесс появления компонента
                  transitionAppearTimeout = {900}//процесс появления компонента
                  transitionEnter = {false}//спрятать и показать элемент по умолчанию значение true
                  transitionLeave = {true}//удаление компонента по умолчанию true можно не указывать
                  transitionLeaveTimeout = {0}>
                  {this.state.formRegister && <Form onSubmit = {this.handleSubmitNode}/>}
                  {this.state.formLogIn && <LogIn onSubmit = {this.handleSubmit2} forgotPassword = {this.forgotPassword}/>}
                  {this.state.forgotPassword && <ForgotPassword forgot = {this.forgot}/>}
                <CSSTransitionGroup
                   transitionName = "fade"
                   transitionAppear = {true}//процесс появления компонента
                   transitionAppearTimeout = {1200}//процесс появления компонента
                   transitionEnter = {false}//спрятать и показать элемент по умолчанию значение true
                   transitionLeave = {true}>
                   {this.state.admin && <Admin Get = {this.state.users} delUser = {this.delUser} refreshData = {this.loadData()}/>}
                   {this.state.homePage && <HomePage/>}
                </CSSTransitionGroup>
             </CSSTransitionGroup>
           </CSSTransitionGroup>
      </div>
    );
  }
}
export default App;
