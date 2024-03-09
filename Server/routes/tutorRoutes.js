import express from "express";
import authenticateToken from "../middleware/authMiddleware.js";
import Tutor from "../models/Tutor.js";

const router = express.Router();

import {login} from "../controllers/tutor/loginTutor.js";
import {register} from "../controllers/tutor/registerTutor.js";
import {getDetails} from "../controllers/tutor/getDetails.js";
import {addCourse} from "../controllers/tutor/addCourse.js";
import {addTest} from "../controllers/tutor/addTest.js";
import {addSubscription} from "../controllers/tutor/addSubscription.js";
import {getTutors} from "../controllers/tutor/getTutors.js";

router.get("/login",authenticateToken, async(req, res) => {
    if (res.locals.user) {
      res.redirect(200, "/");
    } else {
      res.redirect(200, "tutor/login");
    }
}
);
router.get("/register",authenticateToken, async(req, res) => {
    if (res.locals.user) {
      res.redirect(200, "/");
    } else {
      res.redirect(200, "tutor/register");
    }
}
);

router.get("/getTutors", getTutors); //ok
router.get("/getDetails/:id", getDetails); //ok
router.post("/addCourse/:id/:lid", addCourse); //ok
router.post("/addTest/:id/:tid", addTest); 
router.post("/addSubscription/:id/:sid", addSubscription);
router.post("/register", register); //ok
router.post("/login", login); //ok

export default router;