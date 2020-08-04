import express from 'express';
import bodyParser from 'body-parser';
import mogoose from 'mongoose';
import DB_URI from './database.js';
import { fileURLToPath} from 'url';
import path , { dirname }from 'path';
import { error404handle, error500handle } from './Controller/error.js';
import mainRouter from './Routers/main.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs'); // template engine set 
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:false})); // body parser set 
app.use(express.static(path.join(__dirname,'public'))); // static file set 

app.use(mainRouter);
app.use('/500', error500handle);
app.use(error404handle);

app.use((error,req,res,next)=>{
    res.redirect('/500');
})

mogoose.connect(DB_URI)
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    const error = new Error(err);
    error.httpStatusCode=500;
    return next(error);
})
