import Link from 'next/link'
import React from 'react'

const customFooter = () => {
    return (
        <section className='mb-[5rem] sm:mb-0'>


            <div className="fontPoppins ">

                <div className='text-md text-center pt-4 font-semibold'>
                    We are Available:-
                </div>


                <div className="flex justify-center items-center gap-7 py-3">
                    <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itm937ddaf427ff8?pid=AYDFZGYVFK2GY98G">
                        <img src="/main/htb_images/flipkart.png" alt="" className='sm:w-28 w-24 mx-auto' />
                    </a>
                    <a href="https://www.amazon.in/dp/B0BYJ8KM7S?ref=myi_title_dp">
                        <img src="/main/htb_images/amazon.png" alt="" className='sm:w-24 w-20 mx-auto ' />
                    </a>
                </div>

                <hr className='my-3' />



                <div className="fontNoto  text-center   text-xl font-extrabold">
                    स्वास्थ्य अस्वीकरण
                </div>

                <p className='px-2 text-[1rem] py-2 text-center'>
                    इस उत्पाद का उद्देश्य किसी बीमारी का निदान, उपचार, इलाज या रोकथाम करना नहीं है। यदि आप दवा ले रहे  हैं, हृदय रोग  है या कोई पुरानी बीमारी है तो हम सुझाव देते हैं कि हमारे किसी भी उत्पाद का उपयोग करने से पहले एक सामान्य चिकित्सक से परामर्श करें। सभी उत्पादों पर परिणाम विशिष्ट नहीं होते हैं और हर किसी को इन परिणामों का अनुभव नहीं होगा। "Horsefire" ने आयुष से लाइसेंस प्राप्त कर लिया है। आयुष प्रमाणपत्र सरकार द्वारा दिया गया एक प्राधिकरण है। हमारे उत्पादों के उपभोग या उपयोग के बाद होने वाली किसी भी प्रकार की समस्या के लिए "horsefire tablet" उत्तरदायी नहीं होगा।
                </p>


                <p className='px-2 text-[1rem] py-2 text-center'>
                    <span className='font-semibold'>अस्वीकरण-</span> परिणाम व्यक्ति-दर-व्यक्ति भिन्न हो सकते हैं। वेबसाइट पर दिखाई गई छवियां केवल प्रतिनिधित्व हैं।
                </p>

                <p className='px-2 text-[1rem] py-2 text-center'>
                    "किसी भी धोखाधड़ी योजना/लॉटरी/लकी ड्रा के तहत किसी नकद/पुरस्कार की पेशकश करने वाले फर्जी कॉल/एसएमएस/ईमेल से सावधान रहें। कोई भी जानकारी साझा न करें या किसी भी राशि का भुगतान न करें।"
                </p>

                <div className="fontPoppins text-sm flex justify-center items-center gap-4">

                    <Link href='/terms-conditions' className='underline text-blue-600'>
                        Terms & Conditions
                    </Link>


                    <Link href='/privacy-policy' className='underline text-blue-600'>
                        Privacy Policy
                    </Link>
                </div>


                <hr className='my-3' />

                <div className='text-sm text-center pb-3 font-semibold'>
                    Copyright ©2024 – All rights reserved
                </div>

            </div>

        </section>
    )
}

export default customFooter