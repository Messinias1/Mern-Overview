import React, { Component } from 'react';
import AllUsers from './components/AllUsers'
import UserInfo from './components/UserInfo'
import UserRegistration from './components/UserRegistration'

class App extends Component {

  render() {
    return (
      <div style={{margin: '10px', textAlign: 'center'}} className="App">

      <h2>My Express App</h2>
      <UserInfo />
      <UserRegistration />
      <AllUsers />

    </div>
    )
  }
}

export default App;
