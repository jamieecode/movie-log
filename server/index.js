require("dotenv").config();
const { PORT, MONGO_URI } = process.env;

const express = require("express");
const app = express();
const port = PORT || 4000;
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

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

app.use("/server/auth", authRoute);
app.use("/server", postRoute);

app.listen(port, () => {
  console.log("SERVER RUNNING");
});
