import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const SubscribeButton = ({ priceId }) => {
  const stripe = useStripe();

  const handleSubscribe = async () => {
    try {

      // Make a POST request to your server to create a Checkout Session
      const response = await axios.post('http://localhost:3000/create-checkout-session', {
        priceId: priceId,
      });

      // Redirect the user to the Stripe Checkout page
      window.location = `https://checkout.stripe.com/${response.data.sessionId}`;
    } catch (error) {
      console.error('Error creating Checkout Session:', error.message);
      // Handle error (e.g., show an error message to the user)
    }
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/failure',
    });

    if (error) {
      console.error('Error redirecting to checkout:', error.message);
    }
  };

  return (
    <button onClick={handleSubscribe}>
      Subscribe
    </button>
  );
};

export default SubscribeButton;