import Post from '../Model/Post.js';
export const getIndex=(req,res,next)=>{
    res.render('main/index', {
        pageTitle:'main page',
        userName: req.user ? req.user.name : ''
    });
}

export const getTodayToDo=async(req,res,next)=>{
    const today =new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); // 오늘 등록된 투두만 보여준다. 
    const todos = await Post.find({'userId':req.user._id,'createdAt':today});
    res.render('main/today-todo', {
        pageTitle:'today to do',
        todoList: todos,
        userName: req.user.name
    })
}

export const addToDo=async (req,res,next)=>{
    const contents = req.body.contents;
    const importanceRate = req.body.importance;
    const today =new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); // 오늘 날짜를 넣어준다. 
    let importance;
    if(importanceRate == 'strong'){
        importance=3;
    } else if(importanceRate =='mid'){
        importance=2;
    }else {
        importance=1;
    }
    try{
        const post = await new Post({userId:req.user._id, contents:contents , isDone: false, importance:importance, createdAt:today });
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


export const deleteAll=async(req,res,next)=>{
    // 현재 req user에 해당하는 모든 아이템 지우기. 
    const today =new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    try{
    await Post.deleteMany({'userId':req.user._id, 'createdAt':today});
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
        const today =new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); 
        await Post.deleteOne({'userId':req.user._id, _id:postId});
        const length = await Post.countDocuments({'userId':req.user._id,'createdAt':today}); // 남은 post 개수 전달
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
    else if(importance==='not'){
        importance=1;
    }
    else{
        importance=0;
    }
    try{
        const post = await Post.findById(postId);
        if(!post){
            throw new Error('there is no post');
        }
        post.contents=contents;
        if(importance!==0){ // 변경되지 않았다면 update해주지 않는다.
            post.importance=importance;
        }
        await post.save();
        return res.status(200).json({isDone:post.isDone});
    }catch(err)
    {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

export const sortPost= async(req,res,next)=>
{
    try{
        const today =new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); 
        const post = await Post.find({'userId':req.user._id, 'createdAt':today}).sort({'importance':-1});
        return res.status(200).json({post:post});
    }catch(err) {
        const error = new Error(err);
        error.httpStatusCode= 500;
        return next(error);
    }
}

export const getPosts = async(req,res,next)=>{
    const posts=[]; // 날짜 리스트
    // 해당 User의 모든 Post를 날짜별로 (높은순) sort한다.
    // 해당 날짜가 posts 배열에 아직 안들어있다면 넣어준다.
    const post = await Post.find({'userId':req.user._id}).sort({'createdAt':-1});
    post.forEach(p=>{
        const date=p.createdAt.toISOString().replace('-', '/').split('T')[0].replace('-', '/');
        if(!posts.includes(date)){
            posts.push(date);
        }
    })
    res.render('main/todo-post',
    {
        pageTitle:'todo posts',
        postList: posts,
        userName: req.user.name
    });
}

export const getPostDetail = async(req,res,next)=>{ // 특정 날짜를 query로 받아와서, 해당날짜에 작성한 todo list보여주기 
    let date = req.query.post_date;
    const year = +date.slice(0,4);
    const month = +date.slice(5,7);
    let day= +date.slice(8,10);
    day++;
    const dateFormat = month+'/'+day+'/'+year;
    const detailDate = new Date(dateFormat);
    const NotDonePosts = await Post.find({'userId':req.user._id , 'createdAt': detailDate, 'isDone':false});
    const DonePosts =await Post.find({'userId':req.user._id , 'createdAt': detailDate, 'isDone':true});
    res.render('main/todo-detail', 
    {
        pageTitle: 'todo detail',
        NotDone: NotDonePosts,
        Done:DonePosts,
        date:dateFormat,
        NotDoneLen:NotDonePosts.length,
        DoneLen: DonePosts.length,
        userName: req.user.name
    }); 
}
