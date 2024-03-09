import FlashCard from '../../models/FlashCard.js';

const getFlashCards = async (req, res) => {
    try {
        const flashCards = await FlashCard.find();
        res.status(200).json(flashCards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getFlashCards};