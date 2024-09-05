const express = require("express");
const app=express();

// console.log(express);
// console.log(express());
// console.log(app);

let port=8080;
app.listen(port,()=>{
    console.log(`app is lisitning on port ${port}`);
})


app.get("/",(req,res)=>{
    console.log("request received");
    res.send("This is root path");
});

// app.get("/search",(req,res)=>{
//     console.log("request received");
//     res.send("This is search path");
// });

app.get("/help",(req,res)=>{
    console.log("request received");
    res.send("This is help path");
});

// app.get("*",(req,res)=>{
//     console.log("request received");
//     res.send("This is wrong path");
// });

app.get("/:username/:id",(req,res)=>{
    console.log("request received");
    let {username,id}=req.params;
    res.send(`Welcome to page of ${username}`);
});

app.get("/search",(req,res)=>{
    console.log("request received");
    let {q}=req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>search results for query ${q}</h1>`);
});


// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     let codeHTML="<h1>Fruits<h1><ul><li>apple</li><li>orange</li><li>banana</li></ul>";
//     res.send(codeHTML);
// });