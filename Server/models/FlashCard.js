import mongoose from 'mongoose';

const flashCardSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    languageID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

module.exports = FlashCard;