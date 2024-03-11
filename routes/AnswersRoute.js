import  express  from "express";
import answerDB from "../model/Answer.js";

const router=express.Router();

router.post("/:id" , async(req,res)=>{

    const {id}= req.params;
    const answerData= new answerDB({
        
        question_id:id,
        answer: req.body.answer,
        user: req.body.user,
    });

    await answerData
     .save()
     .then((data)=>{res.status(201).send(data)})
     .catch((err)=>{res.status(400).send({message:"Answer not added succesfully"})
    });
});


export default router;