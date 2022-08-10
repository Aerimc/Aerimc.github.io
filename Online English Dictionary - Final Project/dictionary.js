var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var search = require("./word");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Serving the html for homepage request
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dict.html"));
});

// Searving the results page when lookup is clicked
app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.lookup);
});

var server = app.listen(8000, function () {
  console.log("Server is running on port 8000...");
});
