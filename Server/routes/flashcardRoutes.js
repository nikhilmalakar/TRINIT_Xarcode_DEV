import express from 'express';
import FlashCard from '../models/FlashCard.js';


const router = express.Router();

import {getFlashCards} from '../controllers/flashcard/getFlashCards.js';
import {getFlashCard} from '../controllers/flashcard/getFlashCard.js';
import {addFlashCard} from '../controllers/flashcard/addFlashCard.js';
import {deleteFlashCard} from '../controllers/flashcard/deleteFlashCard.js';
import {updateFlashCard} from '../controllers/flashcard/updateFlashCard.js';

router.get('/getFlashCards', getFlashCards); //ok
router.get("/getFlashCard/:id/:lid", getFlashCard); //ok
router.post('/addFlashCard/:id/:lid', addFlashCard); //ok
router.delete('/deleteFlashCard/:id', deleteFlashCard); //ok
router.put('/updateFlashCard/:id', updateFlashCard); //ok

export default router;