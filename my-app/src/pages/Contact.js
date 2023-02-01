// contact form, linkedin
import React from "react";
import Contactform from "../components/Contactform";
import Footer from "../components/Footer";

const Contact = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div className="pt-6 mt-6 has-text-centered">
        <h3 className="title is-2">Contact Me!</h3>
        <h4 className="subtitle is-5">How can I help you?</h4>
      </div>
      <Contactform />
      <div className="columns">
        <div className="column center has-text-centered mb-6">
          <h3 className="title is-2 has-text-centered">Connect With Me</h3>
          <a
            href="https://github.com/jennnmarshall"
            className="button purple px-4 mx-3"
          >
            GitHub
          </a>
          <button type="submit" className="button purple px-4 mx-3">
            LinkedIn
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;