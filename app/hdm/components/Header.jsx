import React from 'react'
import dayjs from "dayjs";
const Header = () => {
    return (
        <section className=''>




            <div className="bg-gray-300 py-3 flex justify-between items-center px-3">

                <div className="flex items-center justify-center  gap-1 py-2">
                    <div className="">
                        <img src="/main/htb_images/p6.webp" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-red-500 md:text-xl text-md font-extrabold">
                                Horsefire Tablet
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-black text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>
                <div className="fontNoto text-center font-semibold text-md md:text-xl pt-2 text-gray-500">
                    विज्ञापन-संबंधी
                </div>
            </div>

            <div className="fontNoto text-center text-2xl sm:text-4xl pt-4 sm:pt-8 font-extrabold px-2">
                पार्टनर के साथ लम्बी पारी खेलना चाहते है तो ये जान लें!
            </div>





            <hr className='my-3' />

        </section>
    )
}

export default Header