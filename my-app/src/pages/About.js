// paragraph, dl resume
import React from "react";
import face from "../images/jennface.png";
import Footer from "../components/Footer";

const About = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div class="section-heading has-text-centered">
        <h3 class="title is-2 pt-6 mt-6">About Me</h3>
        <h4 class="subtitle is-5">Subtitle here</h4>
        <div class="container">
          <p>Here is my bio!</p>
        </div>
      </div>

      <div class="columns has-same-height mx-6 level">
        <div class="column is-3 m-auto">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by2">
                <img
                  src={face}
                  alt="Portrait of Jenn Marshall"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-half mgl-auto">
          <div class="card">
            <div class="card-content skills-content">
              <h3 class="title is-4">Skills</h3>
              <div class="content">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="90"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>React:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="80"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Node.js:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="85"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>HTML5/CSS3</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="95"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Databases</strong>
                        <br />
                        <progress
                          class="progress is-primary"
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

      <div class="section-heading has-text-centered mb-6 pb-6 fill">
        <h3 class="title is-2">Resume</h3>
        <h4 class="subtitle is-5">More about my past</h4>
        <a href="#" class="button is-link is-medium">
          <span class="icon">
            <i class="fas fa-file-alt"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="fill"></div>
      <Footer />
    </section>
  );
};

export default About;
