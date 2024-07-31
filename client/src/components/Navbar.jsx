import React from "react";
import "./style/Navbar.css";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <div>
        <ul id="navbar">
          <li>
            <a href="shop.html">
              <img src=""></img>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <img src=""></img>
            </a>
          </li>
          <div className="pages">
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="product.html">Product</a>
            </li>
            <li>
              <a href="home.html">Home</a>
            </li>
          </div>
          <li class="logo">
            <a href="#">
              <img src={logo} width={"84px"} height={"60px"} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
