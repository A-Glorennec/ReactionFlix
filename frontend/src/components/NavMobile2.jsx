import "./Header.css";
import { Link } from "react-router-dom";

function NavMobile2() {
  return (
    <nav className="nav-mobile-2">
      <ul className="list-nav2">
        <li className="list-radius">
          <Link to="/pageseries"> Séries </Link>
        </li>
        <li className="list-radius">
          <Link to="/pagefilms"> Films </Link>
        </li>
        <li className="list-radius ">Catégories v</li>
      </ul>
    </nav>
  );
}

export default NavMobile2;
