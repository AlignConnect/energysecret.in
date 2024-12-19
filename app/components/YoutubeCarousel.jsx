"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const YoutubeCarousel = () => {
  return (
    <div className="max-w-5xl m-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={true}
        showThumbs={false}
        interval={3000}
        showArrows={true}
      >
        <div>
          <div className="md:w-[1000px]  md:h-[600px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oOfFq4ihRsY?si=emAex_v5nqbweqDR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="md:w-[1000px]  md:h-[600px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/JbWLIriN0cQ?si=qgLoWVEgdBaAm6dd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div className="md:w-[1000px]  md:h-[600px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fC9s9TOf9pg?si=uRO13p4zLRUenVpn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default YoutubeCarousel;
