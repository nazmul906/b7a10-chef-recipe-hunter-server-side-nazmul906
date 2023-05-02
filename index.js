const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
// const chef = require["./data/chef.json"]; the error is u used [] instead of ()
const allchef = require("./data/chef.json");
const recipes = require("./data/recipe.json");
app.use(cors());

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

app.get("/chef/:id", (req, res) => {
  const chefId = parseInt(req.params.id);
  console.log("chefId", chefId);
  //   as we get the id we will run filter() on recipes to get those recipe od that chefid provided

  const selectedChefRecipe = recipes.filter(
    (item) => parseInt(item.chef_id) === chefId
  );
  //   console.log(selectedChefRecipe);
  res.send(selectedChefRecipe);
});

app.get("/viewrecipes", (req, res) => {
  res.send(recipes);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
