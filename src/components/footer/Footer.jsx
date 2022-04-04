import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jarrell Tan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jarrelltwe/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/jarrelltwe">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Jarrell Tan. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
