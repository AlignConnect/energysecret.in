"use client"
import React, { useEffect } from 'react'
import './components/Home.css'
import dynamic from 'next/dynamic';



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Content = dynamic(() => import('./components/Content'), {
    loading: () => <p> Loading</p>
});


const Hurbs = dynamic(() => import('./components/Hurbs'), {
    loading: () => <p> Loading</p>
});


const Form = dynamic(() => import('./components/Formdata'), {
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

        localStorage.setItem("PATH_KEY", "/hf")

    }, [])

    return (
        <div>

            <div className="w-full md:max-w-4xl mx-auto bg-[white]">

                <Header />

                <Content />

                <Hurbs />

                <Form />

                <CustomerReviewData />

                <CustomFooter_HT />

                <FooterP />

            </div>

        </div>
    )
}

export default page