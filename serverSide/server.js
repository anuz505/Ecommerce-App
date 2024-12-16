const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
dotenv.config();
app.use(cookieParser());
const authRoutes = require("./routes/auth/auth-routes.js");
const adminProductsRoutes = require("./routes/admin/product-routes.js");
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
app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductsRoutes);
async function startServer() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("The server is connected to the database");
    app.listen(process.env.PORT, () => {
      console.log(`The Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
startServer();
