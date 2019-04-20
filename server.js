

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
        id: "rob",
        name: "Rob",
        email: "therobshock@yahoo.com",
        phone: "661-703-6541"


    }
];
var waitlist = [
    {
        id: "liz",
        name: "Liz",
        email: "lizardbolton@yahoo.com",
        phone: "661-703-6542"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

if (reservations.length < 5) {
    
    app.post("/api/reservations", function(req, res) {
        var newreservation = req.body;
        
        console.log(newreservation);

        reservations.push(newreservation);

        res.json(newreservation);
        
        
    });
} else {
    app.post("/api/waitlist", function(req, res){
        var newwaitlist = req.body;

        console.log(newwaitlist);

        waitlist.push(newwaitlist);
    });
}