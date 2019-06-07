import React from 'react'

function AllUsers(props) {

    var result = ""

    const getAllUsers = () => {
        console.log("Getting All Users")
        result = props.data
        console.log("result", result)
        props.setAllUsers()
    }

    return (
                <div>
            <h3>Get All Users</h3>
            <button onClick={getAllUsers}>Get</button>
            <br />
            {result}
        </div> 
    )
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