import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.svg";
import youtube from "../assets/Icons/youtube.svg";
import twitter from "../assets/Icons/square-x-twitter.svg";
import "./Footer.css";


function Footer() {
  return (
    <footer>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={youtube} alt="Youtube" />
      <img src={twitter} alt="Twitter" />
    </footer>
  );
}
export default Footer;
