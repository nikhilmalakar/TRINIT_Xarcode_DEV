import Tutor from "../../models/Tutor.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
    try{
        const {name, age, yoe, email, password, availiablityS, availiablityE, accNo, holderName, IFSC} = req.body;
        console.log(req.body);
        if (!name || !age || !email || !password || !yoe || !availiablityS || !availiablityE || !accNo || !holderName || !IFSC) {
            // res.json({ message: "Fill all the details" });
            return res.redirect(
              "/tutor/register?errorMessage=" +
                encodeURIComponent("Fill all the details")
            );
        }
        const existingTutor = await Tutor.findOne({ email });
        
        if (existingTutor) {
            // res.json({ message: "Tutor already registered" });
            return res.redirect(
              "/tutor/register?errorMessage=" +
                encodeURIComponent("Tutor already registered")
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newTutor = new Tutor({
            name,
            age,
            yearsOfExperience: yoe,
            email,
            password: hashedPassword,
            availability: {
                startTime: availiablityS,
                endTime: availiablityE,
            },
            bankDetails: {
                accountNumber: accNo,
                accountHolderName: holderName,
                IFSCCode: IFSC,
            },
        });
        await newTutor.save();
        console.log("Tutor registered successfully");
        // res.json({ message: "Tutor registered successfully" });
        // res.redirect("/tutor/login");
        
    }
    catch(error){
        console.error(error);
        return res.redirect(
          "/tutor/register?errorMessage=" +
            encodeURIComponent("Internal Server Error")
        );
    }
};

export {register};