import React from "react";
import Cards from "../components/Cards";

const Main = () => {
// hero, project cards

return (
  // hero section
  <main>
    <section className="hero is-link is-fullheight is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          Hello! I am
          <h1 className="title is-1">Minion Tim</h1>
          <h2 className="subtitle is-3">Full Stack Web Developer</h2>
        </div>
      </div>
    </section>
    // section heading
    <Cards />
  </main>
);




}