const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => res.send('Hello Carl!'))

// query object
app.get('/api', (req, res) => {
    const userName = req.query.username;
    const userId = req.query.id;
    const message = req.query.message;
    // console.log(userName)
    // console.log(userId)
    // console.log(message)
    const reply = `${userName} with id of ${userId} is saying ${message}!`
    res.send(reply)
})

// parameter object
app.get('/showprofile/:username', (req, res) => {
    const user = req.params.username
    console.log(user)
    res.send('show profile working')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))