//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
} )
app.post("/",function(req,res){
    const obj = req.body;
    const weight = Number(obj.weight);
    const height = Number(obj.height);
    let total = weight/(height*height);
    res.send('<h1 style="color:red; font-size:30px;">Your BMI is '+ total +'</h1>');
})
app.listen(3000,function(){
    console.log("Server is listening on port 3000...");
})
