import Student from "../../models/Student.js";
import Test from "../../models/Test.js";

const giveTest = async (req, res) => {
    const id = req.params.id;
    const tid = req.params.tid;
    try {
        const student = await Student.findById(id);
        const test = await Test.findById(tid);

        const {q1,q2,q3,q4,q5} = req.body;
        const myoptions = [
            {questionNo: 1, selectedOption: q1},
            {questionNo: 2, selectedOption: q2},
            {questionNo: 3, selectedOption: q3},
            {questionNo: 4, selectedOption: q4},
            {questionNo: 5, selectedOption: q5}
        ];
        let myscore = 0;
        for(let i=0;i<5;i++){
            if(myoptions[i].selectedOption === test.testdata[i].correctoption){
                myscore++;
            }
        }
        student.mytests.push({
            testid: test._id,
            myoptions: myoptions,
            myscore: myscore
        });

        await student.save();
        
        res.status(200).json({
        message: "Test added successfully",
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error",
        });
    }
}

export { giveTest };