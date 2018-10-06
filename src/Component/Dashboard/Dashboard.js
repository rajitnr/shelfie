import React, { Component } from "react";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hereToModify: false
    };
  }

  render() {
    console.log(this.state.hereToModify);
    console.log(this.props.products);
    const { products } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        {products.map(product => {
          let { id, name, img, price } = product;
          return (
            <div key={id}>
              <Product
                productToDisplay={{ id, name, price, img }}
                updateProductsInParentComponent={
                  this.props.updateProductsInParentComponent
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
