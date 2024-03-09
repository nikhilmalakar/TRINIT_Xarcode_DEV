import Language from "../../models/Language.js";

const addLanguage = async (req, res) => {
    const language = new Language({
        name: req.body.name
    });

    try {
        const newLanguage = await language.save();
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export {addLanguage};