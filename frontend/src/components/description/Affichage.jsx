import "./description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeXmark,
  faDownload,
  faCartShopping,
  faPlus,
  faShareNodes,
  faThumbsUp,
  faThumbsDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import affiche2 from "../../assets/affiches/viking.png";

function Affichage() {
  return (
    <div>
      <div className="right-volume">
        <div className="centered-element">
          <img className="img" src={affiche2} alt="affiche" />
          <FontAwesomeIcon
            className="play"
            icon={faPlay}
            style={{ color: "#ffffff" }}
          />
        </div>
        <FontAwesomeIcon
          className="volume"
          icon={faVolumeXmark}
          style={{ color: "#ffffff" }}
        />
      </div>
      <h1 className="descriptifName"> Nom du film </h1>
      <div className="allMini">
        <h3 className="mini">date</h3>
        <h3 className="miniAge">+16</h3>
        <h3 className="mini">6 saisons</h3>
        <h3 className="miniHD">HD</h3>
      </div>
      <div className="allButton">
        <button className="divReprendre" type="button">
          <FontAwesomeIcon className="play1" icon={faPlay} />
          <h1>Reprendre</h1>
        </button>

        <button className="divDownload" type="button">
          <FontAwesomeIcon
            className="play1"
            icon={faDownload}
            style={{ color: "#ffffff" }}
          />
          <h1>Téléchargement</h1>
        </button>
      </div>
      <p className="pTitre">S1 : E1 “Lorem Ipsum”</p>
      <p className="pDescriptif">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, delectus?
        Deleniti quam nam dolore dolorem architecto quis? Asperiores assumenda
        enim, repellat, nulla dolore deserunt minima dignissimos, voluptatum
        distinctio aut animi!
      </p>
      <div className="choix">
        <div className="divColomn">
          <FontAwesomeIcon
            className="icons"
            icon={faPlus}
            style={{ color: "#ffffff" }}
          />
          <h2 className="ssVector">Ma liste</h2>
        </div>
        <div className="divColomn">
          <div className="divEval">
            <FontAwesomeIcon
              className="icons"
              icon={faThumbsUp}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="icons"
              icon={faThumbsDown}
              style={{ color: "#ffffff" }}
            />
          </div>
          <h2 className="ssVector">Evaluer</h2>
        </div>
        <div className="divColomn">
          <FontAwesomeIcon
            className="icons"
            icon={faShareNodes}
            style={{ color: "#ffffff" }}
          />
          <h2 className="ssVector">Partager</h2>
        </div>
        <div className="divColomn">
          <FontAwesomeIcon
            className="icons"
            icon={faDownload}
            style={{ color: "#ffffff" }}
          />
          <h2 className="ssVector">Télécharger</h2>
        </div>
        <div className="divColomn">
          <FontAwesomeIcon
            className="icons"
            icon={faCartShopping}
            style={{ color: "#ffffff" }}
          />
          <h2 className="ssVector">Acheter</h2>
        </div>
      </div>
      <div className="centre">
        <button className="divSaison" type="button">
          <h1>Saison 1</h1>
          <FontAwesomeIcon className="play1" icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
}

export default Affichage;
