import dynamic from 'next/dynamic';
import { Poppins } from "next/font/google";
import { CiDeliveryTruck, CiDiscount1 } from 'react-icons/ci';
import { TbMoneybag } from "react-icons/tb";
import { GiTakeMyMoney } from 'react-icons/gi';


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Dynamicbtn = dynamic(() => import('../components/Orderbtn2'), {
    loading: () => <p>loader</p>
});

const Caroafter = () => {
    return (

        <div className="w-full bg-hero4hfd bg-cover bg-no-repeat">
            <div className=" max-w-5xl px-1 mx-auto  py-6 md:py-10 text-black">
                <div className="grid md:grid-cols-2 gap-2 md:gap-10 px-2">
                    <div className="order-2 md:order-1">
                        <h1 className="font-bold  text-3xl md:text-4xl">सेवन विधि</h1>
                        <p className="mt-1 text-xl md:text-[1.4rem] text-justify">Horse Fire Tablet का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।</p>

                        <h1 className="font-bold  text-3xl md:text-4xl mt-8">विशेष सुविधा</h1>
                        <p className="mt-1 text-xl md:text-[1.4rem] text-justify">कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र, लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100% गारन्टी के साथ असर करता है।</p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div>
                            <img src="/main/hfd_images/pro_b.png" alt="pic" className='!w-full md:!w-3/4 !h-full' />

                        </div>
                        <div className="block md:hidden">
                            <Dynamicbtn />
                        </div>

                    </div>
                </div>

                <h1 className={`font-extrabold text-center text-4xl md:text-5xl mt-5 md:mt-10 ${poppin.className}`}>What we Offer</h1>

                <div className={`border border-[#ea8622] grid grid-cols-2 gap-y-3 md:gap-y-0 md:grid-cols-3 justify-center py-3 px-2 rounded-lg mt-4 ${poppin.className}`}>
                    <div className="flex gap-2 items-center justify-center">
                        <CiDeliveryTruck className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">FREE SHIPPING</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Shipping on all prepaid orders</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center justify-center">
                        <GiTakeMyMoney className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">COD Available</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Pay after recieving your pack</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <TbMoneybag className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Money Back Guarantee</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">10 days money back guarantee</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center md:hidden justify-center">
                        <CiDiscount1 className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Prepaid Offer</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Save extra 10% on prepaid orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Caroafter;