import Subscription from "../../models/Subscription.js";
import Tutor from "../../models/Tutor.js";
import Student from "../../models/Student.js";


const deleteSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        const tutor = await Tutor.findById(subscription.tutorId);
        const student = await Student.findById(subscription.studentId);

        tutor.subscriptions.pull(subscription._id);
        student.subscriptions.pull(subscription._id);
        
        await tutor.save();
        await student.save();
        await subscription.remove();
        res.status(200).json({ message: "Subscription deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export {deleteSubscription};