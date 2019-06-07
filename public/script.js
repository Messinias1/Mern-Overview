function getUserInfo() {
    const input = document.getElementById("userName").value;
    const url = "/api/showprofile/" + input;
    axios.get(url)
      .then(response => {
        document.getElementById("results").innerHTML = JSON.stringify(response.data);
      })
   }
   

// function displayUsers(userData, id) {
//     const listItems = userData.map(element => {
//         return ("<li>" 
//         + "Name: " + element.username + " "
//         + "Message: " + (element.message ? element.message : " " +
//         element.username + " did not leave a message.") +
//          "</li>")
//     })

//     document.getElementById(id).innerHTML = "<ul>" + listItems.join("\n") + "</ul>"
// }

function displayUsers(userData, id) {
       let header = document.getElementById('result').innerHTML =
            "<tr>" 
             + "<th>" + "Name " + "</th>"
             + "<th>" + "Message " + "</th>"
             + "</tr>"
             + "<tr>"
             + "<th>" + "-------" + "</th>"
             + "<th>" + "-------" + "</th>"
             + "</tr>" 

             const listItems = userData.map(element => {
             return ("<tr>" 
             + "<th>" + element.username + "</th>"
             + "<th>" + (element.message ? element.message : " " 
             + element.username + " did not leave a message.") + "</th>"
             + "</tr>"
             )
        })
    
        document.getElementById(id).innerHTML =  "<table style='width:100%'>" + header + listItems.join("\n") + "</table>"
    }

function handleSubmit() {
    const username = document.getElementById("user-name").value
    // const userId = document.getElementById("user-id").value
    const message = document.getElementById("message").value
    console.log(username, message)

    const payload = {
        username,
        // userId,
        message
    }

    axios.post("/api", payload)
        .then(response => {
            console.log(response.data)
        })
}

function getAllUsers() {

    axios.get("/api/getallusers")
        .then(response => {
            displayUsers(response.data, "result")
        })
}