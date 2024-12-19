// import { changeSelectedProduct } from "@/redux/slices/ProductInfo";
import dynamic from "next/dynamic";
import React from "react";
const PopUp = dynamic(() => import("./FormPop"));
import { MdStarHalf, MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ShiProcket from "../../commonUse/shiprocket";
const SelectProduct = dynamic(() => import("../../commonUse/SelectProduct"));





const Sec1 = () => {
  const json1 = [
    {
      para1: "+3500",
      para2: "Units Sold",
      para3: "Per Day in India",
    },
    {
      para1: "+3M",
      para2: "Satisfied",
      para3: "Customers & Counting",
    },
    {
      para1: "96%",
      para2: "Success Rate",
      para3: "in Men's Problems",
    },
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





  const Benifits_brc = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className="flex items-center gap-2" key={key}>
          <img
            src={e.img_benifits}
            className="md:w-10 w-8 py-1 "
            alt="benifits"
          />
          <div className="fontNoto md:text-[1.1vw] text-[1.2rem] font-semibold text-black mb-1 mt-3">
            {e.benifits_content}
          </div>
        </div>
      );
    });
  };



  // const { allVariants, selectProducts } = useSelector(state => state.productInfo);


  const dispatch = useDispatch();






































  return (
    <div className="pt-7 sm:pt-10">



      <div className="text-center px-3 sm:px-2">
        <p className="text-[2.3rem] sm:text-5xl inline-block  font-extrabold poppinsFont">Horse Fire Tablet
        </p>


        <p className="text-xl sm:text-lg font-semibold poppinsFont sm:py-5">
          Ayurvedic Medicine For Strength, Stamina & Immunity
        </p>



        <div className="fontPoppins flex flex-wrap justify-center items-center sm:space-x-3 space-x-2 pt-3">
          {/* Stars */}
          <div className="flex sm:pb-0 pb-2 text-[#ffd203] ">
            {Array.from({ length: 5 }, (_, index) => (
              <MdStarRate
                key={index}
                color={
                  index < Math.round(4.8) ? "gold" : "lightgray"
                }
                size={26}
              />
            ))}
          </div>

          {/* Rating Text */}
          <span className="sm:text-lg font-medium poppinsFont">Excellent</span>

          {/* Rating Value */}
          <span className="sm:text-lg font-semibold poppinsFont">{4.8}</span>

          {/* Divider */}
          <span className="sm:text-lg">|</span>

          {/* Number of Reviews */}
          <span className="sm:text-[15px] font-semibold poppinsFont ">59 reviews</span>

          {/* Trusted Reviews */}
          <span className="text-sm text-gray-500 poppinsFont">trusted reviews</span>
        </div>



        <div className="sm:px-2 text-left my-3 md:my-5">
          {Benifits_brc([
            {
              img_benifits:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f0d9d4f-59e6-4c42-29cd-94602bd7ca00/public",
              benifits_content:
                "स्ट्रेंथ, एनर्जी और स्टैमिना बढ़ाने में मददगार ",
            },
            {
              img_benifits:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1482b6ab-bf6d-459e-56d2-c33afa8c6f00/public",
              benifits_content: "वैवाहिक जीवन खुशहाल बनाने में मददगार",
            },

            {
              img_benifits:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8d346116-5231-4b0f-c048-c13771eefd00/public",
              benifits_content: "पूरे दिन जोश और ऊर्जा का एहसास",
            },
            {
              img_benifits:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2c37b911-de0d-49fe-3d53-8aa30fd9ec00/public",
              benifits_content: " समय अवधि और कड़कपन बढ़ाने में मददगार",
            },
          ])}
        </div>


        <PopUp/>



        <div className=" text-black text-start px-2 py-2 sm:p-4 rounded-lg sm:mt-4 mt-2 -mx-1 border border-yellow-800 border-dashed">
          <h3 className="text-lg font-semibold">OFFER</h3>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li className="poppinsFont">Get {10}% instant discount on online payment</li>
            <li className="poppinsFont">COD available</li>
          </ul>
        </div>



        {/* <div className="flex items-center py-2 space-x-2 mt-4 poppinsFont" id="buynow">
          <span className="text-gray-500 text-lg line-through">
            ₹{parseInt(selectProducts?.compare_at_price)}
          </span>
          <span className="text-4xl font-extrabold text-gray-900">
            <span>₹{parseInt(selectProducts?.price)}</span>
          </span>
          <span className="clip_off text-sm font-semibold bg-red-700 text-white px-4 py-0.5 ">
            {parseInt(
              ((selectProducts?.compare_at_price - selectProducts?.price) /
                selectProducts?.compare_at_price) *
              100
            )}
            % off
          </span>
        </div>

        <div className="flex items-center my-2 poppinsFont">
          <span className="text-lg font-semibold">Size:</span>
          <span className="bg-red-100 text-red-600 font-semibold py-1 px-5  rounded-full ml-2">
            {selectProducts?.title}
          </span>
        </div> */}




        <h1 className="text-center sm:text-start text-[28px] sm:text-4xl font-bold mt-8 poppinsFont">Buy more ,Save more !</h1>

        <h1 className="text-gray-600 poppinsFont text-[16px] sm:text-lg sm:mt-3 text-center sm:text-start">Don't Miss out on these amazing deals!</h1>




      </div>

      <SelectProduct />
      {/* <ShiProcket /> */}




      {/* <PopUp /> */}
    </div>
  );
};

export default Sec1;
