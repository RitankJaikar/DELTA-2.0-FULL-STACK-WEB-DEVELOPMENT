//export and require
//apple, banana, cherry ->(export) index.js]Fruits(folder) ->(export) script1.js

//require from Fruits folder
const fruits=require("./Fruits");
console.log(fruits);


//make sure to remove "type": "module" form package.json
//Once type is set to module, you can't use the CommonJS require and module.exports syntax anymore