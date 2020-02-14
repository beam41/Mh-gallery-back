const path = require("path");
const express = require("express");
const image = require("./image");

const app = express();

const dir = path.join(__dirname, "static");

app.use(express.static(dir));

app.get("/imgs", (req, res) => {
  const imgs = image.map(val => ({
    imgn: val.imgn,
    name: val.name,
    price: val.prices[0].price
  }));
  res.send(imgs);
});

app.get("/info/:ext/:name", (req, res) => {
  const img = image.find(
    val => req.params.name + "." + req.params.ext === val.imgn
  );
  res.send(img);
});

app.listen(3000, function() {
  console.log("Listening on http://localhost:3000/");
});
