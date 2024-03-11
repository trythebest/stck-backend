import  express, { response }  from "express";
import QuestionDB from "../model/Question.js";


const router=express.Router();



router.post('/', async function ( req , res){
    const {title , body , tags,user}=req.body;
     const questionData= new QuestionDB({
        title:title,
        body:body,
        tags:tags,
        user:user
     });
     await questionData
     .save()
     .then((response)=> {res.status(201).send(response)})
     .catch((err)=> {res.status(400).send({message:"problem in adding question"}) })
    });

    router.get("/", async function (req,res){
      await QuestionDB.aggregate([
         {
            $lookup:{
               from:"answers",
               //localfield:_id;
               //foriegnfield:question_id;
               let:{question_id:"$_id"},
               pipeline:[
                  {$match:{$expr:{$eq:["$question_id","$$question_id"]}}},
                  {$project:{_id:1,user:1}},
               ],
               as:"answers",
               

            },
         },
         {
            $lookup:{
               from:"comments",
               let:{question_id:"$_id"},
               pipeline:[
                  {$match:{$expr:{$eq:["$question_id","$$question_id"]}}},
                  {$project:{_id:1,user:1}},
               ],
               as:"comments"
            },
         }
      ])
      .exec()
      .then((resa)=>res.status(200).send(resa))
      .catch((err)=>res.status(404).send(err));
    })



    export default router;