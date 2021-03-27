const express = require("express");
const request = require("request");

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.static("src"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  console.log(req.body)
  res.send('posted');
});

app.listen(3000, function(req,res){
  console.log('served!')
})