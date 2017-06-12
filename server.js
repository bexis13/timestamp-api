var express = require("express");
var app = express();
var moment = require("moment");
moment().format();

app.get("/", function(request, response){
    
});

app.listen(8080, function(){
    console.log("hello world app is listening on port 8080");
})

