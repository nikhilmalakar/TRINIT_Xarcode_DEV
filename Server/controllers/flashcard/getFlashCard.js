import FlashCard from "../../models/FlashCard.js";
import Student from "../../models/Student.js";
import Language from "../../models/Language.js";


const getFlashCard = async (req, res) => {
    try {
        const { id, lid } = req.params;

        const studentID = await Student.findById(id);
        const languageID = await Language.findById(lid);
        // console.log(studentId, languageId);
        if(!studentID || !languageID) {
            return res.status(404).json({ message: "Student or Language not found" });
        }
        const flashCard = await FlashCard.find({ studentID, languageID });
        res.status(200).json(flashCard);
    } catch (error) {
        res.status(404).json({
        message: error.message
        });
    }
    }

export {getFlashCard};