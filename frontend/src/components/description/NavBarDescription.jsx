import "./description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeftLong,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function NavBarDescription() {
  return (
    <div className="navBar">
      <FontAwesomeIcon icon={faLeftLong} style={{ color: "#ffffff" }} />
      <FontAwesomeIcon
        className="icons"
        icon={faMagnifyingGlass}
        style={{ color: "#ffffff", width: 20, height: 20 }}
      />
    </div>
  );
}
export default NavBarDescription;
