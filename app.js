var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
  ];
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
  console.log('YelpCamp app listening on port 3000!')
});