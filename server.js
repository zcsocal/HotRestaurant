

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});

var reservations = [
    {
        routeName: "table1",
        name: "Rob",

    }
];
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  

/* app.get("/api/tables", function(req, res) {
    return res.json(reservations, waitlist);
});

app.post("/api/tables", function(req, res) {

}) */