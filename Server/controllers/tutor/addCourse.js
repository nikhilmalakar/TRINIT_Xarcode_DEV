import Tutor from "../../models/Tutor.js";
import Language from "../../models/Language.js";
import stripe from "stripe";


const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const createSubscriptionPlans = async (lang_id ,duration1, price1,duration2, price2,duration3, price3) => {
  try {
    
    const product1 = await stripeInstance.products.create({
      name: lang_id + " " + duration1 + " mins",
      type: "service", 
    });
    const product2 = await stripeInstance.products.create({
      name: lang_id + " " + duration2 + " mins",
      type: "service", 
    });
    const product3 = await stripeInstance.products.create({
      name: lang_id + " " + duration3 + " mins",
      type: "service",
    });



    const monthlyPlan1 = await stripeInstance.plans.create({
      product: product1.id,
      nickname: "Monthly Plan",
      interval: "month",
      currency: "usd",
      amount: price1 * 100,
    });
    const monthlyPlan2 = await stripeInstance.plans.create({
      product: product2.id,
      nickname: "Monthly Plan",
      interval: "month",
      currency: "usd",
      amount: price2 * 100,
    });
    const monthlyPlan3 = await stripeInstance.plans.create({
      product: product3.id,
      nickname: "Monthly Plan",
      interval: "month",
      currency: "usd",
      amount: price3 * 100,
    });

    console.log("Subscription plans created successfully:");
    // console.log("Monthly Plan:", monthlyPlan1.id);
    // console.log("Monthly Plan:", monthlyPlan2.id);
    // console.log("Monthly Plan:", monthlyPlan3.id);

    return [monthlyPlan1.id,monthlyPlan2.id,monthlyPlan3.id];
  } catch (error) {
    console.error("Error creating subscription plans:", error);
  }
};

export const addCourse = async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        const language = await Language.findById(req.params.lid);
        
        
        const {proficency,stripe_key1, duration1,cost1, stripe_key2, duration2, cost2, stripe_key3, duration3, cost3} = req.body;   
        
        const stripeKeys  = await createSubscriptionPlans(language.name,duration1, cost1,duration2, cost2,duration3, cost3);

        const newCourse = {
          languageID: language._id,
          proficiencyLevel: proficency,
          prices: [
            {
              stripe_product_key: stripeKeys[0],
              duration: duration1,
              cost: cost1,
            },
            {
              stripe_product_key: stripeKeys[1],
              duration: duration2,
              cost: cost2,
            },
            {
              stripe_product_key: stripeKeys[2],
              duration: duration3,
              cost: cost3,
            },
          ],
        };

        tutor.languages.push(newCourse);

        
        await tutor.save();
        res.status(200).json({ message: "Course added successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export default addCourse;