import image from "../../assets/intothewild.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

function Banner() {
  return (
    <>
      <section className="banner-card">
        <img className="banner-img" src={image} alt="Affiche Into The Wild" />;
        <div className="banner-button">
          <button>
            <FontAwesomeIcon
              className="play-icon"
              icon={faPlay}
              style={{ color: "#000000", height: "24" }}
            />
            <h2>Lecture</h2>
          </button>

          <button className="banner-button-dark">
            <FontAwesomeIcon
              className="plus-icon"
              icon={faPlus}
              style={{ color: "#ffffff", height: "24" }}
            />
            <h2>Ma liste</h2>
          </button>
        </div>
      </section>
    </>
  );
}

export default Banner;
