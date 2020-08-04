
const loginCheck=(req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.redirect('/');
    }
    next();
}

export default loginCheck;