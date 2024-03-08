import mongoose from 'mongoose';
const testSchema = new mongoose.Schema({
    tutorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true
    },
    languageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        required: true
    },
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    testTaken: {
        type: Boolean,
        default: false
    },
    testdata: [{
        questionno: {
            type: Number,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctoption: {
            type: Number,
            required: true
        },
        feedback: {
            type: String,
            required: true
        }
    }]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;