import { Poppins } from "next/font/google";
const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section4 = () => {
  return (
    <div>
      <div className={`relative ${poppin.className} `}>
        <div className="relative z-[10] max-w-5xl px-3 m-auto  text-white py-3 md:py-5 ">
          <div className="flex gap-1 justify-between items-center">
            <div className={``}>
              <h1 className="text-[0.8rem] md:text-2xl hidden md:block">We are available to cure your Problems, Inquiry now</h1>
              <h1 className="text-[1.2rem] md:text-3xl font-semibold"><span className=" border-b border-white">Don't</span> Hesitate To Be In Touch!</h1>

            </div>
            <div className="text-center w-72 md:w-fit">
              <a href="#form" className=" text-decoration-none font-semibold text-white border border-white px-5 md:px-16 py-2 rounded-full text-[1rem] md:text-3xl">INQUIRY NOW</a>
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full top-0 left-0'>
          <img
            src={"/main/hfd_images/line.jpg"}
            className="w-full h-full"
            loading='lazy'
            alt='pic'
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
