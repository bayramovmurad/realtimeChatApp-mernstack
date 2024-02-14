import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { userControllers } from '../controllers/userControllers.js';

const routes = express.Router();

routes.get('/', protectRoute, userControllers);


export default routes;