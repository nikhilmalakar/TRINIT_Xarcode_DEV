import express from "express";
import authenticateToken from "../middleware/authMiddleware.js";
import Student from "../models/Student.js";
const router = express.Router();


import {login} from "../controllers/student/loginStudent.js";
import {register} from "../controllers/student/registerStudent.js";
import {getDetails} from "../controllers/student/getDetails.js";
import {addSubscription} from "../controllers/student/addSubscription.js";
import {giveTest} from "../controllers/student/giveTest.js";



router.get("/getDetails/:id", getDetails); //ok
router.post("/addSubscription/:id/:sid", addSubscription);
router.post("/giveTest/:id/:tid", giveTest);
router.post("/register", register); //ok
router.post("/login", login); //ok

export default router;

