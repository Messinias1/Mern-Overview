const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const keys = require("./keys")
const User = require("./models/User")
const port = 3000
// connect to mongoose

mongoose.connect(keys.mongoDBUrl, {
    useNewUrlParser: true})
        .then(() => console.log("db connected"));

app.use(express.static("public"))
app.use(bodyParser.json())

// app.get('/', (req, res) => res.send('Hello Carl!'))

// query object
app.post('/api', (req, res) => {
    // const userName = req.body.userName;
    // const message = req.body.message;

    const { username, message } = req.body

    const data = {
        username,
        message
    }
    console.log("data", data)

    const user = new User(data)
        user.save()
        .then(() => res.send(data))
        .catch(err => console.log(err))
})

app.get("/getallusers", function (req, res) {
    User.find()
    .then(results => {
        console.log(results)
        res.send(results)
    })
})

// parameter object
app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username
    console.log(user)

    User.find({username: user})
        .then(result => {
            console.log("showing", user, "profile", result)
            res.send(result)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))