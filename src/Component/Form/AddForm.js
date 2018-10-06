import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005/api";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      price: 0,
      img: ""
    };
  }
  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  resetState = () => {
    this.setState({ name: "", price: 0, img: "" });
  };

  handleSubmit = () => {
    console.log("Posting");
    const { name, price, img } = this.state;
    const newProduct = { name: name, price, img };
    axios.post(`${BASE_URL}/product`, newProduct).then(response => {
      console.log("Posted", response);
      this.resetState();
      this.props.updateProductsInParentComponent(response.data);
    });
  };

  render() {
    return (
      <div>
        <h1>Add</h1>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          placeholder="Product Name"
          value={this.state.name}
          onChange={event => this.handleChange(event, "name")}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          value={this.state.price}
          onChange={event => this.handleChange(event, "price")}
        />
        <label htmlFor="img">Image URL</label>
        <input
          type="url"
          name="img"
          id="img"
          value={this.state.img}
          placeholder="URL"
          onChange={event => this.handleChange(event, "img")}
        />
        <img
          style={{ width: 200 }}
          src={
            this.state.img ||
            "https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png"
          }
        />
        <button onClick={this.resetState}>Cancel</button>
        <button onClick={this.handleSubmit}>Save Changes</button>
      </div>
    );
  }
}

export default AddForm;
