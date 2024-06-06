import React from "react";
import logo from "../../assets/Logo.png";
import "../Header/Header.css";

const Header = () => {
  const navItem = ["Home", "About", "Service", "Blog", "Contact"];
  return (
    <>
      <div className="header__bg">
        <div className="container">
          <div className="hear__part">
            <div>
              <picture>
                <img src={logo} alt={logo} />
              </picture>
            </div>
            <div>
              <ul className="menuItem">
                {navItem.map((item) => (
                  <li>
                    <a href="#" className="menu__list">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <button className="btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
