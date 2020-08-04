
export const error404handle =(req,res,next)=>{
    res.status(404).render('errors/404');
}

export const error500handle =(req,res,next)=>{
    res.status(500).render('errors/500');
}