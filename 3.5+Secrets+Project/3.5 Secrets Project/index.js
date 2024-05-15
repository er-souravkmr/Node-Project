import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

var Authorised = false;

app.use(bodyParser.urlencoded({ extended: true }));
function logger(req,res,next){
    var check = req.body["password"]; 
    if(check=="ILoveProgramming"){
        Authorised =true;
    }
    next()

} 
app.use(logger);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check",(req,res)=>{
    if(Authorised){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}........`);
})