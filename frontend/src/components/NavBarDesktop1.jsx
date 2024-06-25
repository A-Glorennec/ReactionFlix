import "./Header.css";
import { Link } from "react-router-dom";

function NavBarDesktop1() {
  return (
    <ul className="NavBarDesktop1">
      <li className="liNavBarDesktop1">
        <Link to="/" className="aNavBarDesktop1">
          {" "}
          Home{" "}
        </Link>
      </li>
      <li className="liNavBarDesktop1">
        <Link to="/pagefilms" className="aNavBarDesktop1">
          {" "}
          Films{" "}
        </Link>
      </li>
      <li className="liNavBarDesktop1">
        <Link to="/pageseries" className="aNavBarDesktop1">
          {" "}
          Séries{" "}
        </Link>
      </li>
      <li className="liNavBarDesktop1">
        <Link to="/newspages" className="aNavBarDesktop1">
          {" "}
          Nouveautés{" "}
        </Link>
      </li>
    </ul>
  );
}
export default NavBarDesktop1;
