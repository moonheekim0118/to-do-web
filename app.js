import express from 'express';
import bodyParser from 'body-parser';
import mogoose from 'mongoose';
import DB_URI from './database.js';
import { fileURLToPath} from 'url';
import '@babel/polyfill'
import path , { dirname }from 'path';
import { error404handle, error500handle } from './Controller/error.js';
import mainRouter from './Routers/main.js';
import authRouter from './Routers/auth.js';
import csrf from 'csurf';
import session from 'express-session';
import { default as connectMongoDBSession} from 'connect-mongodb-session';
import User from './Model/User.js';
const csrfProtection = csrf();
const MongoDBStore = connectMongoDBSession(session); // for mongo db - session connect
const store = new MongoDBStore({ // set database for saving session 
    uri: DB_URI,
    collection: 'sessions'
});

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set('view engine', 'ejs'); // template engine set 
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:false})); // body parser set 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'dist'))); // static file set 
app.use(session({secret:'my secret', resave:false, saveUninitialized:false, store:store})) // connectiong to db - session  
app.use(csrfProtection); // csrf protection middleware

app.use (async(req,res,next)=>{ // session에 저장된 user정보(현재 로그인한 유저) 를 req.user에 전달
    if(req.session.user){ // if it's logged in
        try{
            const user= await User.findOne(req.session.user._id);
            req.user=user;
            next();
        }catch(err) {
            const error = new Error(err);
            error.httpStatusCode=500;
            return next(error);
        }
    }
    else{ 
        next();
    }
})

app.use((req,res,next)=>{
    res.locals.isAuthenticated= req.session.isLoggedIn; // 로그인 되었는지 아닌지 정보 저장 
    res.locals.csrfToken=req.csrfToken(); // csrf 토큰 저장 
    next();
})


app.use(mainRouter);
app.use(authRouter);
app.use('/500', error500handle);
app.use(error404handle);

app.use((error,req,res,next)=>{
    console.log(error);
    res.redirect('/500');
})

mogoose.connect(DB_URI)
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    const error = new Error(err);
    error.httpStatusCode=500;
    return error;
})
