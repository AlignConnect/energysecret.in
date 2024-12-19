"use client";
import { useEffect } from 'react';
import { Noto_Serif_Devanagari } from 'next/font/google';
import "./hfd.css"
import dynamic from 'next/dynamic';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const DynamicSHeader = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});


const DynamicSection1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});


const DynamicSection2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>loader</p>
});


const DynamicSection3 = dynamic(() => import('./components/Section3'), {
    loading: () => <p>loader</p>
});


const DynamicSection4 = dynamic(() => import('./components/Section4'), {
    loading: () => <p>loader</p>
});


const DynamicSection5 = dynamic(() => import('./components/Section5'), {
    loading: () => <p>loader</p>
});


const DynamicSection6 = dynamic(() => import('./components/Section6'), {
    loading: () => <p>loader</p>
});

const DynamicSection7 = dynamic(() => import('./components/Section7'), {
    loading: () => <p>loader</p>
});

const Dynamicbtn = dynamic(() => import('./components/Orderbtn2'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const Caroafter = dynamic(() => import('./PowerComponent/Caroafter'), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfd");
    }, [])


    return (
        <div className={`${noto.className}`}>
            <div className='w-full bg-white text-black  mb-[4rem] sm:mb-0'>

                <DynamicSHeader />

                <DynamicSection1 />

                <div className="bg-hero2hfd bg-cover md:bg-center bg-no-repeat bg-left-bottom " >
                    <DynamicSection2 />
                    <Dynamicbtn />
                </div>

                <div className="bg-gray-100">
                    <DynamicSection3 />
                    <Dynamicbtn />
                </div>

                <DynamicSection4 />

                <DynamicSection5 />
                <Dynamicbtn />
                <DynamicSection4 />

                <DynamicSection6 />
                <Dynamicbtn />
                <DynamicSection4 />

                <DynamicSection7 />
                <Caroafter />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />
            </div>



        </div>

    )
}
export default page;