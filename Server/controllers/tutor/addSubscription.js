import Tutor from "../../models/Tutor.js";
import Subscription from "../../models/Subscription.js";

const addSubscription = async (req, res) => {
    const id = req.params.id;
    const subid = req.params.sid;
    try {
        const tutor = await Tutor.findById(id);
        const subscription = await Subscription.findById(subid);
        tutor.subscriptions.push(subscription._id);

        await tutor.save();
        res.status(200).json({
        message: "Subscription added successfully",
        });

    }
    catch (error) {
        res.status(500).json({
        message: "Internal server error",
        });
    }
}

export { addSubscription };