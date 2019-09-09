var express = require("express");
//var path = require("path");
var app = express();
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("listening on PORT " + PORT);
});