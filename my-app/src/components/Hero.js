import React from "react";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
import logo from "../images/vibes.png";

const Hero = () => {

    async function loadParticles(options) {
    await loadFull(tsParticles);

    await tsParticles.load('.container', options);
    }

    const configs = {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
        fullScreen: {
            enable: false,
        },
      },
      retina_detect: true,
    };

    loadParticles(configs);

  return (
    <section className="hero is-link is-fullheight is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={logo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
