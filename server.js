const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const keys = require("./keys")
const api = require('./routes/api')
const port = 4000

// connect to mongoose

mongoose.connect(keys.mongoDBUrl, {
    useNewUrlParser: true})
        .then(() => console.log("db connected"));

app.use(express.static("public"))
app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))