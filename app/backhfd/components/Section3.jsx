import { Poppins } from "next/font/google";
const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section3 = () => {
  return (
    <div>
      <div className="max-w-5xl  m-auto ">
        <div className="bg-black px-3 py-2">
          <div className="flex  gap-3 items-center">
            <div className="w-16">
              <img src="/main/hfd_images/no1.png" alt="pic4" loading='lazy' />
            </div>
            <h1 className={`text-[1rem] w-11/12 md:text-2xl text-white ${poppin.className}`}>Horse Fire Tablet को सेक्स अवधि और लिंग वर्धक श्रेणी में आयुष मंत्रालय द्वारा प्रथम स्थान मिला है।</h1>
          </div>
        </div>

        <div className="px-3">
          <h1 className="text-3xl md:text-6xl mt-10 font-semibold">पिछले कुछ साल में <span className="text-blue-500">वियाग्रा</span> </h1>
          <p className="text-xl md:text-2xl">(भारतीय बाजार में)</p>
          <img src="/main/hfd_images/viagra.jpg" alt="pic9" loading='lazy' className="mt-2 w-full" />

          <h1 className="text-3xl md:text-6xl mt-10 md:mt-20 font-semibold">साल दर साल <span className="text-red-500 font-bold">Horse Fire</span> की विक्री</h1>
          <p className="text-xl md:text-2xl">(भारतीय बाजार में)</p>
          <img src="/main/hfd_images/horese.jpg" alt="pic9" loading='lazy' className="mt-2 w-full" />


          <p className="text-xl md:text-2xl text-justify mt-10">ये ग्राफ दर्शा रहा है कि वियाग्रा को पुरुष पार्ट टाइम समाधान के रूप में इस्तेमाल कर रहे थे क्योंकि उनके पास कोई बेहतर विकल्प नहीं था। Horse fire Tablet का बढ़ता ग्राफ बताता है कि भारतीय पुरुषों ने इसे यौन समस्या के स्थाई समाधान के रूप में चुना और अपनी समस्या को हमेशा-हमेशा के लिए मिटा दिया।</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
