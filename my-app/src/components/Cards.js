import React from "react";
import boozehound from "../images/boozehound.png";
import frogr from "../images/frogr.png";
import kermit from "../images/hangmanimg.png";
import jate from "../images/jateimg.png";
import notetaker from "../images/notetakerimg.png";
import booksearch from "../images/booksearchimg.png";


const Cards = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading has-text-centered my-6">
          <h3 className="title is-2">Portfolio</h3>
          <h4 className="subtitle is-5">My latest projects</h4>
        </div>
        <br />

        <div className="container portfolio-container my-2 mt-3">
          <div className="columns level">
            {/* first 2 */}
            <div className="column is-4">
              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>
                      Frogr: <small>A social media app</small>
                    </span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">React</span>
                      <span className="tag is-default">GraphQL</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={frogr} alt="Admin template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://frogr-app.herokuapp.com/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/cbaird21/frogr"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
              <br />

              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>Just Another Text Editor</span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">PWA</span>
                      <span className="tag is-default">IndexedDB</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={jate} alt="Cards template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://jmarsh-jate.herokuapp.com/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/jennnmarshall/just-another-text-editor"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
            </div>
            {/* next 2 */}
            <div className="column is-4">
              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>Hangman App</span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">Handlebars</span>
                      <span className="tag is-default">MySQL</span>
                      <span className="tag is-default">jQuery</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={kermit} alt="Cards template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://crimekermitterhangman.herokuapp.com/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/cbaird21/Hangman_app"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
              <br />

              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>Book Search App</span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">React</span>
                      <span className="tag is-default">GraphQL</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={booksearch} alt="Cards template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://mysterious-cove-33016.herokuapp.com/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/jennnmarshall/book-search-eng"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
            </div>
            {/* last 2 */}
            <div className="column is-4">
              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>BoozeHound Cocktail Finder</span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">API</span>
                      <span className="tag is-default">jQuery</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={boozehound} alt="Cards template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://mg1919.github.io/boozeHound/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/MG1919/boozeHound"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
              <br />

              <div className="card">
                <header className="card-header teal">
                  <p className="card-header-title white">
                    <span>Note Taker App</span>
                    <span className="is-pulled-right ml-1">
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-default">Express.js</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img src={notetaker} alt="Cards template screenshot" />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://safe-cove-82351.herokuapp.com/"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Application
                  </a>
                  <a
                    href="https://github.com/jennnmarshall/note-taker-app"
                    className="card-footer-item"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
