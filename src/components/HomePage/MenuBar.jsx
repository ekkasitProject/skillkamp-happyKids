import React from "react";
import "./Menubar.css";
import cart from "../../assets/cart-svgrepo-com.svg";
import login from "../../assets/login.svg";
const MenuBar = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>happy kids</span>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop Collection</a>
          </li>
          <li>
            <a href="">Our Story</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="rigth-nav">
          <button className="login">
            <img src={login} alt="" /> <span>Log In</span>
          </button>
          <button className="cart">
            <img src={cart} alt="" /> <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
