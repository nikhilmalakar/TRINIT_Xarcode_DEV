import Student from "../../models/Student.js";
import Subscription from "../../models/Subscription.js";


const addSubscription = async (req, res) => {
    const id = req.params.id;
    const subid = req.params.sid;
    try {
        const student = await Student.findById(id);
        const subscription = await Subscription.findById(subid);

        student.subscriptions.push(subscription._id);
        await student.save();
        
        res.status(200).json({
        message: "Subscription added successfully",
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error",
        });
    }
}

export { addSubscription };