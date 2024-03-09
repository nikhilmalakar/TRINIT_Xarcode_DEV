import Subscription from "../../models/Subscription.js";


const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        res.status(200).json(subscription);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export {getSubscriptionById};