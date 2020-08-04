/* login, signup, logout 관련 routing */
import {postLogin, getLogOut, postSignUp,  getLogin ,getSignUp} from '../Controller/auth.js';
import express from 'express';
import isAuth from '../middleware/is-Auth.js';
import validator from 'express-validator';
import User from '../Model/User.js';

const {body}=validator;
const router = express.Router();


router.get('/login', getLogin);

// 존재하지 않는 이메일 ==> Controller에서 검사 
// Email 이 아닌지 확인 
router.post('/login',[
    body('email').trim().isEmail().withMessage('Email is Required'),
    body('password').trim().isLength({min:6, max:12}).withMessage('Wrong password')
], postLogin);

router.get('/signUp', getSignUp);

// 중복된 이메일 검사 , 이메일 형식 검사
// name Length 검사
// password Length 검사
// password-confrim password matching 검사 
router.post('/signUp',[
    body('email').trim().isEmail().withMessage('Please type correct Email')
    .custom(value=>{
        return User.find({email:value})
        .then(user=>{
            if(user){
                return Promise.reject('E-mail already in use');
            }
        })
    }), 
    body('name').trim().isLength({min:3, max:10}).withMessage('name must be at least 3, less then 10'),
    body('password').trim().isLength({min:6, max:12}).withMessage('Password must be at least 6, less then 12'),
    body('Confirm-password').trim()
    .custom(value=>{
        if(value !== req.body.password){
            throw new Error('passwords do not match ');
         }
         else return true;
    })
],postSignUp);

router.get('/logOut',isAuth,getLogOut);

export default router;