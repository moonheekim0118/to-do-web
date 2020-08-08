
const loginCheck=(req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.redirect('/signIn');
    }
    next();
}

export default loginCheck;