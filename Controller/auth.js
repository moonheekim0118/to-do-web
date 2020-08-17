import bcrypt from 'bcrypt';
import User from '../Model/User.js';
import {validationResult}  from 'express-validator';
// const  {validationResult} = validator;

export const getLogin=(req,res,next)=>{ 
     // 이미 로그인 되었다면 ? 
     if(req.session.isLoggedIn){
        return res.redirect('/');
     }
     res.render('auth/signIn', {
         pageTitle:'signIn',
         ErrorMessage:'',
         oldInput:{email:'', password:''}
     });
}


// validation error 시 render 인자로 넘겨주는 것
// 1. Error Message
// 2. old input ( input 에 old input을 value로 띄운다.)
export const postLogin=async (req,res,next)=>{
    const email = req.body.email;
    const password= req.body.password;
    const error = validationResult(req);
    const oldInput={email:email, password:password};
    if(!error.isEmpty()){
        return res.status(422).render('auth/signIn',
        {
            pageTitle:'signIn',
            ErrorMessage: error.array()[0].msg,
            oldInput:oldInput
        })
    }
    try{
        // email과 password가 일치하는지 확인
        const user = await User.findOne({email:email});
        if(!user){ // error 
            return res.status(422).render('auth/signIn',
            {
                pageTitle:'signIn',
                ErrorMessage: 'Email dose not exist!',
                oldInput:oldInput
            })
        }
        else{
            const doMatch = await bcrypt.compare(password,user.password);
            if(doMatch){ // 일치
                req.session.isLoggedIn=true;
                req.session.user=user;
                await req.session.save();
                res.redirect('/');
            }
            else{ // 일치하지 않는 경우 
                return res.status(422).render('auth/signIn',
                {
                    pageTitle:'signIn',
                    ErrorMessage: 'Wrong Password!',
                    oldInput:oldInput
                })
            }
        }
    }catch(err) {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

export const getLogOut=(req,res,next)=>{
    req.session.destroy();
    res.redirect('/');
}


export const getSignUp=(req,res,next)=>{
    if(req.session.isLoggedIn){
        return res.redirect('/');
    }
    res.render('auth/signup', {
        pageTitle:'sign up',
        ErrorMessage:'',
        oldInput:{email:'', name:'', password:''}
    })
}

export const  postSignUp =async (req,res,next)=>{
    const email= req.body.email;
    const name = req.body.name;
    const password= req.body.password;
    const oldInput={email:email, name:name, password:password} 
    const error = validationResult(req);
    console.log(error);
    if(!error.isEmpty()){
        return res.status(422).render('auth/signup',
        {
            pageTitle:'sign up',
            ErrorMessage: error.array()[0].msg,
            oldInput:oldInput
        })
    }
    try{
        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = new User({email:email, name:name, password:hashedPassword});
        await newUser.save();
        res.redirect('/');
    }catch(err){
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}