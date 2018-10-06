module.exports = {
  readProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // console.log("dbInstance", dbInstance);
    dbInstance
      .read_products()
      .then(products => {
        // console.log("After Read : ", creatures);
        res.status(200).send(products);
      })
      .catch(error => {
        res.status(500).send();
      });
  },
  createProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;
    console.log("In for write", req.body);
    dbInstance
      .create_products([name, price, img])
      .then(() => {
        console.log("After Write");
        dbInstance.read_products().then(products => {
          console.log("After Read");
          res.status(200).send(products);
        });
      })
      .catch(error => {
        console.log("error", error);
        res.status(500).send(error);
      });
  },
  deleteProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log("In for delete", req.body);
    dbInstance
      .delete_product([id])
      .then(() => {
        console.log("After Delete");
        dbInstance.read_products().then(products => {
          console.log("After Read");
          res.status(200).send(products);
        });
      })
      .catch(error => {
        console.log("error", error);
        res.status(500).send(error);
      });
  },
  updateProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { name, img, price } = req.body;

    console.log("In for Modify", id, req.body);

    dbInstance
      .update_product([id, name, price, img])
      .then(() => {
        console.log("After Update");
        dbInstance.read_products().then(products => {
          console.log("After Read");
          res.status(200).send(products);
        });
      })
      .catch(error => {
        console.log("error", error);
        res.status(500).send(error);
      });
  }
};
