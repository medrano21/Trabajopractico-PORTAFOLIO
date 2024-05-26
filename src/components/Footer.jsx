import React from "react";
import "../css/footer.css";
import git from "../assets/git.png";
import gmail from "../assets/gmail.png";
import ig from "../assets/ig.png";
import link from "../assets/link.png";
import face from "../assets/face.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="redes">
          <br />
          <br />
          <p>MI REDES SOCIALES:</p>
          <a
            href="https://www.facebook.com/profile.php?id=100010531922618&mibextid=ZbWKwL"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={face} alt="facebook" className="icon" />
          </a>
          {"  "}
          <a
            href="https://github.com/medrano21"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="github" className="icon" />
          </a>{" "}
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=new"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} alt="gmail" className="icon" />
          </a>{" "}
          <a
            href="https://www.instagram.com/facundo_medranoo?igsh=dW4yeXlkdmw3MDEz"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="instagram" className="icon" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/facundo-medrano-62ba03232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link} alt="linkdin" className="icon" />
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
