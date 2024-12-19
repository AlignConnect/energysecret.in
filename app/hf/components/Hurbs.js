import dynamic from 'next/dynamic';
import React from 'react'


const OrderNow = dynamic(() => import('./orderNow'), {
    loading: () => <p>Loading</p>
});


const Hurbs = () => {

    const hurbs = (arr) => {

        return arr.map((e, key) => {

            return <div className='' key={key}>

                <div className='m-2 rounded-xl bg-[#FEFAF6]' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                    <div className=''>
                        <img src={e.img} alt="herbs" className='w-62 sm:w-1/2 mx-auto' />
                    </div>



                    <h2 className='text-xl sm:text-2xl text-center text-red-700 font-extrabold'>{e.title}</h2>

                </div>

            </div >
        })


    }

    return (

        <section className='fontNoto'>
            <div className=''>

                <div className='grid md:grid-cols-3 grid-cols-2 items-center' >

                    {
                        hurbs([
                            {
                                img: "/main/ht_images/a.png",
                                title: "अश्वगंधा"
                            },
                            {
                                img: "/main/ht_images/b.png",
                                title: "शिलाजीत"
                            },
                            {
                                img: "/main/ht_images/c.png",
                                title: "केसर"
                            },
                            {
                                img: "/main/ht_images/d.png",
                                title: "सफ़ेद मूसली"
                            },
                            {
                                img: "/main/ht_images/e.png",
                                title: "गोखरू"
                            },
                            {
                                img: "/main/ht_images/f.png",
                                title: "अभ्रक भस्म"
                            }
                        ])
                    }
                </div>
            </div>


            <p>
                दोस्तों, Horse Fire Tablet के इस्तेमाल से खेल से पहले स्फूर्ति, आत्मविश्वास और टाइमिंग में सुधार होता है जिससे वो अपने पार्टनर को संतुष्ट कर सके। इसकी वजह से पूरे भारत में इसका इस्तेमाल तेजी से बढ़ा है। इसके इस्तेमाल से विस्फोटक पारी खेल रहे है और एक रोमांचक जीवन व्यतीत कर रहे है।
            </p>


            <div className="bg-[#000000] mb-3">

                <div className=" fontArya text-center font-semibold md:text-4xl text-xl text-white  mx-auto rounded-xl">

                    <div className=" px-2 py-2">
                        हॉर्सफायर टेबलेट मदद करता है
                    </div>

                </div>
            </div>


            <img src="/main/hf_images/product.webp" alt="" className='md:w-1/2 w-5/6 mx-auto' />

            <OrderNow />


            <ul className='fontNoto text-[1.2rem] md:text-2xl font-semibold list-disc ml-7 px-2 py-4'>
                <li>
                    शक्ति और स्फूर्ति में सुधार करने में
                </li>
                <li>
                    बल्ले को मजबूत करने में
                </li>
                <li>
                    टाइमिंग सुधारने में
                </li>
                <li>
                    लम्बी पारी खेलने में
                </li>
                <li>
                    प्रदर्शन में सुधार करने में
                </li>
                <li>
                    लम्बी इनिंग, पार्टनर को संतुष्ट करने में
                </li>
            </ul>


            <div className="pb-5 pt-1 px-3">
                <img src="/main/hf_images/f3_couple.png" alt="" className='w-full  rounded-md  ' />
            </div>


            <p>
                हॉर्सफायर लेने वाले पुरुष में इतना दमखम होता है की हर शॉट में पार्टनर की चीख निकल जाती है। आपको बता दें की यह मार्किट में उपलब्ध अन्य के मुकाबले ज्यादा प्रभावशाली और सुरक्षित है। जहां अन्य केवल झूठे वादों से लोगो को भ्रमित करते है वही Horsefire अपने अद्भुत प्रभाव क्षमता से समस्याएं मिटाकर अपनी विश्वसनीयता और लोकप्रियता को साबित किया है।
            </p>

            <div className="pb-5 pt-1 px-3">
                <img src="/main/hf_images/public.avif" alt="" className='w-3/4 md:w-1/2 mx-auto  rounded-md  ' />
            </div>


            <OrderNow />


            <div className="bg-[#FFD3B6] mx-2 my-2 py-2 rounded-md" style={{ boxshadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                <div className="text-center fontArya font-extrabold text-xl md:text-4xl py-3">
                    होर्सफायर पर भरोसा करने की वजह
                </div>

                <hr />

                <div className="grid grid-cols-4 gap-3 items-center p-4">
                    <img src="/main/ht_images/cer1.png" alt="" className='sm:w-32 w-24 mx-auto ' />
                    <img src="/main/ht_images/cer2.png" alt="" className='sm:w-32 w-24 mx-auto' />
                    <img src="/main/ht_images/cer3.png" alt="" className='sm:w-32 w-24 mx-auto' />
                    <img src="/main/ht_images/cer4.png" alt="" className='sm:w-32 w-24 mx-auto' />

                </div>
            </div >


            <p className="italic font-semibold">
                आप भी <span className="text-xl font-extrabold">"हॉर्सफायर टेबलेट"</span> के इस्तेमाल से उन लाखों पुरुषों में शामिल हो जाये जो कभी निराश थे पर आज अपनी मैरिड लाइफ में काफी खुश और संतुष्ट है।
            </p>


            <div className='bg-black'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className="pt-2 pb-1 flex " >
                        <div className='fontNoto flex gap-1 items-center font-semibold text-md md:text-xl px-2 text-yellow-300'>
                            सूचना:
                        </div>
                        <marquee className='fontNoto text-md md:text-xl text-white' direction="left">हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 font-extrabold">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                    </div>
                </div>
            </div>


        </section >

    )
}

export default Hurbs