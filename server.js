
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/home.html"));
});

app.get("/custom", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/custom.html"))
})

// app.get("*", function(req, res) {
//   res.send("Sending you the homepage");
// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
