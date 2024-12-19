
import dynamic from "next/dynamic";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const Section6 = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-3">
        <h1 className={`fontPoppins font-bold text-4xl py-6 md:py-10`}>
          एक्सपर्ट्स भी हैं
          <span className="text-red-600"> 'Horse Fire tablet' </span> के प्रसंशक
        </h1>
        <p className=" text-xl">
          शोध में विशेषज्ञों ने पाया कि Horse Fire tablet पुरुष कमजोरी को जड़ से
          ठीक करने के लिए अत्याधुनिक तकनीक और अनुसंधान से तैयार किया गया हैं।
          देखें दिल्ली के मशहूर गुप्त रोग विशेषज्ञ का रिव्यू -
        </p>
        <div className="bg-cyan-500 md:p-9 p-3 rounded-xl border-2 mt-2 border-cyan-200  text-white shadow-lg shadow-cyan-500/50">
          <div className="flex items-center">
            <div className="w-32">
              <CommonImg imglink="/main/hft_home/doc.png" />
            </div>
            <div className="ml-6">
              <h1 className={`fontPoppins font-bold text-xl`}>Dr. Arun Kumar</h1>
              <p>14 years of experience</p>
              <p>MD - Alternate Medicine, BAMS</p>
              <p>Ayurveda, Sexologist</p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-justify ">
              "Horse Fire Tablet" में अश्वगधा, शिलाजीत, कौचा, सफ़ेद मूसली,
              शतावरी, गोक्षुरा, केसर, अकरकरा जैसी 17 जड़ीबूटियां और भस्म मिलाया
              गया है। रिसर्च में मैंने पाया की इसमें सभी तत्व उचित अनुपात में
              मिश्रित है। इसके इस्तेमाल से शरीर में जोश, स्टैमिना, काम इच्छा,
              समय अवधि और पार्ट की सख्ती में तेजी से बढ़ोत्तरी होती है। मैंने
              इसके प्रभाव को जाने के लिए अपने दो मरीजों को दिया। लगभग 2 महीने
              बाद मैं परिणाम जानने के लिए उनका रिव्यू लिया। उनका रिस्पॉन्स काफी
              सकारात्मक था। उनका कहना था कि "हॉर्सफायर टेबलेट" के इस्तेमाल से हम
              काफी एनर्जेटिक और जोशीले महसूस करते है। हम वह प्रदर्शन कर पाते है
              जैसा हमारी लाइफ पार्टनर्स हमसे चाहती थी।
            </h1>
          </div>
        </div>

        <h1 className="mt-10 text-5xl font-bold  text-center py-2">
          सेवन करने का तरीका
        </h1>
        <div className="flex gap-4  border p-4 rounded-lg items-center">
          <div className="overflow-hidden rounded-full">
            <CommonImg imglink="/main/hft_home/step1.webp" />

          </div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl w-5 " />
          </span>
          <div className="overflow-hidden rounded-full">
            <CommonImg imglink="/main/hft_home/step2.webp" />

          </div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl w-5 " />
          </span>
          <div className="overflow-hidden rounded-full">
            <CommonImg imglink="/main/hft_home/step3.webp" />
          </div>
        </div>
        <p className="text-lg py-3">
          इसका इस्तेमाल बहुत ही सरल है। इसे सुबह और रात के भोजन पश्चात 1 टेबलेट
          1 गिलास गुनगुने पानी/दूध के साथ लेना है। रिसर्च में पाया गया की इसकी
          प्रभावशीलता दूध के सेवन के साथ बढ़ रही है इसलिए बेहतर परिणाम के लिए हम
          दूध के साथ सेवन करनी की सलाह देते है।
        </p>
      </div>
    </div>
  );
};

export default Section6;
