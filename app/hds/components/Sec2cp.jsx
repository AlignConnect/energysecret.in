import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const PopUp = dynamic(() => import("./FormPop"), {
  loading: () => <p>loader</p>,
});

// const YoutubeFrame = dynamic(() => import("./YoutubeFrame"));


const ReviewSection = dynamic(() => import('./ReviewSection'))

const Sec2 = () => {
  const json3 = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cba92a27-21f0-4910-1f3e-5f270d0aa400/public",
      title: "अश्वगंधा",
      para: "एनर्जी बूस्टर टॉनिक की तरह काम करता है, स्ट्रेस कम करने में मददगार है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0c08d0a2-6651-49d4-b208-896119c50700/public",
      title: "शिलाजीत",
      para: "जोश, स्टैमिना और ताकत वर्धक है कमजोरी और थकान दूर करता है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/580dfccf-4b06-4a40-1674-5203b290e400/public",
      title: "गोक्षुरा",
      para: "यह पुरूषों के प्रजनन अंगों में सख्ती और मजबूती बढ़ाने में मदद करता है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32357338-77c1-42d6-fd4a-27fcb5907000/public",
      title: "सफ़ेद मूसली",
      para: "यह जोश, ऊर्जा, स्टैमिना और काम इच्छा बढ़ाने में मदद करता है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2179767-f686-4581-bb7c-abecf3c5f400/public",
      title: "शतावरी",
      para: "यह भी एक अत्यंत शक्तिशाली हर्ब है जो पुरुष क्षमता बढ़ाने में मददगार है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b224cb95-21f3-479a-4f9d-f38ff2497500/public",
      title: "केसर",
      para: "यह शक्तिशाली हर्ब लम्बे समय तक एनर्जी बनाये रखने में मदद करता है।",
    },
  ];


  //-----------------------------------


  const FooterImage = [

    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e6b840a-d393-46fe-cd3a-12fd98a38400/public",
      title: "Real Assistance",
      message: "Ayurvedic Health Experts"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5375da6c-e5ed-469a-b092-dd94b6209f00/public",
      title: "Natural Ingredients",
      message: "Blend of 17 Ayurvedic Herbs"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e247294d-af56-44a5-ea4e-badcfe678200/public",
      title: "Clinically Tested",
      message: "Tested by Trusted Labs"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9ba5d72d-a1ca-4422-ffa7-0b8567ad3e00/public",
      title: "Discount Available",
      message: "Discount & Offers Available"
    }
  ]


  return (
    <>
      <div className="">


        <div className=" text-black poppinsFont text-center  font-extrabold sm:text-[2vw] text-[1.6rem] w-full pt-4 leading-tight">
          Heres What our
          <br /> Customers Says
        </div>

        <ReviewSection />




        <div>

          

          <div className="text-center text-2xl font-bold poppinsFont pt-8 pb-4">Why Horse Fire Tablet</div>


          <div className="grid grid-cols-2 items-center gap-3 w-[95%] sm:w-[90%] mx-auto">

            {
              FooterImage.map((e, key) => {

                return <div className="text-center border py-5 rounded-xl"  key={key}>

                  <div>
                    <img src={e.img} alt="fdf" loading="lazy" className="mx-auto my-2 w-[70px]" />
                  </div>



                  <div>
                    <p className="text-[14px] py-2 poppinsFont font-bold">{e.title}</p>
                    <p className="text-[13px] poppinsFont px-2">{e.message}</p>
                  </div>

                </div>

              })
            }

          </div>


          <div className="max-w-4xl mx-auto">
            {/* <div className="text-sm  pt-4 text-black">We are available on:-</div>

            <div className="flex items-center gap-7 py-2">
              <a href="https://bit.ly/3JvDOKa">
                <img
                  src="/checkout_images/flipkart.png"
                  alt=""
                  className="sm:w-28 w-20 mx-auto"
                />
              </a>
              <a href="https://amzn.to/49VCQC0">
                <img
                  src="/checkout_images//amazon.png"
                  alt=""
                  className="sm:w-24 w-20 mx-auto "
                />
              </a>
            </div> */}
            <div className="p-2">
              <div className="text-sm  pt-4 text-black poppinsFont">We accept Payment Via:-</div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
                alt=""
                className="w-72 pt-2"
              />
            </div>
          </div>

          <PopUp/>

          <div className="text-center mt-3 pb-5  bg-zinc-100">
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a19635c1-20a5-4acd-6251-28756da2a300/public"
              alt="Logo"
              className="w-28 mx-auto"
              width="100%"
              height="100%"
              loading="lazy"
            />
            <p className="text-md mt-2 font-semibold fontPoppins">
              AR ARAYURVEDA
            </p>
            <p className="text-sm mt-1 fontPoppins">
              FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
              (INDIA) - 380055
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec2;
