import mongoose from'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    } ,
    contents:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true
    },
    importance:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
})

export default mongoose.model('Post', postSchema);