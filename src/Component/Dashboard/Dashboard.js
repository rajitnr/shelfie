import React, { Component } from "react";
import axios from "axios";

import Product from "../Product/Product";
const BASE_URL = "http://localhost:3005/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hereToModify: false,
      products: []
    };
  }

  componentDidMount = () => {
    let products = [];
    axios.get(`${BASE_URL}/products`).then(response => {
      this.setState({ products: response.data });
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        {products.map(product => {
          let { id, name, img, price } = product;

          return (
            <React.Fragment key={id}>
              <Product
                productToDisplay={{ id, name, price, img }}
                updateProductsInParentComponent={data =>
                  this.setState({ products: data })
                }
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
