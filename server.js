var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("listening on PORT " + PORT);
});