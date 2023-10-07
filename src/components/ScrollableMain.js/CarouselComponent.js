import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galaxy from "../../assets/galaxy.jpg";

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="w-full h-24 p-1">
          <img src={galaxy} alt="space 1" className="rounded-lg" />
        </div>
        <div className="w-full h-24 p-1">
          <img src={galaxy} alt="space 2" className="rounded-lg" />
        </div>
        <div className="w-full h-24 p-1">
          <img src={galaxy} alt="space 3" className="rounded-lg" />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
