import React, { Component } from "react";
import axios from "axios";
import "./App.css";

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

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
