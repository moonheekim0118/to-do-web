import { getIndex } from '../Controller/main.js';
import express from 'express';
const router = express.Router();

router.get('/', getIndex);

export default router;