import Tutor from "../../models/Tutor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          // res.json({ message: "Fill all the details" });
          return res.redirect(
            "/tutor/login?errorMessage=" +
              encodeURIComponent("Fill all the details")
          );
        }
        
        const existingTutor = await Tutor.findOne({ email });
        if (!existingTutor) {
          // res.json({ message: "Tutor not registered" });
          return res.redirect(
            "/tutor/login?errorMessage=" +
              encodeURIComponent("Tutor not registered")
          );
        }

        let payload = {
          name: existingTutor.name,
          email: existingTutor.email,
          id: existingTutor._id,
        };

        if (await bcrypt.compare(password, existingTutor.password)) {
          let token = jwt.sign(payload, process.env.JWT_SECRET);

            existingTutor.token = token;
            existingTutor.password = undefined;

            // res.cookie("jwt", token, {
            //     httpOnly: true,
            //     maxAge: 1000 * 60 * 60 * 24 * 7,
            //     });
            console.log("user logged in successfully");
            // res.json({ message: "Tutor logged in successfully" });
            // res.redirect("/");
            return res.json({ token });
        }
        else {
          // res.json({ message: "Incorrect Password" });
          return res.redirect(
            "/tutor/login?errorMessage=" +
              encodeURIComponent("Incorrect Password")
          );
        }

    }
    catch (error) {
        console.error(error);
        return res.redirect(
          "/tutor/login?errorMessage=" +
            encodeURIComponent("Internal Server Error")
        );

    }
};

export {login};
