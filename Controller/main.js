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

export const addToDo=(req,res,next)=>{
    
}