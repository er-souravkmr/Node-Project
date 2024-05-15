import express from "express";
import fs from "fs";
import http from "http";


const app=express();
const port= 3000;

app.use(express.static("public"))

app.get("/" ,(req , res)=>{
    res.render("index.ejs")
})
app.get("/create" ,(req , res)=>{
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})

app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`);
})