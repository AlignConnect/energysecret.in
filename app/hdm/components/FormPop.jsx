import React from "react";
import '../hds.css'

const FormPop = () => {
  return (
    <div className="sm:flex items-center px-3 justify-center my-5 text-center  poppinsFont gap-3  py-2">
      <p className="">Save 10% Extra on Prepaid Order</p>
      <div className=" bg-inherit ">
        <a
          href="#buynow"
          className="pop_imagehfv inline-block bg-red-700 text-white py-2 rounded-full text-xl px-10 font-bold"
        >
          ORDER NOW
        </a>
      </div>
    </div>
  );
};

export default FormPop;
