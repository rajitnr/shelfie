import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "../../Routes";

const Header = props => {
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <img
              // src="http://www.canuckiwi.com/wp-content/uploads/2016/12/Utah-Logo-600-400.png"
              src="https://via.placeholder.com/50x50"
              alt=""
              className="logo"
            />
          </Link>
          <Link to="/">
            <h1>SHELFIE</h1>
          </Link>
        </div>
        <div className="nav-main">
          <nav>
            <Link to="/">
              <div className="btn">Dashboard</div>
            </Link>
            <Link to="/add">
              <div className="btn">Add Inventory</div>
            </Link>
          </nav>
        </div>
      </div>
      <Routes />
    </React.Fragment>
  );
};

export default Header;
