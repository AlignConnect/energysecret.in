import { Poppins, Rozha_One } from "next/font/google";

const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const rozha = Rozha_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
});

const Section1 = () => {
  return (
    <section className="bg-herohfd bg-cover bg-no-repeat  bg-bottom md:bg-center ">
      <div className="max-w-5xl pt-7 m-auto flex md:flex-row flex-col items-end ">
        <div className="px-3">
          <h1 className={`font-bold text-center md:text-left ${poppin.className} text-3xl md:text-5xl uppercase  text-red-500`}>
            Horse Fire
            <span className="text-black"> Tablet</span>
          </h1>
          <h2 className={`md:text-5xl md:w-2/3 text-center  md:text-left text-2xl  md:mt-1 ${rozha.className}`}>
            Proven <span className="text-red-600"> by </span>
            <span className="text-blue-600  ">Medical study</span>
          </h2>
          <p className={`text-[0.9rem] md:text-xl text-zinc-600 md:pt-3  text-center md:text-left ${poppin.className} `}>
            All claims are proven br by medical experts.
          </p>
          <h1 className=" text-[1.3rem] md:text-3xl text-center md:text-left pt-6 font-semibold md:w-2/2 whitespace-normal ">
            17 शक्तिशाली जड़ी-बूटियों और भस्मों से तैयार किया गया असरदार और
            विश्वसनीय !
          </h1>
          <div className={`md:space-y-1 space-y-2 ${poppin.className} `}>
            <div className="flex items-center  mt-3">
              <img src="/main/hfd_images/1.png" width={50} height={50} alt="pic1" loading='lazy'
                loader={<p>wait</p>} />
              <p className="md:text-2xl text-2xl ml-3 font-semibold">
                Boost
                <span className="text-red-600 font-semibold md:text-3xl ml-2">
                  Stamina
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <img src="/main/hfd_images/2.png" width={50} height={50} alt="pic2" loading='lazy'
                loader={<p>wait</p>} />
              <p className="md:text-2xl text-2xl ml-3 font-semibold">
                Increases
                <span className="text-red-600 font-semibold md:text-3xl ml-2">
                  Strength
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <img src="/main/hfd_images/3.png" width={50} height={50} alt="pic3" loading='lazy'
                loader={<p>wait</p>} />
              <p className="md:text-2xl text-2xl ml-3 font-semibold">
                Improves
                <span className="text-red-600 font-semibold md:text-3xl ml-2">
                  Vigor
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/main/hfd_images/doctormain.webp" alt="pic4" fetchPriority="high" loading='lazy' className="w-full min-h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
