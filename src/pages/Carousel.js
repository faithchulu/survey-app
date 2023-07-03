
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold mb-4">Carousel Example</h2>
      <Slider {...settings}>
        <div className="px-4">
          <img
            className="w-full rounded-lg"
            src="https://via.placeholder.com/400"
            alt="Carousel Item 1"
          />
        </div>
        <div className="px-4">
          <img
            className="w-full rounded-lg"
            src="https://via.placeholder.com/400"
            alt="Carousel Item 2"
          />
        </div>
        <div className="px-4">
          <img
            className="w-full rounded-lg"
            src="https://via.placeholder.com/400"
            alt="Carousel Item 3"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
