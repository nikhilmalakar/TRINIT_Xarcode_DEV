import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subscriptions:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription"
        }
    ],
    mytests:[
        {
            testid : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Test"
            },
            myoptions:[
                {
                    questionNo: {
                        type: Number
                    },
                    selectedOption: {
                        type: Number
                    },
                }  
            ],
            myscore:{
                type: Number
            },
        }
    ],
})
const Student = mongoose.model("Student", studentSchema);
export default Student;