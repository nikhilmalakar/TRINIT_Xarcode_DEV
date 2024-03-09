import express from 'express';
import dotenv from 'dotenv';
import { createSubscriptionPlans } from './controllers/tutor.js';
import stripe from 'stripe';

dotenv.config();
const stripeInstance = stripe('sk_test_51Os5AoSG0liQmqVs7QoDiRUU9ZJGscnQgbPP1it3T69iBGgNPweVfLSlkNFOrCjlyvwv4sN1b28MVMOWcSV85i1900Jh2jqO3C');
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post("/tutor/createSubscriptionPlan", createSubscriptionPlans);
app.post('/create-checkout-session', async (req, res) => {
    const prices = await stripeInstance.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ['data.product'],
    });
    const session = await stripeInstance.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: prices.data[0].id,
                // For metered billing, do not pass quantity
                quantity: 1,
                
            },
        ],
        currency: 'usd',
        // customer: 'Madhusudan',
        mode: 'subscription',
        success_url: `http://localhost:3000/?success=true&session_id=4040`,
        cancel_url: `http://localhost:3000/?canceled=true`,
    });
    console.log('session:', session);
    
  
    res.redirect(303, session.url);
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});