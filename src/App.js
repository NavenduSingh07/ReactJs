import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      {/* Amazon Logo */}
      <img
        className={style.logo}
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="Amazon Logo"
      />

      {/* Location Icon and Address */}
      <div className={style.location}>
        <i className={`fas fa-map-marker-alt ${style.locationIcon}`}></i>
        <div>
          <span className={style.greeting}>Hello</span>
          <span className={style.address}>Select your address</span>
        </div>
      </div>
      {/* Search Bar */}
      <div className={style.search}>
        <input type="text" className={style.searchInput} placeholder="Search" />
        <button className={style.searchButton}>
          <i className={`fas fa-search ${style.searchIcon}`}></i>
        </button>
      </div>

      {/* Language and Sign In */}
      <div className={style.language}>
        <span className={style.languageText}>EN</span>
        <span className={style.greeting}>Hello, Sign in</span>
      </div>

      {/* Account & Lists, Returns & Orders */}
      <div className={style.links}>
        <span className={style.link}>Account & Lists</span>
        <span className={style.link}>Returns & Orders</span>
      </div>

      {/* Cart */}
      <div className={style.cart}>
        <i className={`fas fa-shopping-cart ${style.cartIcon}`}></i>
        <span className={style.cartCount}>0</span>
      </div>
    </nav>
  );
};

export default Navbar;
