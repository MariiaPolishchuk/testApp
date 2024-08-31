import React from "react";
import "../../../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="fade-in">
      <div className="footer-separator"></div>
      <div className="footer-contacts">
        <img className="logo-icon" src="/assets/images/LINGUAHUB.PNG" alt="" />
        <p className="footer-contacts-info-contact">
          <a href="/public" className="footer-contacts-social">
            <img
              className="footer-img"
              src="/src/assets/images/faceb.png"
              alt="face"
            />
          </a>
          <a href="/public" className="footer-contacts-social">
            <img
              className="footer-img"
              src="/src/assets/images/telegr.png"
              alt="inst"
            />
          </a>
          <a href="/" className="footer-contacts-social">
            <img
              className="footer-img"
              src="/src/assets/images/instta.png"
              alt="tg"
            />
          </a>
        </p>
        <p className="footer-company">©2024 LinguaHub</p>
      </div>
    </footer>
  );
};

export default Footer;
