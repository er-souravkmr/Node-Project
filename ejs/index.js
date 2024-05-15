import express from "express";
import ejs from "ejs";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;


app.use(express.urlencoded({extended : true}));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/submit",(req,res)=>{

    res.render("index2.ejs",{name :req.body['name']})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}.....`)
})