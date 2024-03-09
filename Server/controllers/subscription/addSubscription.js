import Subscription from "../../models/Subscription.js";
import Tutor from "../../models/Tutor.js";
import Student from "../../models/Student.js";
import Language from "../../models/Language.js";

const addSubscription = async (req, res) => {
    try {
        const student = await Student.findById(req.params.sid);
        const tutor = await Tutor.findById(req.params.tid);
        const {languageId, stripeKey, duration, linkId,startTime,endTime} = req.body;
        const langid = await Language.findById(languageId);
        const newSubscription = new Subscription({
            studentId: student._id,
            tutorId: tutor._id,
            languageId: langid._id,
            stripeKey: stripeKey,
            duration: duration,
            linkId: linkId,
            startTime: startTime,
            endTime: endTime
        });
        student.subscriptions.push(newSubscription._id);
        tutor.subscriptions.push(newSubscription._id);
        await student.save();
        await tutor.save();
        await newSubscription.save();
        res.status(200).json({ message: "Subscription added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export {addSubscription};