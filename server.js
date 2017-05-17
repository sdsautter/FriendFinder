var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoute = require("./app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.argv[2] || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require("./app/routing")(app);
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  htmlRoute;
});
