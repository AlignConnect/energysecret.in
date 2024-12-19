import dynamic from "next/dynamic";
import React from "react";

const PopUp = dynamic(() => import("@/app/hds/components/FormPop"), {
  loading: () => <p>loader</p>,
});

const Story = () => {
  return (
    <div className="pt-5">
      <div className="px-3 sm:px-5 text-center">

<p className="fontAnton text-3xl sm:text-5xl">Key Benefits:</p>

        <img
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/faab7c63-18f9-41e7-d3c8-9a1785e1f200/public"
          alt="image"
          loading="lazy"
          width="100%"
          height="100%"
          className="py-5"
        />

        <p className=" sm:pt-5"><span className="text-red-600 uppercase font-semibold">Horse Fire Tablet</span> पुरुष कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, इसके इस्तेमाल से पुरुष लगातार अपने स्वास्थ्य में सुधार कर रहे है। इस उत्पाद का सक्सेस रेट 97.6% है जो किसी भी अन्य उत्पाद से कई गुना बेहतर है।</p>
        </div>
{/* <PopUp/> */}
        {/* <img
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/369fbfee-6c91-4e45-bb78-ff9b31b17500/public"
          alt="image"
          loading="lazy"
          width="100%"
          height="100%"
          className=""
        /> */}
    </div>
  );
};

export default Story;
