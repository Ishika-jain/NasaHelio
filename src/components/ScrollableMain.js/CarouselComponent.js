import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/nasa.jpg";
import img2 from "../../assets/banner.png"
import img3 from "../../assets/nasa3.png";

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
          <img src={img1} alt="space 1" className="rounded-lg" />
        </div>
        <div className="w-full h-24 p-1">
          <img src={img2} alt="space 2" className="rounded-lg" />
        </div>
        <div className="w-full h-24 p-1">
          <img src={img3} alt="space 3" className="rounded-lg" />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
