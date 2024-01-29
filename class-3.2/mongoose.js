const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://divanshugarg49:divanshu2004@cluster0.cuzxppy.mongodb.net/"
);

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Divanshu Garg",
  email: "divanshugarg@gmail.com",
  password: "pass",
});
user.save();
