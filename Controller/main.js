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
        else{ return  res.status(200).json({message:'succeed', post:post});}
   }catch(err){
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
   }
}

export const doneCheck=async(req,res,next)=>{
    const done = req.body.done;
    const postId= req.body.id;
    try{
        const post = await Post.findById(postId);
        if(!post){
            return  res.status(501).json({message:'failed'});
        }
        post.isDone = done;
        await post.save();
        return res.status(200).json({message:'succeed'});
    }catch(err){
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
   }
}


export const isDoneCheck =async(req,res,next)=>{
    const postId = req.parmas.postId;
    try{
        const post = await Post.findById(postId);
        if(!post){
            return  res.status(501).json({message:'failed'});
        }
        return res.status(200).json({message:'succeed', done:post.isDone});
    }catch(err){
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

export const deleteAll=async(req,res,next)=>{
    // 현재 req user에 해당하는 모든 아이템 지우기.
    try{
    await Post.remove({'userId':req.user._id});
    return res.status(200).json({message:'succeed'});
    }catch(err)
    {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

// 선택된 항목 삭제 
export const deleteOne=async(req,res,next)=>{
    try{
        const postId = req.params.postId; 
        const post = Post.findById(postId);
        if(!post){
            throw new Error('there is no Post');
        }
        await Post.deleteOne({'userId':req.user._id, _id:postId});
        const length = await Post.countDocuments({'userId':req.user._id}); // 남은 post 개수 전달
        return res.status(200).json({message:'succeed', length:length});
    }catch(err)
    {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

export const updatePost = async(req,res,next)=>
{
    const postId=req.body.id;
    const contents = req.body.contents;
    let importance= req.body.importance;
    if(importance==='strong'){
        importance=3;
    }
    else if(importance==='mid'){
        importance=2;
    }
    else{
        importance=1;
    }
    try{
        const post = await Post.findById(postId);
        if(!post){
            throw new Error('there is no post');
        }
        post.contents=contents;
        post.importance=importance;
        await post.save();
        return res.status(200).json({message:'succeed'});
    }catch(err)
    {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}