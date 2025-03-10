import dotenv from "dotenv";
import express,{json} from 'express';
import { userauth } from "./Routes/user.js";
import adminauth from "./Routes/adminauth.js";
import adminSign from "./Routes/adminSignup.js";
import cors from "cors";


dotenv.config();

const app=express();
 app.use(cors({
    origin:'http://127.0.0.1:5501',
    credentials:true
 }))
 app.use(json())

app.use('/',userauth)  
app.use('/',adminauth) 

app.use('/admin',adminSign)

app.listen(process.env.PORT,function(){
    console.log(`service is listening at ${process.env.PORT}`);
    });

 

app.get('/',function(req,res){
    res.send('hi ');
})