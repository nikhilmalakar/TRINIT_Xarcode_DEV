import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  languages: [
    {
      languageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        required: true,
      },
      proficiencyLevel: {
        type: Number,
        required: true,
      },
      prices: [
        {
          stripe_product_key: {
            type: String,
            required: true,
          },
          duration: {
            type: Number,
            required: true,
          },
          cost: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
  ],
  availability: {
    startTime: { 
        type: String, 
        required: true 
    },
    endTime: { 
        type: String, 
        required: true 
    },
    occupiedSlots: [
      {
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        studentID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
          required: true,
        },
      },
    ],
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  IFSC: {
    type: String,
    required: true,
  },
});

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;