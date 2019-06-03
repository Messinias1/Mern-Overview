import React, { Component } from 'react'

 class UserRegistration extends Component {

    state = {
          userName: '',
          message: ''
      
    }
      handleSubmit = () => {
        console.log("submit clicked", this.state)
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