import Tutor from "../../models/Tutor.js";
import Test from "../../models/Test.js";

const addTest = async (req, res) => {
    const id = req.params.id;
    const tid = req.params.tid;
    try {
        const tutor = await Tutor.findById(id);
        const test = await Test.findById(tid);
        tutor.tests.push(test._id);
    
        await tutor.save();
        res.status(200).json({
        message: "Test added successfully",
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error",
        });
    }
    }

export { addTest };