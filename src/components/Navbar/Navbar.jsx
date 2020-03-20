import React from "react";
import {Nav} from "./style";

const Navbar = () => (
  <Nav>
    <nav className="navbar navbar-default fixed-top navbar-custom">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="https://reactjs.academy">
            <img src="https://swiftcodeninja.com/ninja.png" className="mr-2" width="50" height="50" alt="ninja" />
            CatanaJs
          </a>
        </div>
      </div>
    </nav>
  </Nav>
);


export default Navbar;
