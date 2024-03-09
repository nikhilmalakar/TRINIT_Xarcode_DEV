import stripe from 'stripe';

// Initialize Stripe with your secret key
const stripeInstance = stripe('sk_test_51Os5AoSG0liQmqVs7QoDiRUU9ZJGscnQgbPP1it3T69iBGgNPweVfLSlkNFOrCjlyvwv4sN1b28MVMOWcSV85i1900Jh2jqO3C');

export const createSubscriptionPlans = async (req, res) => {
    try {
        const {
            tutor_id, 
            lang_id, 
            duration,
            price,
        } = req.body;
    // console.log('tutor_id:', tutor_id);
    // console.log('lang_id:', lang_id);
    // console.log('duration:', duration);
    // console.log('price:', price);
    // Create a product representing your subscription
    const product = await stripeInstance.products.create({
      name: lang_id + ' ' + duration + ' mins',
      type: 'service', // or 'good' for physical goods
    });

    // Create monthly subscription plan
    const monthlyPlan = await stripeInstance.plans.create({
      product: product.id,
      nickname: 'Monthly Plan',
      interval: 'month',
      currency: 'usd',
      amount: parseInt(price) * 100, // in cents, e.g., $9.99
    });

    console.log('Subscription plans created successfully:');
    console.log('Monthly Plan:', monthlyPlan.id);
  } catch (error) {
    console.error('Error creating subscription plans:', error);
  }
}

// Run the function to create subscription plans
// createSubscriptionPlans();
// export { createSubscriptionPlans };
