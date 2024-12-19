import dynamic from "next/dynamic";
import Image from "next/image";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const HeroSection = () => {
  return (
    <div className='relative text-white'>
      <div className="max-w-7xl mx-auto px-2 md:pt-10 relative z-10">
        <div className="flex md:flex-row flex-col md:items-center justify-center">
          <div>
            <div className='hidden text-black p-2 px-4 md:inline-block italic bg-gradient-to-r from-yellow-400 border-2 border-yellow-200 to-yellow-100 text-3xl fontOswald'>
              INDIA'S NO.1 MEN WELLNESS PRODUCT
            </div>
            <div className='md:text-6xl text-5xl font-bold  text-center md:text-start py-2  uppercase fontYoung'>
              Horse Fire Tablet
            </div>
            <div className='md:text-5xl mt-2 md:mt-4 fontPoppins italic font-bold text-3xl text-yellow-400'>
              10x Better Performance
            </div>
            <div className="text-3xl font-bold pt-2 ">
              नहीं थमेगा प्यार, जब लम्बा होगा औजार
            </div>
            <div className="text-xl pt-2 md:py-4">
              ज्यादातर महिलाएं सेक्स में संतुष्टि का दिखावा करती है ताकि रिश्ते
              को निभा सके ! क्योंकि पुरुष छोटे, ढीले लिंग या फिर शीघ्रपतन से
              परेशान है।
            </div>
            <div className="flex mt-3 md:mt-5 fontPoppins text-2xl gap-2">
              <div className="flex  items-center gap-2">
                <div className="w-1/4 ">
                  <CommonImg imglink="/main/hft_home/1.png" />
                </div>
                <span className=''>
                  Stamina
                </span>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="w-1/4 ">
                  <CommonImg imglink="/main/hft_home/2.png" />
                </div>
                <span className=''>
                  Strength
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <CommonImg imglink="/main/hft_home/pro1.webp" />
          </div>
        </div>
      </div>

      <Image src='/main/hft_home/back3.jpg' alt='pic' fill sizes="100vw" />

    </div>
  );
};

export default HeroSection;
