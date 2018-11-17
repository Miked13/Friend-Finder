//DEPENDENCIES
//npm packages used to run server
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS SETTINGS
//express server properties

//Creation of express server
var app = express();
//PORT is used as a gate that allows access to the express server
var PORT =  process.env.PORT || 8080;

//Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//ROUTER
//Routes that gives the express server a "map" of how to respond when users visit or request data from various URLs.
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//LISTENER
//Code that starts the express server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});