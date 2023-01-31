// contact form, linkedin
import React from "react";
import Contactform from "../components/Contactform";
import Footer from "../components/Footer";

const Contact = () => {
  // hero, project cards

  return (
    // hero section
    <section>
      <div className="p-6 my-6 has-text-centered">
        <h3 class="title is-2">Contact Me!</h3>
        <h4 class="subtitle is-5">How can I help you?</h4>
      </div>
      <Contactform />
      <Footer />
    </section>
  );
};

export default Contact;