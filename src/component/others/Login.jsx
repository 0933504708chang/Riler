import React, { Component } from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import validation from '../../validation/validation';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom'
export class Login extends Component {
  constructor (){
    super()
    this.state={
      email: '',
      password: '',
      message: '',
      loggedIn: false
    }
  }
  Emails = (event) => {
    this.setState({
      email: event.target.value,
    })
  }
  Passwords = (event) => {
  this.setState({
    password: event.target.value,
  })
}
componentDidMount = (event) =>{
  let getForm = document.querySelector("#LoginForm");
  getForm.addEventListener('submit',this.formSubmit);
}
formSubmit = (e) =>{
  e.preventDefault();
  let email = this.state.email;
  let password = this.state.password;
  if(email.length <= 0 || password.length <= 0) { 
      toast.error('Please Complete all information!');
  }
  else if(!(validation.reEmail).test (email)) toast.error('Email invalid ') 
 else if(!(validation.pass).test(password)) toast.error('Passwords invalid ')  
    else{
      
      // thao tac dang nhap
      let loginBtn= document.querySelector('#sendBtn')
      loginBtn.value='Login...'
      const data ={
        email: this.state.email,
        password: this.state.password
      }
      axios.post(AppUrl.Login, data).then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({ loggedIn: true})
      }).catch(error => {
        toast.error(error.response.data.message,{
          position: "top-right"
        });
      });
    }
}

  render() {
    // neu da login tu dong chuyen trang
    if (this.state.loggedIn){
      return <Navigate to = { '/profile'}/>
    }
    if (localStorage.getItem('token')){
      return <Navigate to ="/profile"/>
    }
    return (
      <div className="formlogin row">
        <div className="col-md-6 col-lg-6 col-xl-4  ">
          <h2 className="text-center">Login</h2>
          <form id="LoginForm" class="px-md-2">
            <div class="form-outline mb-4"><input onChange={this.Emails} type="Email" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Email</label></div>
              <div class="form-outline mb-4"><input onChange={this.Passwords} type="Password" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Password</label></div>
             <input id="sendBtn" type="submit" className="btn btn-primary" />
             <Link to='/forgetpassword'>
              <div className="text-body">Forgot password?</div></Link>
              <Link to='/register'>
              <div className="text-body">register</div></Link>
            </form>
        </div>
        <ToastContainer/>
      </div>
    )
  }
}
export default Login

