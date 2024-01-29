const express = require('express');
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number());
  
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)
  res.send({
    response
  })
});


// app.get("/health-checkup", function(req, res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.KidneyId;

//     if (!(username === 'harkirat && password === pass')) {
//         res.status(400).json({"msg": "somethings up with your inputs"})
//         return
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({"msg": "Somethings up with your ionputs"})
//         return
//       }
//       // do something with kidney here
//       res.json({
//         msg: "Your kidney is fine!"
//       })
// })

app.listen(3000)