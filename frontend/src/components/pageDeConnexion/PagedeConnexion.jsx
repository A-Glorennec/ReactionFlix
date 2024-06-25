import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Icons/logo_png-removebg-preview.png";
import Footer from "../Footer";

import "./PageDeConnexion.css";
import { useState } from "react";



function PageDeConnexion() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("userData");
    const userData = storedUserData ? JSON.parse(storedUserData) : null;


    if(userData && userData.email === email.trim() && userData.password === password) {
      alert("Vous êtes connecté")
      navigate("/");
    } else {
      alert("Vous n'avez pas encore de compte")
    }
  }

  return (
    <>
      <div className="connexion-logo">
        <img src={logo} alt="Logo" />,
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="user-input">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#ffffff", height: "20" }}
          />
          <input type="text" placeholder="Adresse email" style={{paddingLeft: 15}} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="password-input">
          <FontAwesomeIcon
            icon={faLock}
            style={{ color: "#ffffff", height: "20" }}
          />
          <input type="password" placeholder="Mot de passe" style={{paddingLeft: 15}} onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className="signUp" type="submit" >Se connecter</button>
      </form>
      <h2 className="new-user">
        Nouveau chez <span>ReactionFlix ?</span>
      </h2>
      <Link to="/pageinscription">
        {" "}
        <button type="submit" className="new-user-button">
          Créer votre compte içi
        </button>
      </Link>
      <div className="connexion-footer">
        <Footer />
      </div>
    </>
  );
}

export default PageDeConnexion;
