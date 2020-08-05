import { getIndex, getTodayToDo,addToDo,doneCheck,isDoneCheck } from '../Controller/main.js';
import express from 'express';
import isAuth from '../middleware/is-Auth.js';
const router = express.Router();

router.get('/', getIndex);

router.get('/today-todo', isAuth, getTodayToDo);

router.post('/add-todo', isAuth,addToDo);

router.get('/done-check/:postId', isAuth, isDoneCheck);

router.put('/done-check',isAuth, doneCheck);

export default router;