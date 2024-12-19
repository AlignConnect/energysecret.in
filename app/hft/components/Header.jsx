import React from 'react'
import dayjs from "dayjs";
const Header = () => {
    return (
        <section className=''>




            <div className="bg-gray-200 py-3 flex justify-between items-center px-2">

                <div className="flex items-center justify-center gap-2">
                    <img src="/main/htb_images/nitya.webp" alt="" className='w-14 sm:w-20' />
                    <div className="fontNoto text-center font-extrabold text-[1.2rem] sm:text-2xl pt-3 text-blue-600">
                        नीत्या पाटिल
                    </div>
                </div>
                <div className='text-sm sm:text-[1.2rem]'>
                    <div className="font-semibold text-black fontNoto text-md">विज्ञापन-संबंधी</div>
                    <div className="text-[0.8rem] sm:text-[1.2rem]">
                        Published On:-{dayjs().format('DD-MM-YYYY')}
                    </div>
                </div>
            </div>

            <div className="fontNoto text-center text-xl sm:text-3xl pt-4 sm:pt-8 font-extrabold px-2">
                मेरे पति की विकलांगता ने हमारे रिश्ते को बर्बाद कर दिया, लेकिन फिर इस आयुर्वेद टेबलेट ने सब कुछ बदल दिया!
            </div>


            <div className="fontNoto text-center font-semibold text-md pt-2 text-gray-500">
                नीत्या पाटिल द्वारा लिखित
            </div>

            <hr className='my-3' />

        </section>
    )
}

export default Header