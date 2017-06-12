var express = require("express");
var app = express();
var moment = require("moment");
moment().format();

app.get("/", function(request, response){
     console.log("worked");
  
});
app.get("/:id", function(request, response){
    var naturalTimeEntered = false;
    var date = request.params.id;//get the date user put in the url
    date = Number(date);
    if(date.toString() === "NaN"){ //if a natural date was entered
        date = request.params.id; // leave it how the user entered it
        var naturalTimeEntered = true;
    }
    if(moment(date).isValid()){//if its a valid date
        if(naturalTimeEntered){ // if it was a valid and natural date entered
            var unixTime = Number(moment(date).format("X")); //x to return the unix timestamp in milliseconds
            var naturalTime = moment(date).format("LL"); //x to the date in natural date format
            response.send({unix: unixTime, natural:naturalTime});
        }
        else{
            var unixTime = Number(date); //x to return the unix timestamp in milliseconds
            var naturalTime = moment(date).format("LL"); //x to the date in natural date format
            response.send({unix: unixTime, natural:naturalTime});
        }
    }
    else{
        response.send({unix: null, natural: null});//return null when date is invalid
    }
});

app.listen(8080, function(){
    console.log("app is listening on port 8080");
})

