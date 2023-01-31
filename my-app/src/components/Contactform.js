import React from "react";
import { useState } from "react";


const Contactform = () => {

const FORM_ENDPOINT = "https://public.herotofu.com/v1/945d7a00-a0cc-11ed-82c7-3d7607318e65";

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }


  return (
    <section className="section" id="contact section">
      <div className="container">
        <div className="columns is-justify-content-center">
          <div className="column is-6-tablet is-5-desktop is-4-widescreen is-3-fullh">
            <form
              method="POST"
              action={FORM_ENDPOINT}
              className="box p-5"
              onSubmit={handleSubmit}
              target="_blank"
            >
              <label className="is-block mb-4">
                <span className="is-block mb-2">Your name</span>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />
              </label>

              <label className="is-block mb-4">
                <span className="is-block mb-2">Email address</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="input"
                  placeholder="your.email@example.com"
                />
              </label>

              <label className="is-block mb-4">
                <span className="is-block mb-2">Message</span>
                <textarea
                  name="message"
                  className="textarea"
                  rows="3"
                  placeholder="How can I help you?"
                ></textarea>
              </label>

              <div className="mb-4">
                <button type="submit" className="button is-link px-4"> 
                  Contact Me
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contactform;
