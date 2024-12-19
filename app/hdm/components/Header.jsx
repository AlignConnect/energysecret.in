import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Sec1 = dynamic(() => import("@/app/hds/components/Sec1"), {
  loading: () => <p>loader</p>,
});

const Sec2 = dynamic(() => import("@/app/hds/components/Sec2"), {
  loading: () => <p>loader</p>,
});

const Header = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="relative z-10 pt-5 sm:pt-10 px-3 sm:px-5 text-center ">
          <p className="font-semibold poppinsFont text-xl sm:text-2xl">
            India's Most Selling Male Wellness Product
          </p>
          <p className="uppercase fontAnton text-[13vw] sm:text-7xl text-red-600">
            Horse Fire Tablet
          </p>
          <p className="mt-2 sm:mt-3 text-[1.18rem] sm:text-2xl font-semibold">
            17 शोधित और शक्तिशाली जड़ीबूटियों का श्रेष्ठ संयोजन बनाये आपको
            ऊर्जावान और बेस्ट परफ़ॉर्मर{" "}
          </p>
        </div>

        <div className="relative z-10 pt-5 sm:pt-10">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b150bba8-c1a0-4ddd-f651-da4aba2dce00/public"
            alt="image"
            loading="lazy"
            width="100%"
            height="100%"
            className="absolute sm:-bottom-[18%] -bottom-[23%] sm:w-6/12 w-7/12 -left-[2%]"
          />

          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c241c9ab-bf2d-4693-b274-d9bab1cc1500/public"
            alt="image"
            loading="lazy"
            width="100%"
            height="100%"
            className="absolute sm:w-7/12 w-8/12 -top-[20%] sm:-top-[5%]  -left-3 sm:-left-8"
          />
          <div className="grid grid-cols-12  items-end">
            <div className="col-span-3"></div>
            <div className="col-span-9">
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a21d965-9ec9-4f78-2e54-b348d7d91300/public"
                alt="image"
                loading="lazy"
                width="100%"
                height="100%"
                className=""
              />
            </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/73199b95-b009-4dc4-b130-12f1cab56100/public"
          fill
          fetchPriority="high"
        />
      </div>

      <div className="">
        <div className="relative">
          <div className="relative z-10 py-3 sm:py-5 ">
            <div className="grid grid-cols-12">
              <div className="col-span-5"></div>
              <div className="col-span-7">
                <div className="flex items-center gap-1 sm:gap-3">
                  <p className="text-[2.5rem] sm:text-6xl font-black text-red-600 poppinsFont">
                    50%
                  </p>
                  <div className="text-[1rem] sm:text-2xl">
                    <p className="">से ज्यादा छूट के साथ </p>
                    <p className="font-extrabold">अभी आर्डर करें</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f22feafb-491c-46b3-530e-b39d09e39d00/public"
            fill
            fetchPriority="high"
          />
        </div>
      </div>


      <Sec1 />
      <Sec2 />
    </section>
  );
};

export default Header;
