import FlashCard from '../../models/FlashCard.js';

const deleteFlashCard = async (req, res) => {
    try {
        const card = await FlashCard.findById(req.params.id);

        if(!card) {
            return res.status(404).json({ 
                success:false,
                message: "Flash Card not found" 
            });
        }
        await card.remove();
        res.status(200).json({ 
            success:true,
            message: "Flash Card deleted successfully" 
        });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}   

export {deleteFlashCard};