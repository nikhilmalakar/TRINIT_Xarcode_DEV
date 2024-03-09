import Test from "../../models/Test.js";

const deleteTest = async (req, res) => {
    const id = req.params.id;
    try {
        await Test.findByIdAndRemove(id);
        res.status(200).json("Test has been deleted");
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

export {deleteTest};