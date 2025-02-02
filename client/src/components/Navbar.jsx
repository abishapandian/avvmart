import React from "react";
import "./style/Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import vector from "../assets/Vector.png";
import profile from "../assets/profile.png";

export default function Navbar() {
  return (
    <>
      <section id="header">
        <a href="#">
          <img src={logo} />
        </a>
        <div className="searchbar">
          <input type="text" className="search-input" placeholder="search avvmart.in" />
          <button className="searchbutton">
            <img src={vector} />
          </button>
        </div>
        <div id="navbar">
          <ul>
            <li className="navigation">
              <a href="home.html">Home</a>
            </li>
            <li className="navigation">
              <a href="Product.html">Product</a>
            </li>
            <li className="navigation">
              <a href="About us.html">About us</a>
            </li>
            <li>
              <img src={profile} />{" "}
            </li>
            <li>
              <img src={cart} />{" "}
            </li>
          </ul>
        </div>
      </section>
      
    </>
  );
}
