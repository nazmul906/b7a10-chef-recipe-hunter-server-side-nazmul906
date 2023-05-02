const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
// const chef = require["./data/chef.json"]; the error is u used [] instead of ()

app.use(cors());

const allchef = require("./data/chef.json");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/chef/:id", (req, res) => {
//   const cid = parseInt(req.params.id);
//   console.log("Chefid", cid);
//   console.log(chef);

//   const selectedChef = chef.find((item) => parseInt(item.id) === cid);

//   res.send(selectedChef);
// });
app.get("/chef", (req, res) => {
  //   console.log(categories);
  res.send(allchef);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
