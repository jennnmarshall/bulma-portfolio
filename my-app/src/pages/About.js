// paragraph, dl resume
import React from "react";
import face from "../images/jmarsh.png";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div className="section-heading has-text-centered">
        <h3 className="title is-2 pt-6 mt-6">About Me</h3>
        <h4 className="subtitle is-5">Creative tech savvy professional.</h4>
        <div className="container mb-6 px-6">
          <h5>
            Hi! My name is Jenn and I am a full stack developer with a passion
            for simple, user-friendly designs. I was recently certified from the
            Coding Bootcamp at the University of Denver, where I added several
            languages to my tech stack, such as JavaScript, React, and of course
            HTML and CSS. I am a perpetual student (currently taking a course on
            building with TypeScript) and I love reading, graphic design and
            illustration, video games, and searching for the best steamed bao
            bun.
          </h5>
        </div>
      </div>

      <div className="columns has-same-height center level">
        <div className="column is-3">
          <img
            className="portrait"
            src={face}
            alt="Portrait of Jenn Marshall"
          />
        </div>
        <div className="column is-3 center">
          <div className="card">
            <div className="card-content skills-content">
              <h3 className="title is-4">Skills</h3>
              <div className="content">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>HTML5/CSS3</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="95"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="80"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>React:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="80"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Node.js:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="85"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Databases</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="75"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-heading has-text-centered mb-6 pb-6 fill">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my past</h4>
        <a
          href="https://drive.google.com/file/d/1uVVovcb7RyNSnj5mrgRwKkKudp6oJXe1/view?usp=sharing"
          target="_blank"
        >
          <button type="submit" className="button purple is-medium">
            <span className="icon">
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
            <span>Download My Resume</span>
          </button>
        </a>
      </div>
      <div className="fill"></div>
      <Footer />
    </section>
  );
};

export default About;
