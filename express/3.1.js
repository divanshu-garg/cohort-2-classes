const express = require('express')
const zod = require('zod')
const app = express()

app.use(express.json())

// const schema = zod.array(zod.number())

/* {
    email:
    password
    country: in or us
}
 */

const schema = zod.object({
    email: zod.string().email,
    password: zod.string().min(8),
    country: zod.literal("IN").or.zod.literal("US"),
    kidneys: zod.array(zod.number())
})

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({msg: "input is invalid"})
    } else {
        
        res.send({response})
    }
    
    // const kidneyLength = kidneys.length;
    // res.send("your kidneys length is: " + kidneyLength)
})



app.listen(3000)