import React from 'react'
import './OrderBtn.css'
import Link from 'next/link'

const OrderBtn = () => {
    return (
        // <div><div className="text-center text-white font-bold fontPoppins">
        //     <a href="#form" className="inline-block bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-2 my-2 pop_imagehfv">
        //         <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
        //     </a>
        // </div></div>
        <div className='flex justify-center items-center'>
            <Link href="#buynow"
                className='cursor-pointer order-now fontPoppins px-10 py-1 bg-green-700 text-white sm:text-2xl text-[1.2rem] font-semibold rounded hover:bg-gray-600 my-3 flex items-center'>
                BUY NOW
                <img src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg" alt="" className="ml-2" />
                <img
                    src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                    className="ml-2"
                    alt="right_arrow"
                />
            </Link>
        </div>
    )
}

export default OrderBtn