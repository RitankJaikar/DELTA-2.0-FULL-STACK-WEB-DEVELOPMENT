const express=require("express");
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});


app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard GET response. WELCOME ${user}!`);
});


app.use(express.urlencoded({extended:true}));

app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send(`Standard POST response. WELCOME ${user}!`);
});