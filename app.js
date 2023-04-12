const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy food", "Cook food", "eat food"]; // collection of items
app.set("view engine", "ejs"); // setting view engine

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

// post home route
app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
