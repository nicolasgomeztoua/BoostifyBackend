import React from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import "../Dropdown/Dropdown.css";
const ProdMenu = () => {
  return (
    <>
      <ul id="prodMenu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="MenuItemsWrapper">
              <Link className={item.cName} to={item.path}>
                <div className="Icon-Title-container">
                  <p className="MenuItemTitle">{item.title}</p>
                  <img
                    src={item.icon}
                    alt=" boost icons"
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

export default ProdMenu;
