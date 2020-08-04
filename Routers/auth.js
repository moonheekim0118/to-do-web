/* login, signup, logout 관련 routing */
import {postLogin, getLogOut, postSignUp,  getLogin ,getSignUp} from '../Controller/auth.js';
import express from 'express';
import isAuth from '../middleware/is-Auth.js';
const router = express.Router();


router.get('/login', getLogin);

router.post('/login', postLogin);

router.get('/signUp', getSignUp);

router.post('/signUp',postSignUp);

router.get('/logOut',isAuth,getLogOut);

export default router;