import dynamic from "next/dynamic";
import React from "react";
const PopUp = dynamic(() => import("@/app/hds/components/FormPop"));

const Sec1 = () => {
  const json1 = [
    {
      para1: "+3500",
      para2: "Units Sold Per Day in India",
      // para3: "Per Day in India",
    },
    {
      para1: "+3M",
      para2: "Satisfied Customers & Counting",
      // para3: "Customers & Counting",
    },
    // {
    //   para1: "96%",
    //   para2: "Success Rate",
    //   para3: "in Men's Problems",
    // },
  ];

  const json2 = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85585491-de7c-4842-5024-1730e60cbb00/public",
      para: "थकावट और अनुत्साह",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/74b66d1f-b14f-4c24-5cd7-412636f92f00/public",
      para: "ऊर्जा और शक्ति की कमी",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fad8f6a-1cd1-483a-488a-cebdae97ea00/public",
      para: "ढीला और कमजोर अंग",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/52847318-ce78-4017-6b5f-1e9588604400/public",
      para: "प्रेशर और ख़राब प्रदर्शन",
    },
  ];

  return (
    <div className="">
      <div className=" grid sm:w-[70%] mx-auto grid-cols-2 text-center text-[1rem] py-5 gap-1">
        {json1.map((e, key) => {
          return (
            <div className="px-2" key={key}>
              <p className=" text-red-600 fontAnton font-black text-4xl sm:text-6xl">
                {e.para1}
              </p>
              <p className="poppinsFont">{e.para2}</p>
              <p className="poppinsFont">{e.para3}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center px-3 sm:px-10">
        <p className="text-[7vw] sm:text-4xl inline-block underline font-extrabold ">
          क्या आप भी ये महसूस करते है?
        </p>
        <div className="pt-3 sm:pt-5 grid grid-cols-2 gap-3 sm:gap-5">
          {json2.map((e, key) => {
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
                <p className=" mt-2 text-red-600 font-bold">{e.para}</p>

              </div>
            )
          })}
        </div>
      </div>

      <PopUp />
    </div>
  );
};

export default Sec1;
