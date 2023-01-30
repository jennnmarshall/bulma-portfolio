// paragraph, dl resume
import React from "react";

const Portfolio = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div class="section-heading">
        <h3 class="title is-2">About Me</h3>
        <h4 class="subtitle is-5">Subtitle here</h4>
        <div class="container">
          <p>
            Here is my bio!
          </p>
        </div>
      </div>

      <div class="columns has-same-height is-gapless">
        {/* <div class="column">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Guru's Lab</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>0123-456789</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>minion@despicable.me</td>
                  </tr>
                </table>
              </div>
              <br />
              <div class="buttons has-addons is-centered">
                <a href="#" class="button is-link">
                  Github
                </a>
                <a href="#" class="button is-link">
                  LinkedIn
                </a>
                <a href="#" class="button is-link">
                  Twitter
                </a>
                <a href="#" class="button is-link">
                  CodeTrace
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://source.unsplash.com/random/1280x960"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
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
    </section>
  );
};

export default Portfolio;
