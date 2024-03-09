import Test from "../../models/Test.js";

const createTest = async (req, res) => {

    const studentId = req.params.sid;
    const tutorId = req.params.tid;
    const languageId = req.params.lid;

    const questions = req.body.questions.map(qn => {
        const { questionno, question, options, correctoption, feedback } = qn;
        return { questionno,question, options, correctoption, feedback };
    });
    
    const test = new Test({
        tutorID: tutorId,
        languageID: languageId,
        studentID: studentId,
        testdata: questions,
        testTaken: false
    });

    try {
        await test.save();
        res.status(201).json(test);
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

export {createTest};