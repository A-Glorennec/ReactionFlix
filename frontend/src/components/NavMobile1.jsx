import "./Header.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import screencast from "../assets/Icons/screencast.svg";

function NavMobile1() {
  return (
    <nav className="nav-mobile-1">
      <FontAwesomeIcon
        className="icons"
        icon={faMagnifyingGlass}
        style={{ color: "#ffffff" }}
      />
      <img className="icons" src={screencast} alt={screencast} />
      <Link to="/panier">
        <FontAwesomeIcon
          className="icons"
          icon={faCartShopping}
          style={{ color: "#ffffff" }}
        />
      </Link>
    </nav>
  );
}

export default NavMobile1;
