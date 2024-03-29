import Student from "../../models/Student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;
        // console.log(email, password);
        if (!email || !password) {
          // res.json({ message: "Fill all the details" });
          return res.redirect(
            "/student/login?errorMessage=" +
              encodeURIComponent("Fill all the details")
          );
        }
        
        const existingStudent = await Student.findOne({ email });
        if (!existingStudent) {
          // res.json({ message: "Student not registered" });
          return res.redirect(
            "/student/login?errorMessage=" +
              encodeURIComponent("Student not registered")
          );
        }

        let payload = {
          name: existingStudent.name,
          email: existingStudent.email,
          id: existingStudent._id,
        };

        if (await bcrypt.compare(password, existingStudent.password)) {
          let token = jwt.sign(payload, process.env.JWT_SECRET);

          existingStudent.token = token;
          existingStudent.password = undefined;

          // res.cookie("jwt", token, {
          //   httpOnly: true,
          //   maxAge: 1000 * 60 * 60 * 24 * 7,
          // });

          
          // res.json({message:"logged in succesfully"});
          console.log("user logged in successfully");
          // res.redirect("/");
          return res.json({ token, id: existingStudent._id });
        } else {
          // res.json({ message: "Incorrect Password" });
          return res.redirect(
            "/student/login?errorMessage=" +
              encodeURIComponent("Incorrect Password")
          );
        }
        
    } catch (error) {
        console.error(error);
        return res.redirect(
          "/student/login?errorMessage=" +
            encodeURIComponent("Internal Server Error")
        );

    }
};

export {login};