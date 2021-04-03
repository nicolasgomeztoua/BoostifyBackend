import React, { useState, useEffect } from "react";

import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import { ExtraCheckBox } from "../Pages/RankBoost/RankedBoostProductElements";
import { useHistory } from "react-router-dom";
import { ShoppingCart } from "@styled-icons/remix-fill/ShoppingCart";
import { useCart } from "../Pages/Cart/CartHandler";

const Navbar = () => {
  let history = useHistory();
  const cartItems = useCart();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayCheckBox, setDisplayCheckBox] = useState("none");
  const [displayButton, setDisplayButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLoggedIn(true);
    } else if (!localStorage.getItem("authToken")) {
      setLoggedIn(false);
    }
  }, []);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
    setLoggedIn(false);
  };

  useEffect(() => {
    if (loggedIn === true) {
      setDisplayCheckBox("flex");
    }
    if (loggedIn === false) {
      setDisplayCheckBox("none");
    }
    console.log(loggedIn);
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn === true) {
      setDisplayButton("none");
    }
    if (loggedIn === false) {
      setDisplayButton("flex");
    }
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Boostify
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/rank-boosting"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <div className="nav-item">
            <Button className="nav-links" display={displayButton} />
          </div>
          <div
            className="nav-item"
            style={{
              display: displayCheckBox,
              flexDirection: "column",
              justifyContent: "flex-center",
              textAlign: "center",
            }}
          >
            <ExtraCheckBox
              onChange={logoutHandler}
              style={{ marginLeft: "10px" }}
            />
            <p id="logout">logout</p>
          </div>

          <li className="nav-item">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <ShoppingCart id="cart-icon"></ShoppingCart>{" "}
              <span id="cart-icon-number">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
