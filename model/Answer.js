import mongoose from "mongoose";

const answerSchema= new mongoose.Schema({

    question_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    },
    answer:String,
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:Object

})

export default mongoose.model("Answer",answerSchema)