import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
    required: true,
  },
  languageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true,
  },
  stripeKey: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  linkId: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;