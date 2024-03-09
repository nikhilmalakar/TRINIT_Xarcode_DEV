import express from "express";
import Language from "../models/Language.js";

const router = express.Router();

import {getLanguages} from "../controllers/language/getLanguages.js";
import {addLanguage} from "../controllers/language/addLanguage.js";
import {deleteLanguage} from "../controllers/language/deleteLanguage.js";
import {updateLanguage} from "../controllers/language/updateLanguage.js";

router.get("/getLanguages", getLanguages);
router.post("/addLanguage", addLanguage);
router.delete("/deleteLanguage/:id", deleteLanguage);
router.put("/updateLanguage/:id", updateLanguage);

export default router;