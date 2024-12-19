import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const YoutubeFrame = dynamic(() => import("./YoutubeFrame"));

const YoutubeVideo = () => {
  return (
    <section className={noto.className}>
      <h1 className="text-center text-2xl md:text-4xl pt-4 pb-3 font-bold">
        What Our Customer's Say
      </h1>

      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        showThumbs={false}
        showArrows={true}
      >
        <div>
          <YoutubeFrame vid={"b_Yg0prOTt4?si=Qfg9MJ3MZ1OyM6pm"} />
        </div>

        <div>
          <YoutubeFrame vid={"l6HdJFVR1ak?si=D0lmk0e_Fxc_Jq5Q"} />
        </div>

        <div>
          <YoutubeFrame vid={"HvnOSO2Vh6U?si=KDTEUwjx3XGG7Gj-"} />
        </div>
      </Carousel>
    </section>
  );
};

export default YoutubeVideo;
