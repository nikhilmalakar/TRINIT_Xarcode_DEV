import Subscription from "../../models/Subscription.js";

const getSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.find();
        res.status(200).json(subscription);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export {getSubscription};