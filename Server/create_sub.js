import stripe from 'stripe';

// Initialize Stripe with your secret key
const stripeInstance = stripe('sk_test_51Os5AoSG0liQmqVs7QoDiRUU9ZJGscnQgbPP1it3T69iBGgNPweVfLSlkNFOrCjlyvwv4sN1b28MVMOWcSV85i1900Jh2jqO3C');

async function createSubscriptionPlans() {
  try {
    // Create a product representing your subscription
    const product = await stripeInstance.products.create({
      name: 'Your Product Name',
      type: 'service', // or 'good' for physical goods
    });

    // Create monthly subscription plan
    const monthlyPlan = await stripeInstance.plans.create({
      product: product.id,
      nickname: 'Monthly Plan',
      interval: 'month',
      currency: 'usd',
      amount: 999, // in cents, e.g., $9.99
    });

    // Create yearly subscription plan
    const yearlyPlan = await stripeInstance.plans.create({
      product: product.id,
      nickname: 'Yearly Plan',
      interval: 'year',
      currency: 'usd',
      amount: 9999, // in cents, e.g., $99.99
    });

    console.log('Subscription plans created successfully:');
    console.log('Monthly Plan:', monthlyPlan);
    console.log('Yearly Plan:', yearlyPlan);
  } catch (error) {
    console.error('Error creating subscription plans:', error);
  }
}

// Run the function to create subscription plans
createSubscriptionPlans();
