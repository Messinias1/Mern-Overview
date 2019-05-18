const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello Carl!'))

var data = [];

// query object
app.post('/api', (req, res) => {
    const userName = req.body.userName;
    const userId = req.body.userId;
    const message = req.body.message;

    const temp = {
        userName,
        userId,
        message
    }

    data.push(temp)
    console.log(data)

    // console.log(userName)
    // console.log(userId)
    // console.log(message)
    const reply = `${userName} with id of ${userId} is saying ${message}!`
    res.send(reply)
})

app.get("/getallusers", function (req, res) {
    res.send(data)
})

// parameter object
app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username
    console.log(user)
    res.send('show profile working')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))