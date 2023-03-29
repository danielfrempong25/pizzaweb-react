import img1 from "./images/alan-hardman-SU1LFoeEUkk-unsplash (1).jpg";

import img2 from "./images/kelvin-t-AcA8moIiD3g-unsplash.jpg";
import img3 from "./images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg";

function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt="pizza" />
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt="pizza" />
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt="pizza" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
