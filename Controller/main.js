
export const getIndex=(req,res,next)=>{
    res.render('main/index', {
        pageTitle:'main page',
        userName: req.user ? req.user.name : ''
    });
}