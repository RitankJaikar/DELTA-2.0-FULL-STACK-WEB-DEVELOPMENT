const { faker } = require('@faker-js/faker');
//generates random data i.e. id, name, email, image, password, birthdate, registration date, etc.
const mysql = require('mysql2');
//connects/links Node wih MySQL


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'DB1',        //database name
    password: 'Jaikar123'   //MySQL password
}); //connection established

// let q='SHOW TABLES'; //SQL query

//manually entring data //'?'-> placeholder
// let q='INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?);';   //SQL query
// let user=["123", "123user","123user@gmil.com","123userPass"];   //to insert new data(row) into user table
// let user2=["123b", "123userb","123userb@gmil.com","123userPassb"];   //one at a time

//another way to insert new multiple data(rows) into user table
// let q='INSERT INTO user (id, username, email, password) VALUES ?;'; //single question mark
// let users=[
//     ["123c", "123userc","123userc@gmil.com","123userPassc"],
//     ["123d", "123userd","123userd@gmil.com","123userPassd"],
//     ["123e", "123usere","123usere@gmil.com","123userPasse"],
//     ["123f", "123userf","123userf@gmil.com","123userPassf"]
// ];
//'user'->'(?,?,?,?)' for single insert, '[users]'-> '?' for one or multiple insert using 'connection.query'

let getRandomUser= () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];    //return array with random data
}
let q='INSERT INTO user (id, username, email, password) VALUES ?;';
let data=[]
for(let i=1;i<=100;i++){
    data.push(getRandomUser());
}   //100 random user data

// simple query
try{//here 'connection' object has a method/function 'query' that runs SQL query
    connection.query(q, [data],
        (err, results, fields)=> {
            if(err)     throw err;
            console.log(results); // results contains rows/result of query returned by server
            // console.log(fields); // fields contains extra meta data about results, if available (not required)
        }
    );
}
catch(err){
    console.log(err);
}
/*
ResultSetHeader {
    fieldCount: 0,
    affectedRows: 4,
    insertId: 0,
    info: 'Records: 4  Duplicates: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0
}*/ //result in terminal

connection.end();   //to close connection


// let getRandomUser= () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };    //return object with random data
// }
// console.log(getRandomUser());