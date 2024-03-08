import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import authenticateToken from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();


// Database connection
dbConnect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(authenticateToken);


// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
