//Figlet package using require
let figlet = require("figlet");

figlet("Ritank Jaikar", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});