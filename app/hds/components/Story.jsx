import dynamic from "next/dynamic";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';


import { IoIosArrowDown } from "react-icons/io";
// import { makeStyles } from "@mui/styles";
import YoutubeVideo from "../../commonUse/Youtubefile/YoutubeFrame";
// import YoutubeVideo from "./YoutubeVideo";
import { Carousel } from "react-responsive-carousel";



// const PopUp = dynamic(() => import("@/pages/components/FormPop"), {
//   loading: () => <p>loader</p>,
// });

const PopUp = dynamic(() => import("./FormPop"), {
  loading: () => <p>loader</p>,
});
const Story = () => {




  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const Marko = [

    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b048999-03ad-4e14-1c65-369352c6a100/public",
      title: "ISO certified"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e75b70c1-150c-4082-1ae2-5f01de9a7900/public",
      title: "FDA approved"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c73db5b-7fbd-4ff8-5a13-44fea3b84300/public",
      title: "Pure Ayurvedic"
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c6140817-6b80-4ebf-694a-3ec90d1bba00/public",
      title: "GMP certified"
    },

  ]






  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-dots_custom h-[170px]",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const carouselVideo = [

    "5x-NRBXypu0?si=aD0hC9Dq4PqVgMoR",
    "bPImwMmIkNs?si=z9j-AceNNQ8dXPyE",
    "dUvWX4anBK4?si=-da_oT3AZBuAkqkY"


  ]





  const all_benefits = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl py-3 mx-2 fontNoto" key={key}>
          <img
            src={e.benefits_img}
            className="w-5/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className="fontNoto text-center text-[1rem] md:text-[1.2vw] leading-tight font-semibold md:px-2 pt-2">
            {e.benefits_content}
          </div>
        </div>
      );
    });
  };

  const settings_key_benifits = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };


  const Ingrediants_all = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl pt-8 pb-4 mx-1 my-2 " key={key}>
          <div className="text-[#a06103]  text-center text-[1.6rem] md:text-[1.4vw]  font-extrabold ">
            {e.Ingrediants_title}
          </div>
          <img
            src={e.Ingrediants_img}
            className="w-4/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className="fontNoto text-center text-[1.1rem] md:text-xl leading-tight font-semibold md:px-6 pt-2  text-gray-700">
            {e.Ingrediants_content}
          </div>
        </div>
      );
    });
  };

  //---------------------------

  return (
    <div className="sm:pt-5 fontNoto">


      <div className="grid grid-cols-2 sm:grid-cols-4 items-center w-[100%] sm:w-full mx-auto">

        {
          Marko.map((e, key) => {

            return <div className="text-center mx-auto col-span-1 " key={key}>

              <div className="py-2">
                <img src={e.img} alt="sdf" loading="lazy" className="w-full" />
              </div>

              <div>
                <h2 className="poppinsFont text-sm">{e.title}</h2>
              </div>

            </div>



          })
        }

      </div>



      {/* <div>
        <h1 className="text-4xl poppinsFont font-bold mt-8 mb-5 text-center">Customer speaks</h1>
      </div>


      <div className="my-3">
        <YoutubeVideo vid={"oOfFq4ihRsY"} />
      </div> */}

      {/* 
      <Carousel interval={10000} autoPlay={true} infiniteLoop={true} stopOnHover={true} >

        {carouselVideo.map((video, index) => (

          <div key={index} className="">
            <YoutubeFrame vid={video} />
          </div>


        ))}


      </Carousel> */}

      {/* //----  key benefits   - -- --- */}


      <PopUp/>


      <div className=" text-[#a06103] font-extrabold poppinsFont text-center mb-5 mt-6 sm:text-[2vw] text-[1.6rem] w-full ">
        Key Benifits
      </div>

      <div className="py-2 mb-3">
        <Slider {...settings_key_benifits}>
          <div className="">
            {all_benefits([
              {
                benefits_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5ab1695f-f4d5-4e2c-f2a2-d0aede17d500/public",
                benefits_content:
                  "स्ट्रेंथ, एनर्जी और स्टैमिना बढ़ाने में मददगार ",
              },
            ])}
          </div>
          <div className="">
            {all_benefits([
              {
                benefits_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0458bb6a-54f4-482e-9876-3941b2df2a00/public",
                benefits_content: "पूरे दिन जोश और ऊर्जा का एहसास",
              },
            ])}
          </div>
          <div className="">
            {all_benefits([
              {
                benefits_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e19d97c7-b53b-449c-b04e-0ff5ebb51400/public",
                benefits_content: "मसल स्ट्रेंथ और मसल रिकवरी में मददगार",
              },
            ])}
          </div>
          <div className="">
            {all_benefits([
              {
                benefits_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6dd343e2-879e-4388-8718-721fea334700/public",
                benefits_content: "वैवाहिक जीवन खुशहाल बनाने में मददगार",
              },
            ])}
          </div>
        </Slider>
      </div>








      {/* ----------------------------- */}


      <div className=" text-[#a06103] poppinsFont text-center font-extrabold my-5 sm:text-[2vw] text-[1.6rem] w-full py-3 ">
        Key Ingredients
      </div>

      <div className="flex items-center border rounded-lg p-1 w-[98%] mx-auto border-black my-1">
        <div className="flex-shrink-0">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a1a62879-8c69-44f6-45e4-a1cd1ec58300/public"
            alt="100%"
            className="w-5/6 mx-auto"
          />
        </div>

        <div className="ml-4">
          <h1 className="text-lg font-semibold poppinsFont">13 Ayurvedic Herbs</h1>
        </div>
      </div>

      <div className="py-2 mb-3">
        <div className="grid grid-cols-2 items-center fontNoto">
          {Ingrediants_all([
            {
              Ingrediants_title: "अश्वगंधा",
              Ingrediants_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c4ba9c2-d013-4727-98e0-dd23be25d700/public",
              Ingrediants_content:
                "तनाव को कम करता है और स्टैमिना बढ़ाता है ",
            },
            {
              Ingrediants_title: "शिलाजीत",
              Ingrediants_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/25e892f4-9640-4b63-4f10-e8b6a7a58000/public",
              Ingrediants_content:
                "टेस्टोस्टेरोन लेवल और विटेलिटी को बढ़ाता है ",
            },
            {
              Ingrediants_title: "सफेद मूसली",
              Ingrediants_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a93417bd-aa3b-44b3-d8bd-b81742f3b600/public",
              Ingrediants_content: "ऊर्जा, ताकत और स्टैमिना को बढ़ाता है",
            },
            {
              Ingrediants_title: "गोक्षुरा",
              Ingrediants_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/823a0e55-a487-4268-02df-48881aa8c100/public",
              Ingrediants_content:
                "जोश एवं ऊर्जा बढ़ाकर पूरे दिन एनर्जेटिक रखता है ",
            },
          ])}
        </div>

      </div>

      {/* <PopUp /> */}


      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >

          <Typography sx={{
            color: expanded === 'panel1' ? "red" : 'text.secondary', fontSize: '1.2rem', '&:hover': {
              color: "red"
            },
            transition: "0.5s ease-in-out"
          }}>

            Dosage& Duration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          <p className="my-2"> भोजन के बाद दिन में दो बार एक गोली गुनगुने दूध या पानी के साथ लें।</p>

          <p className="my-2"> बेहतर परिणामों के लिए हमारे एक्सपर्ट्स इसे दूध के साथ लेने की सलाह देते हैं।</p>

          <p className="my-2">शक्ति, सहनशक्ति, समय और मजबूत प्रदर्शन में सुधार के लिए इसे कम से कम 3-4 महीने तक नियमित रूप से लें। एक बार जब आप अपने प्रदर्शन में बृद्धि महसूस करते हैं, तो आप इसका सेवन बंद कर सकते हैं।
          </p>

        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >

          <Typography sx={{
            color: expanded === 'panel2' ? "red" : 'text.secondary', fontSize: '1.2rem', '&:hover': {
              color: "red"
            },
            transition: "0.5s ease-in-out"
          }}>
            Product Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          <p className="my-2">

            साथी को खुश रखने के लिए ज्यादा शक्ति, ऊर्जा और स्टैमिना का होना आवश्यक है। हॉर्सफ़ायर जोश बढ़ाने की एक आयुर्वेदिक दवा है इसमें वो प्रत्येक प्राकृतिक तत्व है जो पुरुष की सभी प्राइवेट समस्याओं के समाधान में मदद करते है और रोमांचक बनाते है।

          </p>

          <p className="my-2">

            Horse Fire Tablet एक शुद्ध प्राकृतिक और सुरक्षित उत्पाद है। इसके 17 नेचुरल हर्ब्स बिना किसी भी तरह के साइड इफेक्ट्स के आपको ऊर्जावान और बेहतर परफ़ॉर्मर बनाकर अपने लक्ष्यों को हासिल करने में मदद करते हैं। इतना ही नहीं अगर लाइफ में खुशहाली बढ़ाना चाहते है और पार्टनर के चेहरे पर संतुष्टि भरी मुस्कान देखना चाहते है तो Horse Fire Tablet को अपने जीवन में एक बार शामिल करके इसका कमाल देखे !

          </p>

          <p className="my-2">
            विशेष बात: Horse Fire Tablet सेवन के लिए सुरक्षित है क्योंकि यह Ayush, GMP और ISO द्वारा प्रमाणित है।
          </p>

        </AccordionDetails>
      </Accordion>




    </div>
  );
};

export default Story;
