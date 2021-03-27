const express = require("express");
const request = require("request");

const app = express();

app.use(express.urlencoded({extended:true}), express.static("src"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  console.log(req.body)
  res.send('Thank you ' + firstName +"! You're signed up!");
});

app.listen(3000, function(req,res){
  console.log('served!')
})