import Language from "../../models/Language.js";

const getLanguages = async (req, res) => {
    try {
        const languages = await Language.find();
        res.status(200).json(languages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {getLanguages};