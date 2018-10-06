const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const bc = require("./controller.js");

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  // dbInstance.setup().then(response => console.log("response", response));
  dbInstance
    .read_products()
    .then(response => console.log("response", response));
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/products", bc.readProduct);
app.post("/api/product", bc.createProduct);
app.delete("/api/product/:id", bc.deleteProduct);
app.put("/api/product/:id", bc.updateProduct);

app.listen(3005, () => {
  console.log("I am listening");
});
