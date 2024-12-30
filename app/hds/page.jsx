"use client"
import React, { useEffect } from 'react'
import './components/Home.css'
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Content = dynamic(() => import('./components/Content'), {
    loading: () => <p>loader</p>
});

const SelectProduct = dynamic(() => import("../commonUse/SelectProduct"));

const ContentSecond = dynamic(() => import('./components/Second_content'), {
    loading: () => <p>loader</p>
});

const Footer_Home = dynamic(() => import('./components/Footer_home'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'))


const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hds")
    }, [])


    return (
        <section className="fontPoppins w-full md:max-w-6xl mx-auto ">
            <div>
                <Header />
                <Content />
                {/* <SelectProduct /> */}
                
                    

                <Form />

                <ContentSecond />
                <Footer_Home />
                <FooterP />
            </div>
        </section>

    )
}

export default page