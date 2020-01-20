const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended:false,
}));

app.get('/bmicalculator',function(req,res){
          res.sendFile(__dirname + "/bmi.html");
       });

app.post('/bmicalculator',function(req ,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("your Bmi is " +bmi);
})
app.listen(3000,function(){
    console.log("server stared.");
})
