const express = require("express")
const router = express.Router()
const User = require('../models/User')

router.get("/", (req, res) => {
    res.send("Api route working")
})

// query object
router.post('/', (req, res) => {
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

router.get("/getallusers", function (req, res) {
    User.find()
    .then(results => {
        console.log(results)
        res.send(results)
    })
})

// parameter object
router.get('/showprofile/:username', (req, res) => {
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

module.exports = router