import React, { Component } from 'react';
import AllUsers from './components/AllUsers'
import UserInfo from './components/UserInfo'
import UserRegistration from './components/UserRegistration'

class App extends Component {

  state = {
    data: "",
    allUsers: "",
    pageView: ""
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

      <a style={{ margin: "10px" }} href="#" onClick={() => this.setState({ pageView: <UserRegistration setData={this.updateData}/> })}>Register</a>
      
      <a style={{ margin: "10px" }} href="#" onClick={() => this.setState({ pageView:  <UserInfo data={this.state.data} /> })}>User Info</a>
      
      <a style={{ margin: "10px" }} href="#" onClick={() => this.setState({ pageView:  <AllUsers setAllUsers={this.getAllUsers} data={this.state.data} />})}>All Users</a>
      <br />
      {this.state.pageView}
    </div>
    )
  }
}

export default App;
