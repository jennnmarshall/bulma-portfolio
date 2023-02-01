import React from "react";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var carousels = bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  }
  render() {
    return (
      <div>
        <div class="carousel carousel-animated carousel-animate-slide">
          <div class="carousel-container">
            <div class="carousel-item has-background is-active">
              <img class="is-background" src="" alt="" width="" height="" />
              <div class="title">Title</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
