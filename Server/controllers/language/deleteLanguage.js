import Language from "../../models/Language.js";

const deleteLanguage = async (req, res) => {
    try {
        const language = await Language.findById(req.params.id);

        if(!language) {
            return res.status(404).json({ 
                success:false,
                message: "Language not found" 
            });
        }
        await language.remove();
        res.status(200).json({ 
            success:true,
            message: "Language deleted successfully" 
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {deleteLanguage};