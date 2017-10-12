var Express = require("express");

var app = Express();

app.get("/city/:id", (request, response) => {
    //response.status(200).send("The adsa");
    var id = request.params.id;
	   let apiKey = 'caea1a96d299c3da9ed34032e6cc5510';
	    let url = `http://api.openweathermap.org/data/2.5/weather?q=${id}&units=imperial&appid=${apiKey}`
	     let req = require('request');

       req(url, function (err, res, body) {

  if(err){
    console.log('error:', err);
  } else {
let weather = JSON.parse(body);
    response.send([{

    	weather
  	}]);
  }
});
});


var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;
