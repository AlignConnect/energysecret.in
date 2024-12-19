"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p> Loading</p>
});

const Story = dynamic(() => import('./components/Story'), {
    loading: () => <p> Loading</p>
});


const Hurbs = dynamic(() => import('./components/Hurbs'), {
    loading: () => <p> Loading</p>
});


const HFT_Use = dynamic(() => import('./components/HFT_Use'), {
    loading: () => <p> Loading</p>
});

const Formdata = dynamic(() => import('./components/Formdata'), {
    loading: () => <p> Loading</p>
});

const CustomerReviewData = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p> Loading</p>
});


const CustomFooter_HT = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfs")

    }, [])

    return (
        <div>
            <section className='w-full max-w-3xl mx-auto bg-[#eeece1]'>


                <Header />

                <Story />

                <Hurbs />

                <HFT_Use />

                <Formdata />

                <CustomerReviewData />

                <CustomFooter_HT />

                <FooterP />

            </section>
        </div>
    )
}

export default page