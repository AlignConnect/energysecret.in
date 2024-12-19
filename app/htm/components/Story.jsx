
import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('../components/orderNow'), {
    loading: () => <p>loader</p>
});

const Flip = dynamic(() => import('../components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Story = () => {

    const hurbs = (arr) => {

        return arr.map((e, key) => {

            return <div className='' key={key}>

                <div className='m-2 rounded-xl bg-[#FEFAF6]' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                    <div className=''>
                        <img src={e.img} alt="herbs" className='w-62 sm:w-1/2 mx-auto' />
                    </div>



                    <h2 className='text-2xl sm:text-3xl text-center text-red-700 font-extrabold'>{e.title}</h2>




                </div>

            </div >
        })


    }

    return (
        <section>

            <div className="">

                <img src="/main/htb_images/headImage.jpg" alt="" className='w-full mt-5' />

                <p className='px-2 py-2 text-center text-[0.8rem] md:text-xl text-gray-500 italic'>
                    एक्सपर्ट्स से जानें पिच पर टिककर लम्बी पारी खेलने का बेस्ट तरीका!
                </p>

                <hr className='my-3' />


                <p className='px-2 py-2 text-justify indent-10'>
                    दोस्तों अगर आपका भी बल्ला कमजोर है, विकेट जल्दी गिर जाता है और कुछ ही शॉट खेलकर आउट हो जाते है तो ये खास आपके ही लिए है। दोस्तों, हर व्यक्ति की चाहत होती है की वो देर तक क्रीज पर टिक कर लम्बी पारी खेले और नॉनस्टॉप शॉट्स लगाएं। उससे भी ज्यादा ये चाहत महिलाओं में होती है की उनके पार्टनर लम्बी पारी खेले जल्दी आउट न हो ताकि उन्हें भी इस खेल का सुख मिले।
                </p>


                <div className="mb-3">
                    <Flip />
                </div>


                <div className="fontNoto text-center text-2xl sm:text-4xl pt-4 sm:pt-8 font-extrabold px-2">
                    इस खेल से आउट होने की मुख्य वजहें
                </div>

                <ol className=' text-[1.1rem] md:text-xl  fontNoto pt-5 list-decimal ml-7 sm:ml-12'>
                    <li className='py-2'>
                        एल्कोहल या अन्य नशीली पदार्थों का अत्यधिक सेवन
                    </li>
                    <li className='py-2'>
                        देर से सोना, उचित नींद न लेना
                    </li>
                    <li className='py-2'>
                        पान मसाला, सिगरेट व अन्य तम्बाकू युक्त प्रोडक्ट का सेवन
                    </li>
                    <li className='py-2'>
                        शरीर में टेस्टोस्टेरोन का धीमा निर्माण या कमी
                    </li>
                    <li className='py-2'>
                        संतुलित आहार न लेना, फ़ास्ट फ़ूड - जंक फ़ूड का सेवन
                    </li>
                    <li className='py-2'>
                        डायबिटीज, थायराइड, प्रोस्टेट से परेशान और दवाओं का सेव
                    </li>
                </ol>

                <img src="/main/htb_images/second_couple.jpg" alt="" className='w-full py-1' />

                <div className="fontNoto text-center text-2xl sm:text-4xl pt-4 sm:pt-8 font-extrabold px-2">
                    ऐसे लगाएं नॉनस्टॉप शॉट, बढ़ाये प्यार
                </div>


                <p className='px-2 py-4 text-justify'>
                    देर तक क्रीज पर समय बिताने के लिए आपको चाहिए एक स्थायी उपाय जो जिससे समस्या जड़ से ठीक हो सके, टाइमिंग में सुधार हो और आप रहे नॉटआउट ! हर बार क्रीज पर उतरने से पहले केमिकल वाली गोलियां खाने और लाइफ को खतरे में डालने से बेहतर है की सुरक्षित और सर्टिफाइड समाधान आजमाकर इसे जड़ से ख़त्म किया जाए, और ये सर्टिफाइड समाधान है AR Ayurveda का Horse Fire Tablet. जी हाँ हॉर्सफायर बहुत ही असरदार और पूर्ण रूप से सुरक्षित भी है। वही, केमिकल वाली गोलियां कोई असर नहीं करती बल्कि कार्डियक अरेस्ट, लिवर डैमेज, हार्ट स्ट्रोक, और प्रोस्टेट रिलेटेड समस्या उत्पन्न कर सकती है।
                </p>

                <img src="/main/htb_images/p6.webp" alt="" className='w-full md:w-3/4 mx-auto py-2' />

                <div className="mb-3">
                    <Flip />
                </div>



                <p className='px-2 py-2 text-justify'>
                    Horse Fire Tablet अपनी नाम के भांति ही प्लेयर को खेल से पहले शरीर मे घोड़े जैसी शक्ति देता है रग-रग को उत्तेजित कर देता है जो घंटो तक बना रहता है। यह शक्ति-स्फूर्ति, टाइमिंग या औजार की मजबूती को उच्चतम स्तर पर ले जाने में मदद करता है। इस प्रकार प्लेयर क्रीज पर देर तक बना रहता है और नॉनस्टॉप शॉट्स लगा कर ऐसा शानदार प्रदर्शन दिखा सकते है जैसा पार्टनर उनसे चाहती है।
                </p>


                <div className="fontNoto text-center text-2xl sm:text-4xl pt-4 sm:pt-8 font-extrabold px-2">
                    हॉर्सफायर के प्रभाव से विकेट का पतन न हो जल्दी !
                </div>

                <img src="/main/htb_images/image3.jpg" alt="" className='w-full py-2' />

                <p className='px-2 py-2 text-justify'>
                    दोस्तों, Horse Fire Tablet अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा और केसर जैसी 16 जड़ीबूटियों से बना हुआ एक शुद्ध आयुर्वेदिक फार्मूला है। Horse Fire Tablet ने खुद को साबित किया है कि लम्बी पारी खेलने के लिए ये ही बेस्ट है। इसका सहारा श्रेय इस फार्मूलेशन को तैयार करने वाले आयुर्वेदाचार्यों को को जाता है। जिन्होंने कई सालों तक जड़ीबूटियों का रिसर्च करने के बाद इसे तैयार किया है।
                </p>

                <div className="mb-3">
                    <Flip />
                </div>


            </div>


            <section className='fontNoto'>
                <div className=''>

                    <div className='grid grid-cols-2 items-center' >

                        {
                            hurbs([
                                {
                                    img: "/main/ht_images/a.png",
                                    title: "अश्वगंधा",
                                },
                                {
                                    img: "/main/ht_images/b.png",
                                    title: "शिलाजीत"

                                },
                                {
                                    img: "/main/ht_images/c.png",
                                    title: "केसर",
                                },
                                {
                                    img: "/main/ht_images/d.png",
                                    title: "सफ़ेद मूसली",
                                },
                                {
                                    img: "/main/ht_images/e.png",
                                    title: "गोखरू",
                                },
                                {
                                    img: "/main/ht_images/f.png",
                                    title: "अभ्रक भस्म",

                                }
                            ])
                        }
                    </div>
                </div>
            </section>

            <p className='px-2 py-2 text-justify'>
                दोस्तों, Horse Fire Tablet के इस्तेमाल से खेल से पहले स्फूर्ति, आत्मविश्वास और टाइमिंग में सुधार होता है जिससे वो अपने पार्टनर को संतुष्ट कर सके। इसकी वजह से पूरे भारत में इसका इस्तेमाल तेजी से बढ़ा है। इसके इस्तेमाल से विस्फोटक पारी खेल रहे है और एक रोमांचक जीवन व्यतीत कर रहे है।
            </p>

            <div className="fontNoto text-center text-3xl sm:text-4xl pt-4 sm:pt-8 font-extrabold px-2">
                हॉर्सफायर मदद करता है
            </div>

            <img src="/main/htb_images/p8.webp" alt="" className='md:w-3/4 w-full px-4 mx-auto py-2' />


            <ol className=' text-[1.2rem] md:text-xl  fontNoto pt-5 list-decimal ml-7 sm:ml-12'>
                <li className='py-2'>
                    शक्ति और स्फूर्ति में सुधार करने में
                </li>
                <li className='py-2'>
                    बल्ले को मजबूत करने में
                </li>
                <li className='py-2'>
                    टाइमिंग सुधारने में
                </li>
                <li className='py-2'>
                    लम्बी पारी खेलने में
                </li>
                <li className='py-2'>
                    प्रदर्शन में सुधार करने में
                </li>
                <li className='py-2'>
                    लम्बी इनिंग, पार्टनर को संतुष्ट करने में
                </li>
            </ol>

            <div className="mb-3">
                <Flip />
            </div>


        </section>
    )
}

export default Story