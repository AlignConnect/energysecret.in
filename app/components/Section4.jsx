import dynamic from "next/dynamic";

const DynamicSlider = dynamic(() => import("../components/Slider"), {
  loading: () => <p>Loading...</p>,
});

const Section4 = () => {
  return (
    <div>
      <section className="">
        <div>
          <div className="max-w-4xl mx-auto pt-10 px-3">
            <h1 className="md:text-[3.5rem]  text-[2rem] text-center font-bold ">
              आपकी सेक्सुअल लाइफ खतरे में हैं !!
            </h1>
            <h1 className="md:text-4xl text-2xl text-center pt-3 italic text-red-600 font-bold ">
              आप अपनी महिला पार्टनर को संतुष्ट नहीं कर पा रहें हैं। उन्हें वो
              सुख नहीं दे रहें हैं, जिसकी वह हकदार हैं।
            </h1>
            <h2 className="md:text-6xl mt-6 text-2xl text-center  font-bold ">
              महिलाओं को ऐसे पुरुष चाहिए जो
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-5 px-3">
          <div className="flex justify-center">
            <DynamicSlider />
          </div>
          <h2 className="font-bold text-5xl text-center pt-8">
            Horse fire का किरदार!
          </h2>
          <h1 className=" md:text-2xl text-justify font-medium text-xl mt-6">
            Horse Fire Tablet कमजोरी मिटाता है। जोश, उत्तेजना, टाइमिंग और लिंग
            में कड़कपन उत्पन्न करता है जिसकी वजह से पुरुषों के सेक्स प्रदर्शन में
            जोरदार उछाल देखने को मिलता है। सेक्स परफॉरमेंस उस स्तर की हो जाती है
            जिससे पति-पत्नी के रिश्ते में सिर्फ मिठास रहे। यानि इससे सेक्स
            प्रदर्शन और पति-पत्नी के रिश्ते दोनों अच्छे हो जाते है।
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Section4;
