import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import authenticateToken from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";


const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

// Database connection
dbConnect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(authenticateToken);


// Import routes
import studentRoutes from "./routes/studentRoutes.js";
import tutorRoutes from "./routes/tutorRoutes.js";
// import testRoutes from "./routes/testRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";


// Use routes
app.use("/student", studentRoutes);
app.use("/tutor", tutorRoutes);
// app.use("/test", testRoutes);
app.use("/language", languageRoutes);
app.use("/flashcard", flashcardRoutes);


// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  app.redirect("/");
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
