import React, { Component } from "react";
import axios from "axios";

import UpdateForm from "../Form/UpdateForm";
const BASE_URL = "http://localhost:3005/api";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      hereToModify: false
    };
  }
  handleDelete = id => {
    axios.delete(`${BASE_URL}/product/${id}`).then(response => {
      console.log("After Delete ", response.data);
      this.setState({ products: response.data });
      this.props.updateProductsInParentComponent(this.state.products);
    });
  };
  render() {
    let { id, name, img, price } = this.props.productToDisplay;
    return (
      <div className="product-box">
        <div>
          <img src={img} style={{ width: 200 }} />
          <h2>{name}</h2>
          <h2>{price}</h2>
        </div>
        <div className="edit-box">
          <button
            onClick={() =>
              this.setState({ hereToModify: !this.state.hereToModify })
            }
          >
            Edit Product
          </button>
          {this.state.hereToModify && (
            <UpdateForm
              productToDisplay={{ id, name, price, img }}
              updateProductsInParentComponent={
                this.props.updateProductsInParentComponent
              }
              closeDialog={() =>
                this.setState({ hereToModify: !this.state.hereToModify })
              }
            />
          )}
          <button onClick={() => this.handleDelete(id)}>Delete Product</button>
        </div>
      </div>
    );
  }
}

export default Product;
