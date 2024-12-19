import dynamic from 'next/dynamic';
import React from 'react'

// const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
//     loading: () => <p>loader</p>
// });


const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>loader</p>
});


const HFT_Use = () => {
    return (
        <section className='fontNoto'>

            <p className="">
                <span className='font-extrabold text-xl'>हॉर्सफायर टैबलेट</span> 1 सप्ताह से अंदर ही मेरे घर पुरे सिक्योर और गुप्त तरीके से डिलीवर हो गया। मै इसके फायदे को देखने के लिए उत्सुक था।
            </p>


            <img src="/main/ht_images/p6.webp" alt="" className='w-80 sm:w-1/2 mx-auto' />


            <FlipAmazon />

            <p className="">
                मैं सुबह शाम AR Ayurveda के एक्सपर्ट्स द्वारा बताये गए नियमानुसार सेवन करने लगा सच कहूँ तो एक सप्ताह के अंदर ही फायदे देख में चौंक गया।
            </p>



            <img src="/main/ht_images/c3.jpg" alt="" className='w-full' />

            <p className="">
                मेरी बीवी को यह एक सपने का सच होने जैसा लगा क्योंकि उस रात जैसा कड़क मेरा औजार कभी नहीं हुआ था उस रात हमारा संभोग दो मिनट से सीधा 20 मिनट पर पहुंच गया था।  उन दिन वो मेरे परफॉरमेंस से बहुत खुश थी। उसके बाद तो धीरे-धीरे मेरी टाइमिंग और बढ़ती गई और मैं हर दिन पहले से बेहतर प्रदर्शन करने लगा
            </p>



            <p className="">
                आज तक मुझे ऐसी समस्या कभी दुबारा नहीं हुई और हम अपनी सेक्सुअल लाइफ को खुलकर एन्जॉय करते है। अब मेरी बीबी को मुझसे कोई शिकायत नहीं है... बस है तो सिर्फ प्यार!!
            </p>


            <div className="text-center py-3">
                <div className="fontNoto text-md font-extrabold text-black">
                    Old Price:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                </div>

                <div className="fontNoto text-md font-extrabold text-black">
                    New Price:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                </div>
            </div>


            <img src="/main/ht_images/hft_certificate.webp" alt="" className='w-80 sm:w-1/2 mx-auto' />



            <FlipAmazon />

            <div className="sm:text-2xl text-2xl text-center font-extrabold pt-4 pb-2">
                हॉर्सफायर टैबलेट के बेहतरीन फायदे जो मैंने नोटिस किया-
            </div>


            <ul className='text-[1.1rem] font-semibold list-disc ml-6 text-justify px-2 py-2'>
                <li>
                    स्टैमिना और ताकत बढाए, कॉन्फिडेंस जगाये
                </li>
                <li>
                    शीघ्रपतन की समस्या से छुटकारा दिलाये, टाइमिंग बढ़ाये
                </li>
                <li>
                    लिंग ढीलेपन की समस्या दूर कर हार्डर इरेक्शन प्राप्त करने में मददगार
                </li>
                <li>
                    आंतरिक शक्ति और ऊर्जा को बढाए
                </li>
                <li>
                    स्वप्नदोष और धातुरोग से छुटकारा दिलाये
                </li>
            </ul>



            <div className="bg-[#FEFAF6] mx-2 my-2 py-2 rounded-xl" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                <div className="text-center fontPoppins font-extrabold text-xl sm:text-2xl py-3">
                    CERTIFICATION
                </div>

                <hr />

                <div className="grid grid-cols-4 gap-3 items-center p-4">
                    <img src="/main/ht_images/cer1.png" alt="" className='sm:w-32 w-24 mx-auto ' />
                    <img src="/main/ht_images/cer2.png" alt="" className='sm:w-32 w-24 mx-auto' />
                    <img src="/main/ht_images/cer3.png" alt="" className='sm:w-32 w-24 mx-auto' />
                    <img src="/main/ht_images/cer4.png" alt="" className='sm:w-32 w-24 mx-auto' />

                </div>
            </div >


            <FlipAmazon />


            <p className=" font-semibold">
                मैं तो हर उस शख्स को यह भरोसेमंद <span className='text-xl font-extrabold'>हॉर्सफायर टैबलेट</span> इस्तेमाल करने की सलाह दूंगा, जो अपना सेक्स अनुभव बेहतर करना चाहते है और अपने पार्टनर को संतुष्ट देखना चाहते है।
            </p>


            <hr />




        </section >
    )
}

export default HFT_Use