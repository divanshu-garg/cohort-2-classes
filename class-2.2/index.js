const express = require("express");
const app = express()
const port = 3000

// create a todo app that lets users store todos on the server
app.get('/', function(req, res) {
    res.send('Hello World!')
  })

app.post('/backend-api/conversation', function(req, res) {
    // runs a machine learning model
    res.send('Hello World!')
  })
  
  app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
  })