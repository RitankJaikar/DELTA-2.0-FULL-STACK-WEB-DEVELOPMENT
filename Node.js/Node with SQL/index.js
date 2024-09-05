//routes to show, edit, add and delete user data form MySQL database

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");

app.listen("8080",()=>{
    console.log("server is listning to port 8080");
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'DB1',
    password: 'Jaikar123'
});

app.get("/",(req,res)=>{    //to show total number of users
    let q="SELECT count(*) FROM user;";
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                // console.log(results);
                let count=(results[0]["count(*)"]);
                res.render("home.ejs",{count});
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.get("/user",(req,res)=>{    //to show all users
    let q="SELECT * FROM user;";
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                // res.send(results[0].id);
                let usersData=results;
                res.render("users.ejs",{usersData});
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.get("/user/:id/edit",(req,res)=>{   //username edit page
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}';`;
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                // console.log(results);
                let user=results[0];
                res.render("edit.ejs",{user});
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.patch("/user/:id",(req,res)=>{   //username edit/update in DB route
    let {id}=req.params;
    let {username: newUsername, password: formPassword}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}';`;
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                let user=results[0];
                if(formPassword != user.password){    //authentication check
                    res.send("wrong password");
                }
                else{   //if correct password then update username
                    let q=`UPDATE user SET username='${newUsername}' WHERE id='${id}';`;
                    try{
                        connection.query(q,
                            (err, result, fields)=> {
                                res.redirect("/user");
                            }
                        );
                    }
                    catch(err){
                        console.log(err);
                        res.send("some error occurred");
                    }
                }
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.get("/user/add",(req,res)=>{   //add new user page
    res.render("add.ejs");
});

app.post("/user",(req,res)=>{   //to add new user
    let q='INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?);';
    let {username: newUsername, email: newEmail, password: newPassword}=req.body;
    let newUser=[faker.string.uuid(),newUsername,newEmail,newPassword];
    console.log(newUser);
    try{
        connection.query(q, newUser,
            (err, results, fields)=> {
                if(err)     throw err;
                console.log(results);
                res.redirect("/user");
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.get("/user/:id/delete",(req,res)=>{   //user delete page
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}';`;
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                // console.log(results);
                let user=results[0];
                res.render("delete.ejs",{user});
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});

app.delete("/user/:id",(req,res)=>{   //delete user from DB
    let {id}=req.params;
    let {password: formPassword}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}';`;
    try{
        connection.query(q,
            (err, results, fields)=> {
                if(err)     throw err;
                let user=results[0];
                if(formPassword != user.password){    //authentication check
                    res.send("wrong password");
                }
                else{   //if correct password then delete user
                    let q=`DELETE FROM user WHERE id='${id}';`;
                    try{
                        connection.query(q,
                            (err, result, fields)=> {
                                // res.send(result);
                                res.redirect("/user");
                            }
                        );
                    }
                    catch(err){
                        console.log(err);
                        res.send("some error occurred");
                    }
                }
            }
        );
    }
    catch(err){
        console.log(err);
        res.send("some error occurred");
    }
});