import Language from "../../models/Language.js";

const updateLanguage = async (req, res) => {
    try {
        const language = await Language.findById(req.params.id);

        if(!language) {
            return res.status(404).json({ 
                success:false,
                message: "Language not found" 
            });
        }
        language.name = req.body.name;
        const updatedLanguage = await language.save();
        res.status(200).json(updatedLanguage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {updateLanguage};