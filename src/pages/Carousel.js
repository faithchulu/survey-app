
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/images/image1.jpg'
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const ImageSlider = () => {
  return (
    <div className="h-screen">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        className="h-full"
      >
        <div>
          <img
            src={image3}
            alt="Slider Image 1"
            className="object-cover h-screen w-full"
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Slider Image 2"
            className="object-cover h-screen w-full"
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Slider Image 3"
            className="object-cover h-screen w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
