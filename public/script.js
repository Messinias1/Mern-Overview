function getUserInfo() {
   const input = document.getElementById("userName").value;

   axios.get("/showprofile/" + input)
    .then(response => {
        console.log("axios", response.data)
    })
}