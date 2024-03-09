import FlashCard from '../../models/FlashCard.js';

const updateFlashCard = async (req, res) => {
    try {
        const card = await FlashCard.findById(req.params.id);

        if(!card) {
            return res.status(404).json({ 
                success:false,
                message: "Flash Card not found" 
            });
        }
        card.title = req.body.title;
        card.data = req.body.data;
        const updatedCard = await card.save();
        res.status(200).json(updatedCard);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {updateFlashCard};