import express from 'express';
import Subscription from "../models/Subscription.js";
import Tutor from "../models/Tutor.js";
import Student from "../models/Student.js";

const router = express.Router();

import {addSubscription} from "../controllers/subscription/addSubscription.js";
import {getSubscription} from "../controllers/subscription/getSubscriptions.js";
import {getSubscriptionById} from "../controllers/subscription/getSubscriptionById.js";
import {deleteSubscription} from "../controllers/subscription/deleteSubscription.js";
import {updateSubscription} from "../controllers/subscription/updateSubscription.js";


router.get("/getSubscription", getSubscription);
router.get("/getSubscriptionById/:id", getSubscriptionById);
router.post("/addSubscription/:sid/:tid", addSubscription);
router.delete("/deleteSubscription/:id", deleteSubscription);
router.put("/updateSubscription/:id", updateSubscription);

export default router;