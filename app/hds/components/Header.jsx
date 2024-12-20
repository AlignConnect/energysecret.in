import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';




const Header = () => {


    const navLinks = [
        {
            name: " Why Horsefire Tablet",
            path: "/why-horsefire"
        },
        {
            name: "Customer Support",
            path: "https://wa.me/9099857272?text=Hi"
        },
    ];


    const [menuOpen, setMenuOpen] = useState(false);

    const handleNev = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <section className="bg-black">

            <div className="flex items-center md:justify-between justify-around py-4 px-1">
                <div className="flex items-center gap-2 ">
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

                <div className="fontPoppins">
                    <div className="hidden sm:block">

                        <div className="text-md flex justify-center items-center gap-6">
                            {navLinks.map((link, index) => {
                                return (
                                    <Link href={link.path} key={index}>
                                        <div className=' text-white hover:text-blue-500' key={index}>{link.name}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div onClick={handleNev} className="md:hidden cursor-pointer pl-16">
                        <AiOutlineMenu size={25} color='white' />
                    </div>
                </div>

                <div className={
                    menuOpen ?
                        "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-white p-5 ease-out duration-500"
                        : "fixed right-[-100%] w-[65%] h-screen top-0 p-10 ease-in duration-700"
                }
                >
                    <div className="flex w-full items-center justify-end py-3">
                        <div onClick={handleNev} className="cursor-pointer text-white">
                            <AiOutlineClose size={22} color='black' />
                        </div>
                    </div>

                    <div className="fontPoppins">
                        <ul className=''>
                            {navLinks.map((link, index) => {
                                return (
                                    <Link onClick={() => setMenuOpen(false)} href={link.path} key={index}>
                                        <li className='text-black hover:text-blue-500 py-3' key={index}>{link.name}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="py-3 mx-2">
                <img src="/main/home_images/header_couple.jpg" alt="" className='w-full md:w-4/6 mx-auto rounded-md ' />
            </div>


        </section>
    )
}

export default Header