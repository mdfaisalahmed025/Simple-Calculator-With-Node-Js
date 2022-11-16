require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const sumRouter = require("./routes/sumRoute");
const multiplyRouter = require("./routes/multiRoute");
const divisionRouter = require("./routes/divisionRouter");
const SubtructRouter = require("./routes/subRoute");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static("/public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", sumRouter);
app.use("/multiplication", multiplyRouter);
app.use("/division", divisionRouter);
app.use("/subtruct", SubtructRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
