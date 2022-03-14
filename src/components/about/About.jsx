import React from "react";
import "./about.css";
import ME from "../../assets/about-me.JPG";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Graduating</h5>
              <small>May 2023</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p className="about__desc">
            A Computer Science junior in Arizona State University looking for
            internship opportunities for the summer of 2022. I've always had a
            thing for computers since I was little which is why I decided to
            pursue a degree in Computer Science. My interests lead toward
            frontend development becauase I feel that I have the eye for
            aesthetics and love seeing clean and minimalistic websites.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
