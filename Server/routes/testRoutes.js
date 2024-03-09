import express from "express";
import Test from "../models/Test.js";

const router = express.Router();

import {getTests} from "../controllers/test/getTests.js";
import {getTest} from "../controllers/test/getTest.js";
import {createTest} from "../controllers/test/createTest.js";
import {deleteTest} from "../controllers/test/deleteTest.js";
import {updateTest} from "../controllers/test/updateTest.js";


router.get("/getTests", getTests); //ok
router.get("/getTest/:id", getTest); //ok
router.post("/createTest/:sid/:tid/:lid", createTest); //ok
router.delete("/deleteTest/:id", deleteTest); //ok
router.put("/updateTest/:id", updateTest); //ok

export default router;