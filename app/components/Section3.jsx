
const Section3 = () => {

  const BenData = [
    {
      title: "कड़क लिंग",
      disc: "लिंग में अद्भुत शक्ति और कड़कपन जब मन करे ",
      url: "/main/hft_home/bigpenis.png"
    },
    {
      title: "टाइमिंग",
      disc: "सेक्स टाइमिंग में जोरदार इजाफा , बिना रुके करे घंटों सेक्स  ",
      url: "/main/hft_home/3a.png"
    },
    {
      title: "जोश",
      disc: "पाए यौन प्रदर्शन , शक्ति में वृद्धि और करे जोश में भारी बढ़ोतरी ",
      url: "/main/hft_home/sex.png"
    },
    {
      title: "स्पर्म",
      disc: "शुक्राणुओं की संख्या में इजाफा और वीर्य गाढ़ा करे  ",
      url: "/main/hft_home/sperm.png"
    },
  ]

  return (
    <div>
      {" "}
      <div className="bg-red-800 pb-10 bg-hero3 bg-cover">
        <div className="max-w-4xl mx-auto px-3">
          <h1 className="md:text-6xl text-center  text-white text-[2.6rem]  font-bold pt-10  leading-[3rem] md:leading-[4rem] px-3">
            <span className=""> आपकी सेक्स लाइफ </span> को बनाये बेहतर ।
          </h1>
          <span className="flex justify-center items-center md:flex-row gap-4 flex-col gap-x-4 gap-y-6 md:mx-0 mx-5 mt-5">
            {BenData.map((item, i) => {
              return (
                <div
                  className="bg-white shadow-lg md:shadow-xl border py-4 w-80 hover:border-red-200 duration-150 border-gray-200/40 flex flex-col p-2 rounded-xl justify-center items-center"
                  key={i}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-20 border border-red-600 bg-gradient-to-r from-red-100 to-pink-50 rounded-full p-3"
                  />
                  <h1 className="font-bold  text-3xl pt-5">
                    {item.title}
                  </h1>
                  <p className="text-center  text-2xl">{item.disc}</p>
                </div>
              );
            })}
          </span>
          <p className="text-white text-xl md:text-2xl mt-6 text-justify">
            आज के आधुनिक युग में ऑफिस के वर्क स्ट्रेस, फॅमिली प्रेसर व अन्य
            कामों की उलझन से पुरुष सेक्सुअली कमजोर होते जा रहे है। बेड पर
            पार्टनर के साथ अच्छा प्रदर्शन नहीं कर पा रहे जिससे लाइफ में प्यार की
            कमी दिख रही है और पति-पत्नी के रिश्ते ख़राब हो रहे है।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
