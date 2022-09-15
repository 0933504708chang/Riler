import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div class="profile">
          <h2 class="text-center">PROFILE </h2>
          <ul class="list-group">
            <li class="list-group-item">Name :  mai </li>
            <li class="list-group-item">Email :  titosbi@yahoo.com <button class="btn btn-success"> All Orders</button></li>
          </ul>
        </div>
      </div>
    )
  }
}
