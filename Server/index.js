import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import authenticateToken from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import stripe from "stripe";


const app = express();

dotenv.config();
const port = process.env.PORT || 3000;
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

// Database connection
dbConnect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(authenticateToken);


// Import routes
import studentRoutes from "./routes/studentRoutes.js";
import tutorRoutes from "./routes/tutorRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";
import subscription from "./routes/subscriptionRoutes.js";


// Use routes
app.use("/student", studentRoutes);
app.use("/tutor", tutorRoutes);
app.use("/test", testRoutes);
app.use("/language", languageRoutes);
app.use("/flashcard", flashcardRoutes);
app.use("/subscription", subscription);


// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  app.redirect("/");
}
);

app.post("/create-checkout-session", async (req, res) => {
  const prices = await stripeInstance.prices.list({
    lookup_keys: [req.body.lookup_key],
    expand: ["data.product"],
  });
  const session = await stripeInstance.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: prices.data[0].id,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    currency: "usd",
    // customer: 'Madhusudan',
    mode: "subscription",
    success_url: `http://localhost:3000/?success=true&session_id=4040`,
    cancel_url: `http://localhost:3000/?canceled=true`,
  });
  console.log("session:", session);

  res.redirect(303, session.url);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
