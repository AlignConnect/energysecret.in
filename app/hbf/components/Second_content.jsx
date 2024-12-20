import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../../commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});


const Second_content = () => {
    return (
        <section className='bg-white py-5 '>

            <div className="fontPoppins font-semibold text-center text-xl">
                As seen in:-
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 items-center md:gap-4 gap-2 mx-5">
                <div className="border border-solid border-black my-3">
                    <a href="https://www.aninews.in/news/business/business/healthy-foods-for-erectile-dysfunction-and-diet-guide20221014122830/">
                        <img src="/main/home_images/Ani.jpg" alt="" className='md:w-1/2 w-44 mx-auto' />
                    </a>
                </div>
                <div className="border border-solid border-black my-3">
                    <a href="https://www.mid-day.com/brand-media/article/why-hammer-of-thor-ayurvedic-medicine-demand-increases-23255059">
                        <img src="/main/home_images/mid-day.jpg" alt="" className='md:w-1/2 w-44 mx-auto' />
                    </a>
                </div>
                <div className="border border-solid border-black my-3">
                    <a href="https://up18news.com/exercises-to-increase-your-stamina-in-bed-why-people-use-hammer-of-thor/">
                        <img src="/main/home_images/up18news.png" alt="" className='md:w-1/2 w-44 mx-auto' />
                    </a>
                </div>
                <div className="border border-solid border-black my-3">
                    <a href="https://news.webindia123.com/news/articles/Business/20221014/3993082.html">
                        <img src="/main/home_images/webindia123.jpg" alt="" className='md:w-1/2 w-44 mx-auto' />
                    </a>
                </div>
            </div>

            <OrderBtn />

            <div className="py-5">

                <iframe className='yf_shdw md:w-3/5 w-[95%] h-[13.5rem] md:h-[24rem] mx-auto rounded-xl' src="https://www.youtube.com/embed/h-3HVSbQAGA?si=TXmIDDVcb1xmh800"
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>

            </div>


            <div className="fontPoppins font-semibold text-center md:text-xl text-md py-2">
                Why more than 100000+ satisfied
                customers just ❤️ the Horse Fire Tablet
            </div>


            <div className="grid md:grid-cols-2 items-center md:gap-4 gap-2 py-4 mx-2 md:mx-6">
                <div className="border-dotted border-2 border-gray-400 py-2">

                    <img src="/main/home_images/cus1.png" alt="" className='md:w-5/6 w-full mx-auto' />

                </div>
                <div className="border-dotted border-2 border-gray-400 py-2">

                    <img src="/main/home_images/cus2.png" alt="" className='md:w-5/6 w-full mx-auto' />

                </div>
                <div className="border-dotted border-2 border-gray-400 py-2">

                    <img src="/main/home_images/cus3.png" alt="" className='md:w-5/6 w-full mx-auto' />

                </div>
                {/* <div className="border-dotted border-2 border-gray-400 py-2">

                    <img src="/main/home_images/cus4.png" alt="" className='md:w-5/6 w-full mx-auto' />

                </div> */}
                <div className="border-dotted border-2 border-gray-400 py-2">

                    <img src="/main/home_images/cus5.png" alt="" className='md:w-5/6 w-full mx-auto' />

                </div>
            </div>

            <OrderBtn />

            <div className="bg-black text-gray-400 py-4 my-2">

                <img src="/main/home_images/customers2x.png" alt="" className='md:w-36 w-1/2 mx-auto my-2' />

                <div className="text-center md:text-md text-sm fontPoppins">
                    Niraj Patel, Rohan Yadav and <span className='text-white'>1022 others </span>
                    already Reviewed Horse Fire Tablet, read their stores
                </div>

            </div>

        </section>
    )
}

export default Second_content