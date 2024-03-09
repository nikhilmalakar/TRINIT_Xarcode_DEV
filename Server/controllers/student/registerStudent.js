import Student from "../../models/Student.js";
import bcrypt from "bcrypt";


const register = async (req, res) => {
    try{
        const {name, age, email, password} = req.body;
        if (!name || !age || !email || !password) {
            // res.json({ message: "Fill all the details" });
            return res.redirect(
              "/student/register?errorMessage=" +
                encodeURIComponent("Fill all the details")
            );
        }
        const existingStudent = await Student.findOne({ email });
        
        if (existingStudent) {
            // res.json({ message: "Student already registered" });
            return res.redirect(
              "/student/register?errorMessage=" +
                encodeURIComponent("Student already registered")
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newStudent = new Student({
            name,
            age,
            email,
            password: hashedPassword,
        });
        await newStudent.save();
        console.log("Student registered successfully");
        // res.json({ message: "Student registered successfully" });
        res.redirect("/student/login");
        
    }
    catch(error){
        console.error(error);
        return res.redirect(
          "/student/register?errorMessage=" +
            encodeURIComponent("Internal Server Error")
        );
    }
};


export {register};