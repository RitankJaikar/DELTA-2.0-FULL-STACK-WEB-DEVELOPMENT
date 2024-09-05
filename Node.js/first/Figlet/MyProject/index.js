//globally install figlet package
const figlet = require("figlet");

figlet("RITANK JAIKAR", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//Dad Jokes Package
const giveMeAJoke = require('give-me-a-joke');
// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});