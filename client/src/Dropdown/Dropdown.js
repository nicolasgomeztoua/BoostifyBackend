import React, { useState } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="MenuItemsWrapper">
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                <div className="Icon-Title-container">
                  <p className="MenuItemTitle">{item.title}</p>
                  <img
                    src={item.icon}
                    alt="ranked boost"
                    className="MenuRankedBoostIcon "
                    id={item.cNameIcon}
                  ></img>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
