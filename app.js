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
  // res.send('Thank you ' + firstName +"! You're signed up!");

  if (res.statusCode === 200){
    res.sendFile(__dirname + "/success.html")
  } else {
    res.sendFile(__dirname + "/failure.html")
  }
});

app.post("/failure", function(req,res){
  res.redirect("/");
})

app.listen(3000, function(req,res){
  console.log('served!')
})