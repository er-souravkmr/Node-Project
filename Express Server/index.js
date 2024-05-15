import server from "express";

const port = 3000;
const app = server();

app.get("/",(req,res)=>{
    res.send('<h1>Hello Virat kohli</h1>')
})

app.listen(port ,()=>{
    console.log(`Server is running at ${port} ....`)
})

