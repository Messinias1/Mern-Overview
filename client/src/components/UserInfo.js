import React, { Component } from 'react'

export default class UserInfo extends Component {

    state = {
          userName: ''
        }
      

      getUserInfo = () => {
        console.log("user info button clicked", this.state)
      }

    render() {
        return (
            <div>
            <input onChange={e => this.setState({userName: e.target.value})}
               placholder="user name" type="text"/>
            <button onClick={this.getUserInfo}>Get User Info</button>
            </div>
        )
      }
    }