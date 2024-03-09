import FlashCard from '../../models/FlashCard.js';

const addFlashCard = async (req, res) => {
    const { id, lid, tid } = req.params;
    const { title, data } = req.body;

    const newFlashCard = new FlashCard({
        title,
        data,
        studentID: id,
        languageID: lid,
        tutorID: tid
    });

    try {
        await newFlashCard.save();
        res.status(201).json(newFlashCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export {addFlashCard};