"use client"
import React, { useEffect } from 'react'
import './components/Home.css'
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Story = dynamic(() => import('./components/Story'), {
    loading: () => <p>loader</p>
});

const SelectProduct = dynamic(() => import("../commonUse/SelectProduct"));

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>Loading</p>
});

const Footer_Home = dynamic(() => import('./components/Footer_home'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'));


const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hdm")
    }, [])


    return (
        <section className="fontPoppins w-full md:max-w-4xl mx-auto bg-white">
            <div>
                <Header />
                <Story />
                {/* <SelectProduct /> */}

                <Form />

                <CustomerReview />

                <Footer_Home />
                <FooterP />
            </div>
        </section>

    )
}

export default page