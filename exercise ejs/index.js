import express from "express";
// import ejs from "ejs";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const data ={
        title: "Ejs Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","guava","mango"],
        htmlContent:" <em>this is an html element</em>",
        
    }; 
    res.render("index.ejs",data);
})

app.listen(port ,()=>{
    console.log(`Server is running on port no ${port}........`);
})