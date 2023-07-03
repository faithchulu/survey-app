
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/images/image1.jpg'
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const ImageSlider = () => {
  return (
    <div className="container max-auto bg-gray-100  max-w-5xl max-h-full">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src={image1} alt="Slider Image 1" />
          <p className="legend">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <img src={image2} alt="Slider Image 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src={image3} alt="Slider Image 3" />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
