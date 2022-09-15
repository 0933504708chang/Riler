import axios from 'axios';
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from '../../validation/validation'
import AppUrl from '../api/AppUrl'
export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  }
  emailOnChange = (e) => {
    this.setState({ message: e.target.value });
  }
  messageOnChange = (e) => {
    this.setState({ email: e.target.value });
  }
  componentDidMount() {
    let contactForm = document.getElementById('contactForm')
    contactForm.addEventListener('submit', this.onSubmitForm)
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    let name = this.state.name
    let emai = this.state.email
    let message = this.state.message
    if (name.length === 0) toast.error('Please write name')
    else if (emai.length === 0) toast.error('Please write email')
    else if (message.length === 0) toast.error('Please write message')
    else if (!(validation.nameRegx).test(name))
      toast.error('Name invalid')
    else {
      //gui du lieu di
      let sendBtn = document.getElementById('sendBtn')
      sendBtn.value = 'Sending...'
      sendBtn.innerHTML = "Sending..."
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", emai);
      MyFormData.append("message", message);

      axios.post(AppUrl.PostContact, MyFormData).then((response) => {
        if (response.status === 200 && response.data === 1) {
          toast.success("Message send successfully");
          sendBtn.innerHTML = "Send";
          this.contactForm.reset();
        }
        else {
          toast.error("error");
          sendBtn.innerHTML = "Send";
        }
      })

    }
  }

  render() {
    return (
      <div className="row no-gutters contact">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Contact Us</h3>
            <div id="form-message-warning" className="mb-4"></div>
            <form method="POST" id="contactForm" name="contactForm" className="contactForm" novalidate="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group"><label className="label" for="name">Full Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" onChange={this.nameOnChange} /> </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group"><label className="label" for="email">Email Address</label>
                    <input onChange={this.emailOnChange} type="email" className="form-control" name="email" id="email" placeholder="Email" /></div>
                </div>
                <div className="col-md-12">
                  <div className="form-group"><label className="label" for="#">Message</label>
                    <textarea onChange={this.messageOnChange} name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea></div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input id="sendBtn" type="submit" className="btn btn-primary" />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
            name:{this.state.name}<br />
            email:{this.state.email}<br />
            message:{this.state.message}
          </div>
        </div>
        <ToastContainer />
        <div className="col-md-5 d-flex "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.4741324546612!2d106.78127815639414!3d10.814946385032917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275b3a69ce75%3A0xfc7063168fc12eaf!2zUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1646497755858!5m2!1svi!2s" width="400" height="400" loading="lazy" style={{ border: 0 }} ></iframe></div>

      </div>
    )
  }
}
