import Tutor from "../../models/Tutor.js";

const getTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find();
        res.status(200).json(tutors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }

export {getTutors};