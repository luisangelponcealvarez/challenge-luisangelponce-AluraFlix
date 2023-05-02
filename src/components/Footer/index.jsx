import "./Footer.css";
import {
  ImLinkedin,
  AiFillGithub,
  FaInstagram,
  BsFacebook,
  FaTwitter,
  BsSpotify,
  AiFillYoutube,
} from "react-icons/all";

function Footer() {
  return (
    <footer id="contac">
      <div className="container_redes-footer">
        <a
          href="https://www.linkedin.com/in/luis-angel-ponce-alvarez-848826242/"
          target="_blank"
        >
          <ImLinkedin className="icon" />
        </a>

        <a href="https://www.youtube.com/channel/UCQ851l8kDeiZYfg6cozN__g" target="_blank">
          <AiFillYoutube className="icon" />
        </a>

        <a href="https://github.com/luisangelponcealvarez/" target="_blank">
          <AiFillGithub className="icon" />
        </a>

        <a
          href="https://www.instagram.com/poncealvarezluisangel/"
          target="_blank"
        >
          <FaInstagram className="icon" />
        </a>

        <a
          href="https://www.facebook.com/luisangel.poncealvarez.37"
          target="_blank"
        >
          <BsFacebook className="icon" />
        </a>

        <a href="https://twitter.com/Luisang01161226" target="_blank">
          <FaTwitter className="icon" />
        </a>
        <a
          href="https://open.spotify.com/user/nhf5pz5g4wdgjk0bvw2fzhakd?si=1ff6fa2155254f25"
          target="_blank"
        >
          <BsSpotify className="icon" />
        </a>
      </div>

      <div className="container_text--footer">
        <span>Copyright © | Coded with</span>
        <span>by</span>
        <span>LUIS ANGEL PONCE ALVAREZ</span>
      </div>
    </footer>
  );
}

export default Footer;
