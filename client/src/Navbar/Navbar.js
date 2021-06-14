import React, { useState, useEffect } from "react";

import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

import { useHistory } from "react-router-dom";
import { ShoppingCart } from "@styled-icons/evaicons-solid/ShoppingCart";
import { useCart } from "../Pages/Cart/CartHandler";
import logo from "../Pages/Images/168412866_475515483641089_5330192756740066819_n.png";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { Cross } from "@styled-icons/icomoon/Cross";
import styled, { keyframes, css } from "styled-components";
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

  const fadeIn = keyframes`
  0%{
    opacity: 0;
    transform:translate(-15px)
  }
  100% {
    opacity: 1;
  }
`;
  const NavMenu = css`
    color: white;
    height: 30px;
  `;
  const CrossMenu = styled(Cross)`
    ${NavMenu}
    animation: ${fadeIn} 1s ease-in;
  `;
  const BurgerMenu = styled(Bars)`
  ${NavMenu}
   animation: ${fadeIn} 1s ease-in;
  `;
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "60px", width: "60px" }}
          />
          Boostify
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click === false && <BurgerMenu></BurgerMenu>}
          {click === true && <CrossMenu></CrossMenu>}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>{" "}
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
            </Link>{" "}
          </li>

          <li
            onClick={logoutHandler}
            className="nav-item"
            style={{
              display: displayCheckBox,
              flexDirection: "column",
              justifyContent: "flex-center",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <p id="logout" className="nav-links">
              Logout <LogOut style={{ height: "27px" }}></LogOut>
            </p>{" "}
          </li>

          <div className="nav-item">
            <Button className="nav-links" display={displayButton} />
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
