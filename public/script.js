function getUserInfo() {
   const input = document.getElementById("userName").value;

   axios.get("/showprofile/" + input)
    .then(response => {
        console.log("axios", response.data)
        document.getElementById("results").innerHTML = JSON.stringify(response.data) + input;
    })
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

    axios.get("getallusers")
        .then(response => {
            document.getElementById('result').innerHTML = JSON.stringify(response.data)
        })
}