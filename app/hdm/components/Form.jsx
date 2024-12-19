"use client";
import CustomerDataValidator from "@/pages/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import FlipAma from "../commonUse/FlipAma/FlipAma";

const Load = dynamic(() => import("@/pages/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});





const Form = ({ open, handleClose, handleClickOpen }) => {

    const CustomerDataValue = [
        {
            icon: null,
            label: "नाम लिखिए",
            inputValue: {
                type: "text",
                name: "name",
            }
        },
        {
            label: "फोन नंबर लिखिए",
            icon: "+91",
            inputValue: {
                type: "text",
                name: "phone",
                maxLength: 10,
                minLength: 10
            }
        },
    ]

    const searchParams = useSearchParams();

    const [CustomerData, setCustomerData] = useState({
        name: "",
        phone: '',
        address: ''
    })

    const [loading, setLoading] = useState(false)

    const [checkoutDetail, setCheckoutDetail] = useState({ checkoutChecked: false, checkoutUrl: '/checkouts' })

    const FetchWebCheckout = async (get_next_key, get_next_url) => {
        try {
            const result = await axios.get(`${process.env.NEXT_APP_API_URL}website/fetch_with_api_key?api_key=${get_next_key}`, { headers: { "web_site_url": get_next_url } })

            if (result.status === 200) {
                setCheckoutDetail({ ...checkoutDetail, checkoutChecked: result.data.website[0].checkout_toggle ? true : false })
                return
            }
            return
        } catch (err) {
            return
        }
    }
    useMemo(() => FetchWebCheckout(process.env.NEXT_APP_API_KEY, process.env.NEXT_APP_URL), [])



    useMemo(() => {

        return setCheckoutDetail({ ...checkoutDetail, checkoutUrl: checkoutDetail.checkoutChecked ? 'https://www.arayurveda.com/products/horse-fire-tablets' : "/checkout" })
    }, [checkoutDetail.checkoutChecked, checkoutDetail.checkoutUrl])





    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL ?? "ayurvedanew.com/hfj")



            try {
                const form = await fetch(`https://hfj.ayurvedanew.com//submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {

                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]



                    if (window.conversion_code) {
                        window.gtag('event', 'conversion', {
                            'send_to': window.conversion_code,
                            'event_callback': () => {
                                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                                // return handleClickOpen()

                            }
                        });
                    }
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    // return handleClickOpen()

                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                // return handleClickOpen()

            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
                // return handleClickOpen()

            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="buynow" className="bg-[#eaf1f7] text-black">

            {
                loading && <Load />
            }
            <div className='w-full  px-3 py-10 max-w-lg mx-auto  '>
                <div className="text-4xl sm:text-5xl text-left poppinsFont">
                    <h1 className="  sm:pb-1">कॉल पर विशेषज्ञ डॉक्टरों  </h1>
                    <p className="leading-snug">से <span className="px-3 font-extrabold text-white " style={{backgroundImage:'linear-gradient(blue 80%, #eaf1f7 20%)'}}>मुफ्त सलाह के लिए फॉर्म भरें!</span> </p>
                </div>
                <div className="  mt-5">

                    <div className="mx-auto   bg-white px-4 py-6 border border-black rounded-lg " id='formcallhide'>
                        <div>
                            <h1 className="text-center text-4xl font-bold poppinsFont border-bottom border-black"> Contact Us </h1>
                            <form className="space-y-3 ">
                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col my-6" key={key}>
                                        <label className="font-semibold text-md py-1 text-start">{data.label}</label>
                                        <div className="relative">
                                            <input {...data.inputValue} className={`p-1 py-3 border poppinsFont border-black focus:border-none w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className="absolute ransform poppinsFont translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                        </div>
                                    </div>
                                })}
                                <div className="flex justify-center items-center pt-4 ">
                                    <button onClick={handleFormSubmit} type="button" className="bg-red-600 text-white text-xl font-bold p-1 pt-3 md:w-72 w-full rounded-xl hover:bg-red-600/80 transition-colors ">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <FlipAma open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </div>

    );
};

export default Form;
