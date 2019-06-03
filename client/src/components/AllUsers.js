import React, { Component } from 'react'

class AllUsers extends Component {

    getAllUsers = () => {
        console.log("Getting All Users", this.props)
    }

    render() {

        

        return(
        <div>
            <h3>Get All Users</h3>
            <button onClick={this.getAllUsers}>Get</button>
            <p id="result"></p>
        </div> 
        )
    }
}
//  function AllUsers() {
//      const getAllUsers = () => {
//          console.log("Getting All Users", this.props)
//      }
//     return (
//         <div>
//             <h3>Get All Users</h3>
//             <button onClick={getAllUsers}>Get</button>
//         </div>
//     )
// }

export default AllUsers