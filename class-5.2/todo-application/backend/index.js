// write basic express boilerplate code with express.json middleware

let { createTodo, updateTodo } = require('./types.js');
let express = require("express");
let app = express();

app.use(express.json());

// app.get('/todo', function(req, res){
//     res.send("Welcome to our first todo app")
// })

app.post("todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: " You sent the wrong inputs" });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", function (req, res) {
  res.send("create a todo");
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
  if (parsedPayload.success) {
    res.status(411).json({ msg: " You sent the wrong inputs" });
    return;
  }

  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "Todo marked as completed"
  })
});

app.listen(3000);
