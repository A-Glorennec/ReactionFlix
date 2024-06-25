import React from "react";
import { Link } from "react-router-dom";
import NavMobile1 from "./NavMobile1";
import NavMobile2 from "./NavMobile2";
import NavBarDesktop1 from "./NavBarDesktop1";
import NavBarDesktop2 from "./NavBarDesktop2";
import logo from "../assets/Icons/logo_png-removebg-preview.png";

import "./Header.css";


function Header() {
  return (
    <header>
      <div className="divNavMobile1">
        <div className="divP">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <NavBarDesktop1 />
        </div>
        <NavBarDesktop2 />
        <NavMobile1 />
      </div>
      <NavMobile2 />
    </header>
  );
}

export default Header;
