import { CustomerDataValue } from "../commonUse/FormDataValidation";
import { useGlobalContext } from "../statemanage/context";



const Form = ({ handleFormSubmit }) => {

  const handleChange = async (e) => {
    setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
  }

  const { CustomerData, setCustomerData } = useGlobalContext();


  return (
    <div className=" py-4 px-3" id="form">
      <div className={`max-w-2xl border bg-slate-100 rounded-xl py-4 mx-auto fontPoppins mt-4 p-3 text-white `}>
        <div>
          <h1 className="text-center text-zinc-900 text-4xl font-bold">
            Contact Us
          </h1>
          <form className="space-y-3" >

            {CustomerDataValue?.map((data, key) => {
              return <div className="flex flex-col" key={key}>
                <label className="font-semibold text-xl py-1 text-black">{data.label}</label>
                <div className="relative">
                  <input {...data.inputValue} className={`p-1 text-black py-5 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                  {data.icon && <span className="absolute text-black ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                </div>
              </div>
            })}

            <div className="flex justify-center items-center pt-5 ">
              <button
                type="submit"
                className={`bg-red-700 text-xl  fontPoppins font-bold p-3 py-4 md:w-72 w-full rounded-full
                 hover:bg-red-600 transition-colors text-white flex justify-center items-center`}
                onClick={handleFormSubmit}
              >
                ORDER NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
