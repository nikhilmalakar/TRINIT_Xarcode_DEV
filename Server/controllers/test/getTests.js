import Test from "../../models/Test.js";

const getTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json({
        tests: tests,
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error",
        });
    }
    }

export { getTests };