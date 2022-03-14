import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/grocery.png";
import IMG2 from "../../assets/connect4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Grocery4U",
    desc: "Add items you would want to buy or look at the grocery store. This is a React app that will help you manage your grocery list.",
    github: "https://github.com/jarrelltwe/grocery4u",
    demo: "https://grocery4u-app.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Connect4",
    desc: "Loved playing Hasbro's Connect 4? This is a recreation of the original Hasbro Connect 4 game based in C++.",
    github: "https://github.com/jarrelltwe/connect4",
    demo: "https://github.com/jarrelltwe/connect4/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{desc}</h5>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
