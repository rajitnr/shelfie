import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const BASE_URL = "http://localhost:3005/api";

class UpdateForm extends Component {
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
    console.log(event.target.value);

    this.setState({ [key]: event.target.value });
  };

  handleSave = () => {
    const { id, name, price, img } = this.state;
    const productToModify = { name: name, price, img };
    axios.put(`${BASE_URL}/product/${id}`, productToModify).then(response => {
      // this.setState({ name: "", price: 0, img: "" });
      this.props.history.push("/");
    });
  };

  handleClose = () => {
    this.props.history.push("/");
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios.get(`${BASE_URL}/products/${id}`).then(response => {
      console.log("Response", response.data[0]);
      this.setState({ id: response.data[0]["id"] });
      this.setState({ name: response.data[0]["name"] });
      this.setState({ price: response.data[0]["price"] });
      this.setState({ img: response.data[0]["img"] });
      console.log("Mounted", this.state);
    });
  };

  render() {
    let { name, price, img } = this.state;

    return (
      <div className="product">
        <img
          // style={{ width: 200 }}
          src={
            img ||
            "https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png"
          }
        />
        <div className="product-label">
          <label htmlFor="img">Image URL</label>
          <input
            type="url"
            name="img"
            id="img"
            value={img}
            placeholder="URL"
            onChange={event => this.handleChange(event, "img")}
          />
        </div>
        <div className="product-label">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            value={name}
            onChange={event => this.handleChange(event, "name")}
          />
        </div>
        <div className="product-label">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={event => this.handleChange(event, "price")}
          />
        </div>
        <div className="product-buttons">
          <button className="btn btn-header" onClick={this.handleSave}>
            Save Changes
          </button>
          <button className="btn  btn-header" onClick={this.handleClose}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
