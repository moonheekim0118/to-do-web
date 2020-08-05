import Post from '../Model/Post.js';
export const getIndex=(req,res,next)=>{
    res.render('main/index', {
        pageTitle:'main page',
        userName: req.user ? req.user.name : ''
    });
}

export const getTodayToDo=async(req,res,next)=>{
    const todos = await Post.find({userId:req.user._id});
    res.render('main/today-todo', {
        pageTitle:'today to do',
        todoList: todos,
        userName: req.user.name
    })
}

export const addToDo=async (req,res,next)=>{
    const contents = req.body.contents;
    const importanceRate = req.body.importance;
    let importance;
    if(importanceRate == 'strong'){
        importance=3;
    } else if(importanceRate =='mid'){
        importance=2;
    }else {
        importance=1;
    }
    try{
        const post = await new Post({userId:req.user._id, contents:contents , isDone: false, importance:importance});
        await post.save();
        if(!post){
            return  res.status(501).json({message:'failed'});
        }
        else{ return  res.status(200).json({message:'succeed'});}
   }catch(err){
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
   }
}