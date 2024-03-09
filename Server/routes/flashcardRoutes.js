import express from 'express';
import FlashCard from '../models/FlashCard.js';


const router = express.Router();

import {getFlashCards} from '../controllers/flashcard/getFlashCards.js';
import {addFlashCard} from '../controllers/flashcard/addFlashCard.js';
import {deleteFlashCard} from '../controllers/flashcard/deleteFlashCard.js';
import {updateFlashCard} from '../controllers/flashcard/updateFlashCard.js';

router.get('/getFlashCards', getFlashCards);
router.post('/addFlashCard/:id/:lid/:tid', addFlashCard);
router.delete('/deleteFlashCard/:id', deleteFlashCard);
router.put('/updateFlashCard/:id', updateFlashCard);

export default router;