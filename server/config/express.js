var express = require("express");
var app = express();
var consign = require("consign");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

consign({ cwd: "server" }).into(app);

module.exports = app;
