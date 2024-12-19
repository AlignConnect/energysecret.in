import dynamic from "next/dynamic";
import Ingredients from "../components/Ingredients";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const Section5 = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#31384a] py-5">
        <div className="max-w-5xl mx-auto px-3 pb-5">
          <h1 className="text-center font-extrabold  text-3xl md:text-[2.5rem] pt-4 bg-gradient-to-b from-red-300 to-red-100 py-4 text-transparent bg-clip-text ">
            Horse Fire Tablet- एक असरदार संयोजन !
          </h1>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            {Ingredients.map((item, i) => {
              return (
                <div
                  className="bg-gray-100 hover:scale-105 p-2 md:py-5 flex rounded-md pt-4 shadow-lg border hover:border-red-300 duration-150 "
                  key={i}
                >
                  <div className="w-20 h-20">
                    {/* <Image src={item.url} alt="pic" width={60} height={80} /> */}
                    <CommonImg imglink={item.url} />
                  </div>

                  <div className="ml-3 w-3/4">
                    <h1 className="font-bold text-2xl md:text-3xl text-red-700">
                      {item.title}
                    </h1>
                    <p className=" text-lg md:text-lg font-semibold">
                      {" "}
                      {item.discript}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
