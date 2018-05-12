var express = require('express');
var mysql =require('mysql');
var bodyParser = require('body-parser');


var connection = require("./config/connection.js");


var PORT = process.env.PORT || 3000;

var app = express ();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// app.get("/api/burgers", function (req, res) {
//     connection.query("SELECT * FROM burgers", function(err, result) {
//     res.json(result);
//     });
// });

// console.log (connection);
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});


