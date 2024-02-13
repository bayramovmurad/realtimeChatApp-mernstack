import express from 'express';
import { messages } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();

router.post('/send/:id', protectRoute, messages);

export default router;  