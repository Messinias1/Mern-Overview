import React, { Component } from 'react'
import axios from 'axios'

 class UserRegistration extends Component {

    state = {
          userName: '',
          message: ''
      
    }
      handleSubmit = () => {
        console.log("submit clicked", this.state)

        const data = {
          username: this.state.userName,
          message: this.state.message
        }

        axios.post('/api', data)
          .then(res => console.log(res.data))

        const newUser = "Name: " + this.state.userName + " | " + "Message: " + this.state.message
        this.props.setData(newUser)
      }

    render() {
        return (
            <div>
            <h3>User Registration</h3>
                <input onChange={e => this.setState({ userName: e.target.value })} 
                type="text" placeholder="user name" id="user-name" />

                <input onChange={e => this.setState({ message: e.target.value })} 
                type="text" id="message" placeholder="message" />

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default UserRegistration