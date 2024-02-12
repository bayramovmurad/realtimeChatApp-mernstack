import express from 'express';
import { messages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/send/:id', messages);

export default router;  