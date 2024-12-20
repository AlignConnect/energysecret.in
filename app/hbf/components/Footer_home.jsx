import Link from 'next/link'
import React from 'react'

const Footer_home = () => {
    return (
        <section className='bg-[#2a2a2a]'>

            <div className='py-4'>
                <div className="flex items-center justify-center gap-2 py-2">
                    <div className="">
                        <img src="/main/home_images/logo.webp" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-yellow-500 md:text-xl text-md font-semibold">
                                Horsefire Tablet
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-white text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>

                {/* 
                <hr className='my-3 w-1/2 mx-auto' /> */}


                <div className="text-white text-center text-[0.7rem] md:text-[0.9rem] py-3 px-2">
                    Horse Fire Tablet is the best Ayurvedic Capsules which helps to increase the size of P and it leads to increase E time. It has ayurvedic ingredients like Withania, Somnifera, Asparagus, Racemosus, Asparagus, Adscendens Myristica Fragrans etc.
                </div>

                <div className="text-white text-center text-[0.7rem] md:text-[0.9rem] py-3 px-2">
                    which provides the good amount of energy and facilitate the absorption of blood flow to the cavernous body of the P. Horse Fire Tablet is a first choice.
                </div>

                <div className="">
                    <img src="/main/home_images/_dmca_premi_badge_4.png" alt="" className='w-22 mx-auto' />
                </div>

                <div className="text-white py-5">
                    <div className="fontPoppins text-sm flex justify-center items-center gap-4">

                        <Link href='/terms-conditions' className='underline  '>
                            Terms & Conditions
                        </Link>


                        <Link href='/privacy-policy' className='underline '>
                            Privacy Policy
                        </Link>
                    </div>
                </div>


                <div className="text-center text-blue-500 mb-16 md:mb-4">
                    © 2024 Arayurveda | All Rights Reserved.
                </div>




            </div>


        </section>
    )
}

export default Footer_home