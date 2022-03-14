import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/bgremoved.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      {/* container specially for this file */}
      <div className="container header__container">
        {/* <h5 className="header__hello">Hello I'm</h5> */}
        <h1 className="header__name">I'm Jarrell.</h1>
        <h5 className="header__title">a software developer.</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="profile-pic" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
