var express = require("express");
var app = express();
var path = require("path");
var moment = require("moment");
moment().format();
var port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));

app.get("/:id", function(request, response){
    var naturalTimeEntered = false;//to keep track if natural number was entered
    var date = request.params.id;//get the date user put in the url
    date = Number(date);
    if(date.toString() === "NaN"){ //if a natural date was entered
        date = request.params.id; // leave it how the user entered it
        var naturalTimeEntered = true;
    }
    if(moment(date,  ["LL","X"]).isValid()){//if its a valid date, natural or unix
        if(naturalTimeEntered){ // if it was a valid and natural date entered
            var unixTime = Number(moment(date, "LL").format("X")); //X to return the unix timestamp of the date
            var naturalTime = date; //LL to convert the date to natural date format
            response.json({unix: unixTime, natural:naturalTime});
        }
        else{
            var unixTime = Number(date); //the unix timestamp as entered 
            var naturalTime = moment(date, "X").format("LL"); //LL to present the date in natural date format
            response.json({unix: unixTime, natural:naturalTime});
        }
    }
    else{
        response.json({unix: null, natural: null});//return null when date is invalid
    }
});

app.listen(port, function(){
    console.log("app is listening on port ");
})

