const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
dotenv.config();
app.use(cookieParser());

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

async function startServer() {
  try {
    await mongoose.connect(process.env.conectionstring);
    console.log("The server is connected to the database");
    app.listen(process.env.PORT, () => {
      console.log(`The Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
startServer();
