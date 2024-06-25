import React from "react";
import "./description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faThumbsDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import affiche from "../../assets/affiches/affiche-mad-max 2.png";
import NavBarDescription from "./NavBarDescription";
import FooterDescription from "./FooterDescription";
import Headers from "../Header";
import Footer from "../Footer";
import Affichage from "./Affichage";

function Description() {
  return (
    <>
      <div className="all">
        <Headers className="headerDesktop" />
        <div className="desktopDescription">
          <h1>Nom du film</h1>
          <div className="divDescription">
            <img src={affiche} className="affiche" alt="affiche" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga
              iusto ad alias ex itaque in debitis ab assumenda culpa, eius ut
              sapiente, consequuntur cum quaerat animi rerum, aperiam nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              blanditiis nam molestias, nobis, aut dolor odio id a, minima quam
              tempora animi assumenda rerum at eius deserunt possimus
              accusantium vitae!
            </p>
          </div>
          <div className="divBas">
            <button className="listDesc" type="button">
              <FontAwesomeIcon
                className="icons"
                icon={faPlay}
                style={{ color: "#ffffff" }}
              />
              <h2>Lecture</h2>
            </button>

            <button className="listDesc" type="button">
              <FontAwesomeIcon
                className="icons"
                icon={faPlus}
                style={{ color: "#ffffff" }}
              />
              <h2>Ma liste</h2>
            </button>
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
            <FontAwesomeIcon
              className="icons"
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <h3 className="genre">Genres : Action, Horreur, Aventure, Thriller</h3>
        <Footer />
      </div>
      <NavBarDescription />
      <main className="mainMobile">
        <Affichage />
      </main>
      <FooterDescription />
    </>
  );
}

export default Description;
