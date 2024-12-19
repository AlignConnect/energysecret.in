import dynamic from "next/dynamic";
import { useGlobalContext } from "../statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "../commonUse/FormDataValidation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});



const Section2 = () => {

  const searchParams = useSearchParams()


  const { CustomerData, checkoutDetail, setCustomerData, setLoading } = useGlobalContext();

  const handleFormSubmit = async (e) => {

    e.preventDefault();

    try {
      const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

      let check = await axios.get('https://api.ipify.org?format=json').then(response => {
        return response.data.ip
      }).catch(error => console.log(error))
      const formdata = new FormData()

      formdata.append("name", getCustomData.name)
      formdata.append("phone", getCustomData.phone)
      formdata.append("address", getCustomData.address)
      formdata.append("post", "Horsefiretablet.com")
      formdata.append("ip", check ? check : "")
      formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
      formdata.append("blog_url", process.env.NEXT_APP_URL ?? "horsefiretablet.com")

      const searchParamss_krt = searchParams.get("krt");
      const searchParamss_krttracker = searchParams.get("krttracker");

      searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
      searchParamss_krt && formdata.append("conversions", searchParamss_krt);

      try {
        setLoading(true)
        const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
        const data = await form.json();

        const blogWebId = data.blogWebId ?? null
        if (data.ok) {
          setLoading(false)
          let destination = decodeURI(data.destination)
          let name = destination.split("?name=")[1].split("&")[0]
          let phone = destination.split("&phone=")[1].split("&")[0]
          return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
        }
        setLoading(false)
        return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
      } catch (err) {
        setLoading(false)
        return window.location.href = checkoutDetail.checkoutUrl;
      }
    } catch (error) {
      return alert(error);
    }

  }

  const handleChange = async (e) => {
    setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
  }


  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="max-w-5xl  overflow-hidden md:pt-[2rem] mx-auto pt-8 px-2">
          <h1 className={`text-center text-white font-bold md:text-7xl text-5xl uppercase fontPoppins`}>
            why choose us ?
          </h1>
          <div className="flex pb-5 justify-center items-center md:items-center flex-col md:mt-10 md:flex-row">
            <div className="pt-5 md:pt-0 w-full h-full">
              <CommonImg imglink="/main/hft_home/sexyu.webp" />

            </div>
            <div className="bg-white rounded-b-2xl  md:rounded-sm p-3">
              <div className=" border-l-4 border-red-600">
                <div className="ml-4">
                  <p className={`fontPoppins text-lg`}>
                    Awsome men wellness product
                  </p>
                  <h1 className={`font-bold fontOswald text-xl`}>
                    10 years of Experiance
                  </h1>
                </div>
              </div>
              <div>
                <h3 className=" pt-5 text-xl">
                  सफल मैरिड लाइफ का आधार सेक्स हैं और सफल सेक्स का आधार
                  परफॉर्मेंस । यानि कि बिस्तर पर आपकी परफॉर्मेंस जितनी ज्यादा
                  उम्दा होगी आपकी मैरिड लाइफ उतनी ही ज्यादा अच्छी होगी ।
                </h3>
              </div>
              <div>
                <div className="">
                  <div className={`max-w-2xl  mx-auto fontPoppins p-1`}>
                    <div>
                      <h1 className="text-center text-4xl font-bold"> Contact Us </h1>
                      <form className="space-y-3" >
                        {CustomerDataValue?.map((data, key) => {
                          return <div className="flex flex-col" key={key}>
                            <label className="font-semibold text-xl py-1">{data.label}</label>
                            <div className="relative">
                              <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                              {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                            </div>
                          </div>
                        })}

                        <div className="flex justify-center items-center pt-5 ">
                          <button
                            type="button"
                            className="bg-red-600 text-xl font-bold p-4 pt-5 md:w-72 w-full rounded-full hover:bg-red-700 shadow-lg shadow-red-600/50 transition-colors text-white" onClick={handleFormSubmit}
                          >
                            ORDER NOW
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src='/main/hft_home/2nd.jpg' alt='pic' fill sizes="100vw" />
    </div>
  );
};

export default Section2;
