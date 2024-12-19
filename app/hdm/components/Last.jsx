import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
const PopUp = dynamic(() => import("@/app/hds/components/FormPop"), {
  loading: () => <p>loader</p>,
});

const Last = () => {
  const List = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4518eb24-2e28-4753-6915-c747cc521400/public",
      para: "COD पेमेंट उपलब्ध",
    },
    // {
    //   img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/066ee60c-69da-4b18-d35a-3152bcd06000/public",
    //   para: "97.6% सफलता दर",
    // },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e7aa0185-da09-4330-f490-bd4a43c38d00/public",
      para: "+30 लाख संतुष्ट ग्राहक",
    },
  ];

  const List1 = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d3988c8c-6034-4efb-34ef-e84157507100/public",
      para: "सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ ",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/200e6492-4d81-4ef1-dc35-0be44e1ffd00/public",
      para: "बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7ce68f0d-526e-4e48-502c-4d30a67e1100/public",
      para: "एक महीने के अंदर खेल प्रदर्शन में सुधार अनुभव करें ",
    },
  ];

  return (
    <div>
      <div className="px-3 sm:px-5 my-5">
        <div className="grid grid-cols-2 w-[70%] mx-auto gap-5 font-semibold text-center">
          {List.map((e, key) => {
            return (
              <div className="" key={key}>
                <img
                  src={e.img}
                  alt="image"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  className=""
                />
                <p className="mt-3 sm:mt-5 ">{e.para}</p>
              </div>
            );
          })}
        </div>

        <div className="relative my-5">
          <div className="relative z-10 p-3 sm:p-5 ">
            <p className="text-yellow-400 text-xl sm:text-2xl font-semibold text-center mb-3">
              Right Way of Consumption{" "}
            </p>
            <div className="text-white grid gap-3">
              {List1.map((e, key) => {
                return (
                  <div
                    className="grid grid-cols-12 gap-3 items-center "
                    key={key}
                  >
                    <img
                      src={e.img}
                      alt="image"
                      loading="lazy"
                      width="100%"
                      height="100%"
                      className="col-span-2"
                    />
                    <p className="col-span-10">{e.para}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <Image
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85168239-db65-408e-d205-3fc693b0b200/public"
            fill
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
};

export default Last;
