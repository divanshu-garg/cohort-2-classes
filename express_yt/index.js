const express = require('express')
const path = require('path')
const app = express()


app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get("/download", function(req, res){
    res.download(path.join(__dirname, 'about.html'))
})


let PORT = process.env.PORT || 3000;

app.listen(PORT)