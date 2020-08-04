import bcrypt from 'bcrypt';
import User from '../Model/User.js';

export const getLogin=(req,res,next)=>{ 
     // 이미 로그인 되었다면 ? 
     if(req.session.isLoggedIn){
        return res.redirect('/');
     }
     res.render('auth/login', {
         pageTitle:'login'
     });
}

export const postLogin=async (req,res,next)=>{
    const email = req.body.email;
    const password= req.body.password;
    try{
        // email과 password가 일치하는지 확인
        const user = await User.findOne({email:email});
        if(!user){ // error 
            res.redirect('/');
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
                res.redirect('/');
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
        pageTitle:'sign up'
    })
}

export const postSignUp= async (req,res,next)=>{
    const email= req.body.email;
    const name = req.body.name;
    const password= req.body.password;
    /*이미 존재하는 이메일인 경우 --> error message 출력 --> routing에서 해주기*/
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