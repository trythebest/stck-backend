import  express  from "express";
import { MongoClient } from "mongodb";
import  QuestionRoute  from "./routes/QuestionRoute.js";
import AnswersRoute from "./routes/AnswersRoute.js";
import CommentRoute from "./routes/CommentRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const mongourl=process.env.mongo_url;
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());


// async function connection(){
//   const Client= new MongoClient(mongourl)
//   await Client.connect()
//   console.log("mongo connected")
//   return Client;
// }
// export const Client=await connection();

mongoose .connect(mongourl,
  { 
    useUnifiedTopology:true,
      useNewUrlParser:true
    })
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));


app.get('/', function (req, res) {
  res.send('Hello manikandan😎😋')
})

app.use("/questions",QuestionRoute);
app.use("/answer",AnswersRoute);
app.use("/comments",CommentRoute);

app.listen(4000);