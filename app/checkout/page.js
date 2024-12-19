'use client'
import React, { Suspense } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './component/Header';
import CarouselFile from './component/CarouselFile';
import Material from './component/Material';
import FormFile from './component/FormFile';
import Footer from './component/Footer';



const page = () => {


    return (
        <div className='bg-black'>
            <section className='w-full md:w-[500px] mx-auto bg-white'>


                <Suspense fallback={<p>Header Wait</p>}>
                    <Header />
                </Suspense>

                <Suspense fallback={<p>Carousel Wait</p>}>
                    <CarouselFile />
                </Suspense>

                <Suspense fallback={<p>Material Wait</p>}>
                    <Material />
                </Suspense>

                <Suspense fallback={<p>Form Wait</p>}>
                    <FormFile />
                </Suspense>

                <Suspense fallback={<p>Footer Wait</p>}>
                    <Footer />
                </Suspense>




            </section>



        </div>
    )
}

export default page