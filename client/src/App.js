import React, { Component } from 'react';
import AllUsers from './components/AllUsers'
import UserInfo from './components/UserInfo'
import UserRegistration from './components/UserRegistration'

class App extends Component {

  state = {
    data: "",
    allUsers: ""
  }

  updateData = (newData) => {
    this.setState({
      data: newData
    })
  }

  getAllUsers = () => {
    this.setState({
      allUsers: this.state.data
    })
    this.forceUpdate()
  }

  render() {
    return (
      <div style={{margin: '10px', textAlign: 'center'}} className="App">

      <h2>My Express App</h2>
      <UserRegistration setData={this.updateData}/>
      <br />
      <UserInfo data={this.state.data} />     
      <AllUsers setAllUsers={this.getAllUsers} data={this.state.data} />

    </div>
    )
  }
}

export default App;
