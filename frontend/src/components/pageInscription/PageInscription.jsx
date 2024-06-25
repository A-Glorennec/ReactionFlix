import { useState } from "react";
import { useNavigate} from "react-router-dom";
import logo from "../../assets/Icons/logo_png-removebg-preview.png";
import applePay from "../../assets/Icons/applePay.svg";
import paypal from "../../assets/Icons/paypal.svg";
import googlePay from "../../assets/Icons/googlePay.svg";
import blueCard from "../../assets/Icons/blue-card.svg";
import Footer from "../Footer";

import "./PageInscription.css";


const PageInscription = () => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [firstName, setfirstName] = useState(" ");
  const [name, setName] = useState(" ");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // on récupère les données déjà stockées dans le localstorage 
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    // On vérifie si l'utilisateur est déjà inscrit, si oui on le redirige vers la page de connexion, sinon on continue l'inscription
    if (userData && userData.email === email.trim()) {
      alert('Vous êtes déjà inscrit sur ReactionFlix !');
      navigate('/pagedeconnexion');
      // S'il n'est pas encore inscrit on l'ajoute dans le localstorage et on le redirige vers la page d'accueil 
    } else if (email.trim() && password.trim()) {
      localStorage.setItem('userData', JSON.stringify({ email, password, firstName, name }));
      navigate('/');
      alert(`${firstName} êtes bien inscrit sur ReactionFlix !`);
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };
return (
  <>
    <div className="inscription-logo">
      <img src={logo} alt="Logo ReactionFlix" />
    </div>
    <h1 className="inscription-title">Formulaire d'inscription</h1>
    <form onSubmit={handleSubmit}>
      <h3 className="question">Quel est votre nom ?</h3>
      <input value={name} type="text" onChange={e => setName(e.target.value)} autoComplete="name" />
      <h3 className="question">Quel est votre prénom ?</h3>
      <input value={firstName} type="text" onChange={e => setfirstName(e.target.value)} autoComplete="first-name"/>
      <h3 className="question">Votre date de naissance ?</h3>
      <input type="date" />
      <h3 className="question">Votre adresse mail ?</h3>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email"/>
      <h3 className="question">Confirmation adresse mail ?</h3>
      <input type="email" />
      <h3 className="question">Mot de passe ?</h3>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <h3 className="question">Confirmation mot de passe ?</h3>
      <input type="password" />
      <h2 className="facturation-title">Adresse de facturation</h2>
      <h3 className="question">Adresse</h3>
      <input type="text"/>
      <h3 className="question">Ville</h3>
      <input type="text" />
      <h3 className="question">Code postal</h3>
      <input type="number" />
      <h3 className="question">Pays</h3>
      <input type="text" />
      <h2 className="facturation-title">Paiement</h2>
      <div className="pay-icons">
        <a href="#"><img src={applePay} alt="Logo Apple Pay" /></a>
        <a href="#"><img src={paypal} alt="Logo Paypal" /></a>
        <a href="#"><img src={googlePay} alt="Logo Google Pay" /></a>
      </div>
      <div className="blue-card">
        <img src={blueCard} alt="Icône carte bleue" />
        <input type="number" placeholder="Numéro de carte" style={{ paddingLeft: 40}} />
      </div>
      <input type="month" />
      <input className="month" type="number" placeholder="Cryptograme" />
      <button className="submit-button" type="submit">Soumettre</button>
    </form>
    <Footer />
  </>
);
};

export default PageInscription;
