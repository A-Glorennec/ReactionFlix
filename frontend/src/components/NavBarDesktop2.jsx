import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBell,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function NavBarDesktop2() {
  return (
    <nav className="nav-desktop-2">
      <FontAwesomeIcon
        className="icons"
        icon={faMagnifyingGlass}
        style={{ color: "#ffffff", width: 20, height: 20 }}
      />
      <FontAwesomeIcon
        icon={faBell}
        style={{ color: "#fcfcfc", width: 20, height: 20 }}
      />
      <Link to="/panier">
        <FontAwesomeIcon
          className="icons"
          icon={faCartShopping}
          style={{ color: "#ffffff", width: 20, height: 20 }}
        />
      </Link>

      <span className="nav-chevron-down">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#ffffff", width: 20, height: 20 }}
        />

        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: "#ffffff", paddingLeft: 5, width: 10, height: 15 }}
        />
      </span>
    </nav>
  );
}

export default NavBarDesktop2;
