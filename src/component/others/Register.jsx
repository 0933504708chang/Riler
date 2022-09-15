import React, { Component } from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import validation from '../../validation/validation';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom'
export default class Register extends Component {
  constructor ()
  {
    super();
    this.state = {
      FullName: '',
      Email: '',
      Password: '',
      Confirm: '',
      loggedIn: false
    }
  }
  FullNames = (event) => {
      this.setState({
        FullName: event.target.value,
      })
  }
  Emails = (event) => {
    this.setState({
      Email: event.target.value,
    })
}
Passwords = (event) => {
  this.setState({
    Password: event.target.value,
  })
}
Confirms = (event) => {
  this.setState({
    Confirm: event.target.value,
  })
}
componentDidMount = (event) =>{
  let getForm = document.querySelector("#RegisterForm");
  getForm.addEventListener('submit',this.onSubmit);
}
onSubmit = (event) =>{
  event.preventDefault();
  let name = this.state.FullName;
  let em = this.state.Email;
  let pass = this.state.Password;
  let confirm = this.state.Confirm;
  if(name.length <= 0 || pass.length <= 0 || confirm.length <= 0 || em.length <= 0)
    toast.error('Please Complete all information!');
  if(confirm === pass)
  {
    if(!(validation.Regex).test(name) || !(validation.reEmail).test(em) || !(validation.pass).test(pass))
       toast.error('Information invalid!');
    else
      {
        let btn = document.querySelector('#sendBtn')
        btn.value = "Registering..."
        const data = {
          name: name,
          email: em,
          password: pass,
          password_confirmation: confirm
          }
        axios.post(AppUrl.Register, data).then(response => {
          localStorage.setItem('token', response.data.token);
          this.setState({ loggedIn: true })
          }).catch(error => {
          console.log(error)
          toast.error(error.response.data.message, {
          position: "top-right"
          });
        });
      }
  }


}
  render() {
    if (this.state.loggedIn) {
      return <Navigate to={'/profile'} />
      }
      if (localStorage.getItem('token')) {
      return <Navigate to="/profile" />
      }
    return (
      <div>
        <section class="h-100 h-custom register" style={{ backgroundColor: "rgb(143, 196, 183)" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                    <form id="RegisterForm" class="px-md-2">
                      <div class="form-outline mb-4"><input onChange={this.FullNames} type="text" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Name</label></div>
                      <div class="form-outline mb-4"><input onChange={this.Emails} type="Email" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Email</label></div>
                      <div class="form-outline mb-4"><input onChange={this.Passwords} type="Password" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Password</label></div>
                      <div class="form-outline mb-4"><input onChange={this.Confirms} type="Password" id="form3Example1q" class="form-control" /><label class="form-label" for="form3Example1q">Confirm Password</label></div>
                      <input id="sendBtn" type="submit" className="btn btn-primary" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer/>
          </div>
        </section>
      </div>
    )
  }
}
