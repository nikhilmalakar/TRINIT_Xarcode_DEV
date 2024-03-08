import Student from "../../models/Student.js";


const getDetails = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if(!student) {
            return res.status(404).json({ 
                success:false,
                message: "Student not found" 
            });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {getDetails};