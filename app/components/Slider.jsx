"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const SliderData = [
    {
      gif: "/main/hft_home/1.mp4",
      title: "बिस्तर पर परफॉर्मेंस से सिट्टी-पिट्टी गुम करके रख दें",
    },

    {
      gif: "/main/hft_home/2.mp4",
      title: "लिंग इतना सख्त और मजबूत जो चूत में खलबली मचा दे ",
    },

    {
      gif: "/main/hft_home/3.mp4",
      title: "अधिक देर तक सेक्स करके ऑर्गेज्म  दिलाएं",
    },

    {
      gif: "/main/hft_home/4.mp4",
      title: "लिंग इतना लम्बा हो कि चूत की आखिरी हिस्से तक छुए",
    },
  ];

  const nextSlide = () => {
    setcurrentIndex(
      currentIndex === SliderData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const preSlide = () => {
    setcurrentIndex(
      currentIndex === 0 ? SliderData.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="flex justify-center overflow-hidden">
      {SliderData.map((item, i) => {
        return (
          <div className="relative" key={i}>
            <div>
              <h1
                className={
                  currentIndex === i
                    ? " font-bold  text-2xl  bg-gradient-to-r border-2 border-red-200 from-red-600 to-red-400 py-2 text-white w-full  pt-5 px-2 text-center mb-3 block "
                    : "hidden "
                }
              >
                {item.title}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">

              <video className={
                currentIndex === i
                  ? " md:w-[600px] md:h-[350px] w-[100%] h-[250px]  bg-cover block rounded-lg "
                  : "hidden "
              } autoPlay muted loop >
                <source src={item.gif} type="video/mp4" />
              </video>
              <AiOutlineArrowLeft
                className="absolute text-red left-2 md:left-5 top-[57%] text-4xl font-bold bg-white rounded-full p-2  cursor-pointer"
                onClick={preSlide}
              />
              <AiOutlineArrowRight
                className="absolute right-2 md:right-6 top-[57%] text-4xl font-bold bg-white rounded-full p-2 cursor-pointer"
                onClick={nextSlide}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
