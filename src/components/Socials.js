import React from 'react';
import {
  FaLinkedinIn,
  BsTwitter,
  TfiGoogle,
  FaFacebookF,
  FaPinterestP,
} from 'react-icons/all';

const Socials = () => (
  <footer className="socials">
    <div className="socials-container">
      <a
        href="https://github.com/killy10o10/FitMeUp.git"
        className="socials-link"
      >
        <BsTwitter className="socials-icon" />
      </a>
      <a
        href="https://github.com/killy10o10/FitMeUp.git"
        className="socials-link"
      >
        <FaFacebookF className="socials-icon" />
      </a>
      <a
        href="https://github.com/killy10o10/FitMeUp.git"
        className="socials-link"
      >
        <TfiGoogle className="socials-icon" />
      </a>
      <a
        href="https://github.com/killy10o10/FitMeUp.git"
        className="socials-link"
      >
        <FaLinkedinIn className="socials-icon" />
      </a>
      <a
        href="https://github.com/killy10o10/FitMeUp.git"
        className="socials-link"
      >
        <FaPinterestP className="socials-icon" />
      </a>
    </div>

    <h2 className="socials-copyright">&#169; 2023 FitMeUp - damkj</h2>
  </footer>
);

export default Socials;
