import dynamic from 'next/dynamic';
import React from 'react'


const OrderNow = dynamic(() => import('./orderNow'), {
    loading: () => <p>Loading</p>
});


const Content = () => {
    return (
        <div>


            <div className='bg-[#FCF8F3]  pb-5 pt-1 px-3'>



                <div className=" fontArya text-center font-semibold md:text-4xl text-2xl text-black  w-[95%] mx-auto my-4 rounded-xl">

                    <div className=" px-2 drop-shadow-2xl">
                        पार्टनर के साथ लम्बी पारी खेलना चाहते है तो ये जान लें!
                    </div>

                </div>
                <img src="/main/hf_images/f_couple.jpg" alt="" className='w-full  rounded-md' />

            </div>


            <p className=' indent-10'>
                <span className='text-2xl'>दो</span>स्तों अगर आपका भी बल्ला कमजोर है, विकेट जल्दी गिर जाता है और कुछ ही शॉट खेलकर आउट हो जाते है तो ये खास आपके ही लिए है। दोस्तों, हर व्यक्ति की चाहत होती है की वो देर तक क्रीज पर टिक कर लम्बी पारी खेले और नॉनस्टॉप शॉट्स लगाएं। उससे भी ज्यादा ये चाहत महिलाओं में होती है की उनके पार्टनर लम्बी पारी खेले जल्दी आउट न हो ताकि उन्हें भी इस खेल का सुख मिले।
            </p>


            <div className="bg-[#000000]">

                <div className=" fontArya text-center font-semibold md:text-4xl text-xl text-white  mx-auto rounded-xl">

                    <div className=" px-2 py-2">
                        इस खेल से आउट होने की मुख्य वजहें
                    </div>

                </div>
            </div>

            <ul className='fontNoto text-[1.1rem] md:text-xl font-semibold list-disc ml-7 px-2 py-4'>
                <li>
                    चिंता, तनाव या डिप्रेशन की समस्या
                </li>
                <li>
                    एल्कोहल या अन्य नशीली पदार्थों का अत्यधिक सेवन
                </li>
                <li>
                    देर से सोना, उचित नींद न लेना
                </li>
                <li>
                    पान मसाला, सिगरेट व अन्य तम्बाकू युक्त प्रोडक्ट का सेवन
                </li>
                <li>
                    शरीर में टेस्टोस्टेरोन का धीमा निर्माण या कमी
                </li>
                <li>
                    संतुलित आहार न लेना, फ़ास्ट फ़ूड - जंक फ़ूड का सेवन
                </li>
                <li>
                    डायबिटीज, थायराइड, प्रोस्टेट से परेशान और दवाओं का सेव
                </li>
            </ul>


            <div className="pb-5 pt-1 px-3">
                <img src="/main/hf_images/f2_couple.jpg" alt="" className='w-full  rounded-md  ' />
            </div>

            <OrderNow />


            <div className="bg-[#000000] mb-3">

                <div className=" fontArya text-center font-semibold md:text-4xl text-xl text-white  mx-auto rounded-xl">

                    <div className=" px-2 py-2">
                        ऐसे लगाएं नॉनस्टॉप शॉट, बढ़ाये प्यार
                    </div>

                </div>
            </div>

            <p className=''>
                देर तक क्रीज पर समय बिताने के लिए आपको चाहिए एक स्थायी उपाय जो जिससे समस्या जड़ से ठीक हो सके, टाइमिंग में सुधार हो और आप रहे नॉटआउट ! हर बार क्रीज पर उतरने से पहले केमिकल वाली गोलियां खाने और लाइफ को खतरे में डालने से बेहतर है की सुरक्षित और सर्टिफाइड समाधान आजमाकर इसे जड़ से ख़त्म किया जाए, और ये सर्टिफाइड समाधान है AR Ayurveda का Horse Fire Tablet. जी हाँ हॉर्सफायर बहुत ही असरदार और पूर्ण रूप से सुरक्षित भी है। वही, केमिकल वाली गोलियां कोई असर नहीं करती बल्कि कार्डियक अरेस्ट, लिवर डैमेज, हार्ट स्ट्रोक, और प्रोस्टेट रिलेटेड समस्या उत्पन्न कर सकती है।
            </p>


            <img src="/main/hf_images/hft_certificate.webp" alt="" className='md:w-3/4 w-full mx-auto' />


            <OrderNow />

            <p>
                Horse Fire Tablet अपनी नाम के भांति ही प्लेयर को खेल से पहले शरीर मे घोड़े जैसी शक्ति देता है रग-रग को उत्तेजित कर देता है जो घंटो तक बना रहता है। यह शक्ति-स्फूर्ति, टाइमिंग या औजार की मजबूती को उच्चतम स्तर पर ले जाने में मदद करता है। इस प्रकार प्लेयर क्रीज पर देर तक बना रहता है और नॉनस्टॉप शॉट्स लगा कर ऐसा शानदार प्रदर्शन दिखा सकते है जैसा पार्टनर उनसे चाहती है।
            </p>

            <div className="bg-[#000000] mb-3">

                <div className=" fontArya text-center font-semibold md:text-4xl text-xl text-white  mx-auto rounded-xl">

                    <div className=" px-2 py-2">
                        हॉर्सफायर के प्रभाव से विकेट<br /> का पतन न हो जल्दी!
                    </div>

                </div>
            </div>

            <p>
                दोस्तों, Horse Fire Tablet अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा और केसर जैसी 16 जड़ीबूटियों से बना हुआ एक शुद्ध आयुर्वेदिक फार्मूला है। Horse Fire Tablet ने खुद को साबित किया है कि लम्बी पारी खेलने के लिए ये ही बेस्ट है। इसका सहारा श्रेय इस फार्मूलेशन को तैयार करने वाले आयुर्वेदाचार्यों को को जाता है। जिन्होंने कई सालों तक जड़ीबूटियों का रिसर्च करने के बाद इसे तैयार किया है।
            </p>
        </div>
    )
}

export default Content