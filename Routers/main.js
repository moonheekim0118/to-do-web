import { getIndex, getTodayToDo,addToDo,doneCheck,deleteAll,deleteOne,updatePost,sortPost,getPosts,getPostDetail,detaildoneCheck } from '../Controller/main.js';
import express from 'express';
import isAuth from '../middleware/is-Auth.js';
const router = express.Router();

router.get('/', getIndex);

router.get('/today-todo', isAuth, getTodayToDo);

router.post('/add-todo', isAuth,addToDo);

router.put('/done-check',isAuth, doneCheck);

router.delete('/delete-all',isAuth,deleteAll);

router.delete('/delete-one/:postId', isAuth,deleteOne);

router.put('/update-post',isAuth,updatePost);

router.get('/sort-post',isAuth,sortPost);

router.get('/todo-post',isAuth,getPosts);

router.get('/todo-post-detail',isAuth,getPostDetail);

router.put('/done-check-detail',isAuth,detaildoneCheck);
export default router;