
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/images/image1.jpg'
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const ImageSlider = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-100 min-h-screen p-8">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src={image1} alt="Slider Image 1" />
          <p className="legend">Image 1</p>
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
