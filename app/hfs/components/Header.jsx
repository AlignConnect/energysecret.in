import React from 'react'
import dayjs from 'dayjs';
import { SlCalender } from 'react-icons/sl';
import { IoEyeSharp } from 'react-icons/io5';
import dynamic from 'next/dynamic';
import { MdManageSearch } from 'react-icons/md';
import { BsMenuUp } from 'react-icons/bs';


const Formdata = dynamic(() => import('./Formdata'), {
    loading: () => <p> Loading</p>
});

const Header = () => {
    return (
        <section className='fontNoto'>


            <div className="bg-[#F7DCB9] flex items-center justify-between px-3 py-4">
                <div className="">
                    <a href="#form"><BsMenuUp size={20} /></a>
                </div>
                <div className="fontPoppins font-black text-[#ff0000] text-[1.2rem] sm:text-2xl bg-black px-6 pt-1 sm:pb-1 rounded-[3px]">
                    <span className='text-[#b7b7b7]'> HORSEFIRE</span> <span className='text-[#fca311]'> TABLET</span>
                </div>
                <div className="">
                    <a href="#form"><MdManageSearch size={25} /></a>
                </div>
            </div>


            <div className=" text-xl sm:text-[1.8rem]  text-center pt-4 pb-2 font-extrabold sm:leading-9 bg-[#E5DDC5]">
                एक ऐसी आयुर्वेदिक दवा जिसने मेरी बोरिंग <br />यौन लाइफ को रोमांचक बना दिया!
            </div>

            <hr />


            <Formdata />

            <img src="/main/ht_images/c1.jpg" alt="" className='w-full' />


            <div className="flex justify-between px-2 items-center p-2 bg-[#E5DDC5]">

                <div className="flex items-center gap-2 ">
                    <img src="/main/ht_images/Vinod.png" alt="" className='sm:w-18 w-12' />
                    <div>
                        <div className="text-md sm:text-xl fontKalnia font-extrabold">
                            Vinod Kumar
                        </div>
                        <div className="font-semibold">
                            उम्र:-29
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='text-sm  fontPoppins flex items-center gap-2'>
                        <IoEyeSharp className='' />
                        17,213 Views
                    </div>
                    <div className='text-sm  fontPoppins flex items-center gap-1 '>
                        <SlCalender className='' />
                        {dayjs().subtract(1, 'day').format("DD MMM YYYY")}
                    </div>
                </div>

            </div>




        </section>
    )
}

export default Header