"use client"
import React from 'react'
import './components/Home.css'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Story = dynamic(() => import('./components/Story'), {
    loading: () => <p>Story Loading</p>
});


const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>Loading</p>
});



const FormData = dynamic(() => import('./components/FormData'), {
    loading: () => <p>Loading</p>
});


const CustomFooterHTB = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});



const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/htm")

    }, [])

    return (
        <div className='w-full md:max-w-4xl mx-auto bg-gray-100'>

            <Header />

            <Story />

            <FormData />

            <CustomerReview />

            <CustomFooterHTB />

            <FooterP />
        </div>
    )
}

export default page