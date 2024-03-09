import Tutor from "../../models/Tutor.js";

const getDetails = async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);

        if(!tutor) {
            return res.status(404).json({ 
                success:false,
                message: "Tutor not found" 
            });
        }
        res.status(200).json(tutor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {getDetails};