import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const PopUp = dynamic(() => import("@/app/hds/components/FormPop"), {
  loading: () => <p>loader</p>,
});

const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"));

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

  return (
    <>
      <div className="">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 py-3 text-white px-5 sm:px-10">
          <p className="">
            अगर आप अपनी पार्टनर को उतना समय नहीं दे पाते जितना वो चाहती है तो इस
            परिस्थिति में रिश्ते में खुशहाली कायम रखना मुश्किल है। अगर आप भी ऐसी
            कुछ भीं समस्या महसूस करते है तो एक बार Horse Fire Tablet अवश्य
            आजमाएं।
          </p>
        </div>
        <div className="m-3">
          <YoutubeFrame vid="h-3HVSbQAGA?si=dtn2FlYHarLE8J7z" />
        </div>

        <div className="px-3 sm:px-5 pt-3 sm:py-5">
          <p className="mb-3">
            Horse Fire Tablet भारत का सर्वाधिक बिकने वाला उत्पाद है या यूं कहे
            की यह एक अभियान है जो कमजोर पुरुष को शक्तिशाली और बेस्ट परफ़ॉर्मर
            बनाने की तरफ अग्रसर है। इसमें 17 शोधित और प्रमाणित हर्ब्स शामिल है
            जो जोश, ऊर्जा और स्टैमिना बढ़ाने के लिए जानी जाती है।{" "}
          </p>
          <p className="">
            आज के समय में Horse Fire Tablet विदेशी कंपनियों के चिंता का विषय बन
            चुका है। क्योकि भारतीय पुरुष आयुर्वेद की शक्तियों की पहचानने लगे है
            और उनकी केमिकल वाली गोलिया छोड़कर Horse Fire Tablet से अपनी समस्या को
            हल करते है। Horse Fire Tablet अपने प्राकृतिक घटको के साथ बिना किसी
            दुष्प्रभाव के पुरुष कमजोरी को जड़ से मिटाने का काम करता है और पुरुष
            को वह पावर देता है जो वे हमेशा से चाहते थे।
          </p>
          <div className="-mx-3 sm:-mx-5">

            <PopUp />
          </div>
          <div className="grid grid-cols-2 gap-5 text-center pt-3">
            {json3.map((e, key) => {
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
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#ad6416] mt-3 mb-1">
                    {e.title}
                  </p>
                  <p className="">{e.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <PopUp />

        <div className="relative">
          <div className="relative z-10 p-3 ">
            <div className="border-2 border-black p-2 font-semibold text-center">

              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b150bba8-c1a0-4ddd-f651-da4aba2dce00/public"
                alt="image"
                loading="lazy"
                width="100%"
                height="100%"
                className="w-7/12 mx-auto ps-4"
              />
              <p
                className="bg-red-600 inline-block px-7 text-white pt-2 pb-1"
                style={{
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
              >
                Important Point:
              </p>
              <p className="italic pt-2 sm:pt-3 ">
                जब Horse Fire Tablet में मिश्रित तत्व पुरुषो को चौतरफा लाभान्वित
                करते है तो हर बार केमिकल वाली गोली खाकर स्वास्थ्य को जोखिम में
                क्यों डालना? आज ही छोड़े और Horse Fire Tablet आजमाएं !
              </p>
            </div>
          </div>

          <Image
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe051b0f-c4a1-4e55-5a4b-bf33f1681600/public"
            fill
            fetchPriority="high"
          />
        </div>
      </div>
    </>
  );
};

export default Sec2;
