import Test from "../../models/Test.js";

const updateTest = async (req, res) => {
    const id = req.params.id;
    
    const questions = req.body.questions.map((qn) => {
      const { questionno, question, options, correctoption, feedback } =
        qn;
      return { questionno,question, options, correctoption, feedback };
    });

    // const test = {
    //     testdata: questions,
    // };

    try {
        await Test.findByIdAndUpdate(
            {_id: id},
            {testdata: questions},
            
        )

        res.status(200).json("Test has been updated");
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

export { updateTest };