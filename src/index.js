const express = require('express')
const mongoose = require("mongoose");
const router = require('./routes/chicken')
var app = express()

app.get('/', function (req,res) {
    res.send('test')
})

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

mongoose.connection.once('open', function () {
    console.log('db setup')
}).on('error', function (err) {
    console.log('Error', err)
})

app.listen(8080, function () {
    console.log('server up')
})

app.use("/", router)