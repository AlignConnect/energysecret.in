import dynamic from "next/dynamic";
import React from "react";
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Sec1cp = dynamic(() => import("./Sec1cp"), {
  loading: () => <p>loader</p>,
});

const Sec2 = dynamic(() => import("./Sec2"), {
  loading: () => <p>loader</p>,
});

const Header = () => {

  const carouselImage = [
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5ab6777d-5b2a-4eb0-a974-cae27ec66200/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/867a1634-c5e5-4785-1757-abf2e3c64200/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fd01fe46-8e47-4ac8-ab70-1fcae07af100/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2dcebc65-59f7-42e1-0c7d-9f9d15c01700/public",
  ]


  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            src={carouselImage[i]}
            alt={`Thumbnail ${i}`}
            className="w-full mx-auto mih-h-[80px]"
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-dots_custom h-[100px] sm:h-[170px]",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "h-[55vh] sm:h-[80vh]"
  };


  return (
    <section className="">

  
      <Slider {...settings}>

        {carouselImage.map((img, index) => (
          <div key={index} className="">
            <img src={img} alt={`Product ${index + 1}`} />
          </div>
        ))}


      </Slider>



      <Sec1cp />
      {/*  <Sec2 /> */}
    </section>
  );
};

export default Header;
