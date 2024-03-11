import express from "express";
import CommentsDB from "../model/Comments.js";

const router=express.Router();

router.post("/:id" ,async(req,res)=>{
    const {id}= req.params;
    const commentData = new CommentsDB({
        question_id:id,
        comment:req.body.comment,
        user:req.body.user,
    })

    await commentData 
    .save()
    .then((data)=>{res.status(201).send(data)})
    .catch((err)=>{res.status(400).send({message:"Comments not added succesfully"})})
})

export default router;