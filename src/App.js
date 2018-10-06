import React, { Component } from "react";
import axios from "axios";

import Dashboard from "./Component/Dashboard/Dashboard";
import AddForm from "./Component/Form/AddForm";
import Header from "./Component/Header/Header";

const BASE_URL = "http://localhost:3005/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount = () => {
    axios.get(`${BASE_URL}/products`).then(response => {
      console.log("response", response);
      this.setState({ products: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm
          updateProductsInParentComponent={data =>
            this.setState({ products: data })
          }
        />
        <Dashboard
          products={this.state.products}
          updateProductsInParentComponent={data =>
            this.setState({ products: data })
          }
        />
      </div>
    );
  }
}

export default App;
