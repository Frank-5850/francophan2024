import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navStyles.css";

const Nav = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className="navContainer">
      <div className="navWrapper">
        <nav className="nav">
          <Link className="navLink" to="/francophan2024/">
            HOME
          </Link>
          <Link className="navLink" to="/francophan2024/About">
            ABOUT
          </Link>
          <Link className="navLink" to="/francophan2024/work">
            WORK
          </Link>
        </nav>
        <div className="menuButton" onClick={toggleMenu}>
          menu
        </div>
      </div>
      <div
        className={
          mobileMenuActive ? "mobileMenu mobileMenuOn" : "mobileMenuOff"
        }
      >
        <Link
          className="mobileNavLink"
          onClick={toggleMenu}
          to="/francophan2024/"
        >
          HOME
        </Link>
        <Link
          className="mobileNavLink"
          onClick={toggleMenu}
          to="/francophan2024/About"
        >
          ABOUT
        </Link>
        <Link
          className="mobileNavLink"
          onClick={toggleMenu}
          to="/francophan2024/work"
        >
          WORK
        </Link>
      </div>
    </div>
  );
};

export default Nav;
