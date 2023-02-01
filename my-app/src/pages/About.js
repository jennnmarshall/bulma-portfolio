// paragraph, dl resume
import React from "react";
import face from "../images/jmarsh.png";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div className="section-heading has-text-centered">
        <h3 className="title is-2 pt-6 mt-6">About Me</h3>
        <h4 className="subtitle is-5">Creative tech savvy professional.</h4>
        <div className="container mb-6">
          <h5>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
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
                        <strong>JavaScript:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="90"
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

      {/* <div className="section-heading has-text-centered mb-6 pb-6 fill">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my past</h4>
        <form method="get" action="JennMarshallResume.pdf">
          <button type="submit" className="button purple is-medium">
            <span className="icon">
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
            <span>Download My Resume</span>
          </button>
        </form>
      </div>
      <div className="fill"></div> */}
      <Footer />
    </section>
  );
};

export default About;
