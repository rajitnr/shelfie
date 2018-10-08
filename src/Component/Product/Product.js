import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import UpdateForm from "../Form/UpdateForm";
const BASE_URL = "http://localhost:3005/api";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = id => {
    axios.delete(`${BASE_URL}/product/${id}`).then(response => {
      this.setState({ products: response.data });
      this.props.updateProductsInParentComponent(this.state.products);
    });
  };

  render() {
    let { id, name, img, price } = this.props.productToDisplay;
    return (
      <div className="product-box">
        {/* <div className="product-image"> */}
        <img src={img} />
        {/* </div> */}
        <div className="product-details">
          <div className="product-desc">
            <p>{name}</p>
            <p>${price}</p>
            <div className="edit-box">
              <nav>
                <Link to={`/edit/${id}`} className="btn btn-product">
                  <div>Edit</div>
                </Link>
              </nav>
              {/* <button
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
            )} */}
              <div
                className="btn btn-product"
                onClick={() => this.handleDelete(id)}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
        {/* <Routes /> */}
      </div>
    );
  }
}

export default Product;
