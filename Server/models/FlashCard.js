import mongoose from 'mongoose';

const flashCardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
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
    },
    tutorID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

export default FlashCard;