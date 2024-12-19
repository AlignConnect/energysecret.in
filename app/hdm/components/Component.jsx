import React from "react";

const Component = () => {
  const json5 = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4366f101-04a6-4a72-3a72-6a63bf76dd00/public",
      title: "Free Shipping & Return",
      para: "Free shipping across india with discreet packaging.",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/34255f84-9990-48ff-2419-481c6e2d8500/public",
      title: "Call Support",
      para: "Call support for better customer convenience.",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/171ac4ab-a253-4eb9-f4d0-3a601a330e00/public",
      title: "100% Secure Payments",
      para: "Your transactions are protectedwith advanced encryption.",
    },
  ];

  return (
    <div>
      <div className="border border-red-600 borde-2 mx-2">
        <div className="bg-red-600 m-3 p-3 text-white text-center">
          <span className="text-yellow-500 font-semibold">
            Horse Fire Tablet{" "}
          </span>{" "}
          की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है।
          ध्यान से
          <span className="text-yellow-500 font-semibold">
            {" "}
            AR Ayurveda{" "}
          </span>{" "}
          ब्रांड देखकर ही प्रोडक्ट खरीदें !
        </div>
      </div>

      <div className="px-3 sm:px-10 my-5 sm:my-8">
        {json5.map((e, key) => {
          return (
            <div
              className="grid grid-cols-12 items-center gap-3 my-7"
              key={key}
            >
              <img
                src={e.img}
                alt="image"
                loading="lazy"
                width="100%"
                height="100%"
                className="col-span-3 sm:col-span-2"
              />
              <div className="col-span-9 sm:col-span-10">
                <p className="font-semibold">{e.title}</p>
                <p className="text-[0.9rem] sm:text-[1rem]">{e.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
