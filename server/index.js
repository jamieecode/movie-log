require("dotenv").config();
const { PORT, MONGO_URI } = process.env;

const express = require("express");
const app = express();
const port = PORT || 4000;
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((error) => console.error(error));

app.get("/login", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/register", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(port, () => {
  console.log("SERVER RUNNING");
});
