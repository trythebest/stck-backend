import mongoose from "mongoose";

const QuestionSchema= new mongoose.Schema({

    title:String,
    body:String,
    tags:[],
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:Object,
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments",
    },
    
    
})

export default mongoose.model("Question",QuestionSchema)