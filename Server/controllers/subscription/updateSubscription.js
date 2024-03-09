import Subscription from "../../models/Subscription.js";

const updateSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        const {languageId, stripeKey, duration, linkId} = req.body;
        subscription.languageId = languageId;
        subscription.stripeKey = stripeKey;
        subscription.duration = duration;
        subscription.linkId = linkId;
        await subscription.save();
        res.status(200).json({ message: "Subscription updated successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export {updateSubscription};