import express from "express";
import Language from "../models/Language.js";

const router = express.Router();

import {getLanguages} from "../controllers/language/getLanguages.js";
import {addLanguage} from "../controllers/language/addLanguage.js";
import {deleteLanguage} from "../controllers/language/deleteLanguage.js";
import {updateLanguage} from "../controllers/language/updateLanguage.js";

router.get("/getLanguages", getLanguages); //ok
router.post("/addLanguage", addLanguage); //ok
router.delete("/deleteLanguage/:id", deleteLanguage); //ok
router.put("/updateLanguage/:id", updateLanguage); //ok

export default router;