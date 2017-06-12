var express = require("express");
var app = express();
var moment = require("moment");
moment().format();

app.get("/", function(request, response){
     console.log("worked");
    // console.log(moment().format("MM-DD-YYYY"));
});
app.get("/:id", function(request, response){
    var date = request.params.id;
    if(moment(date).isValid()){
        
    }
    else{
        response.send(JSON.stringify({unix: null, natural: null}));
    }
    console.log(moment().format("MM-DD-YYYY"));
});

app.listen(8080, function(){
    console.log("app is listening on port 8080");
})

