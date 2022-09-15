import React, { Component } from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import validation from '../../validation/validation';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom'
export default class ForgetPassword extends Component {
 constructor(){
  super();
  this.state ={
    email: ''
  }
 }
 Emails = (event) => {
  this.setState({
    email: event.target.value,
  })
}
componentDidMount = (event) =>{
  let getForm = document.querySelector(".onboardForm");
  getForm.addEventListener('submit',this.formSubmit);
}
  render() {
    return (
      <div class='row'>
        <div class="col-md-4 col-xs-12">
        </div>
        <div class="col-md-4 col-xs-12">
          <form class="onboardForm" >
            <h4 class="section-title-login"> FORGET PASSWORD ? </h4>
            <input onChange={this.Emails} class="m-2" type="email" placeholder="Enter Your Email" />
            <button type="submit" class="btn btn-success m-2 "> Reset Password </button>
          </form>
        </div>
        <div class="col-md-4 col-xs-12">
        </div>
        <ToastContainer/>
      </div>
    )
  }
}
