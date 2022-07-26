import express from 'express';
const router = express.Router();
import {invertString} from '../controllers/controllers.js';

router.get('/iecho', invertString);

export default router;