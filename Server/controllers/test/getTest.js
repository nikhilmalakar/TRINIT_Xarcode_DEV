import Test from "../../models/Test.js";

const getTest = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        res.status(200).json(test);
    } catch (error) {
        res.status(404).json({
        message: error.message
        });
    }
    };

export {getTest};