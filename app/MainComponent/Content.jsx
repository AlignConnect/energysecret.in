import dynamic from 'next/dynamic';
import React from 'react'
import { CiPercent } from 'react-icons/ci';
import { FaHandPointRight, FaPercentage } from "react-icons/fa";
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";


const OrderBtn = dynamic(() => import('../commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

const Content = () => {


    const work_benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2' key={key}>
                <FaHandPointRight size={20} color='black' />
                <div className='fontNoto md:text-2xl text-xl  text-black py-1 '>{e.work_benifits_content}</div>
            </div >

        })
    }



    const delivery_options = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 py-2' key={key}>
                <div className="">{e.icons}</div>
                <div className="fontKalnia">
                    <div className='md:text-md text-md font-extrabold '>
                        {e.title}
                    </div>
                    <div className='text-sm fontPoppins'>{e.content}</div>
                </div>
            </div >
        })
    }



    return (
        <section className='text-white px-2 bg-black'>


            <div className="bg-red-800 w-full md:w-3/4 mx-auto my-2 md:my-4">

                <div className=" fontNoto sm:text-3xl text-2xl text-center font-semibold pt-1 md:pt-2 ">
                    <span className="fontPoppins text-yellow-300">Horsefire Tablet </span>ही क्यों?
                </div>
            </div>


            <p className="py-1 text-justify">
                <span className="fontPoppins text-yellow-500">Horsefire tablet </span>एक श्रेष्ठ पुरुष-शक्ति वर्धक उत्पाद है जिसे आयुर्वेद की प्रीमियम क्वालिटी और शक्तिशाली जड़ीबूटियों के अनोखे मिश्रण से बनाया गया है। इसमें शिलाजीत, अश्वगंधा और गोक्षुरा जैसे श्रेष्ठ टेस्टोस्टेरोन बूस्टर हर्ब्स समाहित है।
            </p>


            <p className="py-1 text-justify">
                13 बेशकीमती जड़ीबूटियों से बना <span className="fontPoppins text-yellow-500">Horsefire tablet </span> पुरुष कमजोरी मिटाकर, स्टैमिना, जोश और उत्तेजना बढ़ाने में मदद करता है।
            </p>


            <OrderBtn/>


            <div className="bg-white rounded-md my-4">

                <div className="md:grid grid-cols-2 items-center justify-center gap-4 py-3">

                    <div>
                        <div className="grid justify-center">
                            <div className="fontNoto text-black font-extrabold text-2xl md:text-4xl pt-5 px-2">
                                <span className='fontPoppins text-red-600 sm:text-5xl text-3xl'>Horsefire </span>से होने वाले फायदे
                            </div>

                            <div className="px-3 my-2 ">
                                {
                                    work_benifits([
                                        {
                                            work_benifits_content: "टेस्टोस्टेरोन हॉर्मोन बढाए"
                                        },
                                        {
                                            work_benifits_content: "अंग-अंग में रक्त संचार बेहतर करे"
                                        },
                                        {
                                            work_benifits_content: "एनर्जी, स्टैमिना और जोश में बृद्धि करे"
                                        },
                                        {
                                            work_benifits_content: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                                        }
                                    ])
                                }
                            </div>

                        </div>

                    </div>

                    <div>
                        <img src="/main/home_images/flip.webp" alt="" className='w-full md:w-3/4 mx-auto' />
                    </div>

                </div>

            </div>

            <OrderBtn/>

            <div className="bg-white text-black  rounded-md my-4">
                <div className="grid md:grid-cols-4 items-center gap-2 py-4 px-3">
                    {
                        delivery_options([
                            {
                                icons: <TbTruckDelivery size={50} />,
                                title: "Free Shipping",
                                content: "Shipping on all prepaid orders"
                            },
                            {
                                icons: <GiTakeMyMoney size={50} />,
                                title: "COD Available",
                                content: "Pay after recieving your pack"
                            },
                            {
                                icons: <TbMoneybag size={50} />,
                                title: "Money Back Guarantee",
                                content: "10 days money back guarantee"
                            },
                            {
                                icons: <CiPercent size={50} />,
                                title: "Prepaid Offer",
                                content: "Save extra 10% on prepaid orders"
                            },
                        ])
                    }
                </div>
            </div>


        </section>
    )
}

export default Content