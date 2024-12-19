import { Poppins } from "next/font/google";
const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Header = () => {
  return (
    <div className={`${poppin.className}`}>
      <div className=" flex items-center md:py-1 justify-between max-w-5xl px-3 m-auto bg-white ">
        <h1 className="md:text-2xl font-bold inline-block m-2 md:border-4 border-2 border-black md:p-2 p-1">
          Health News
        </h1>
        <button className="flex items-center">
          <a href="#form" className="text-black">
            <img
              src="/main/hfd_images/edit.png"
              className="w-8 md:h-10 md:w-10 h-8"
              alt="pic"
              loading='lazy'
            />
          </a>
          <p className="ml-2 md:text-2xl font-semibold"> <a href="#form" className="text-black">Inquiry now</a> </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
