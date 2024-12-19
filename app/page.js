"use client"
import dynamic from "next/dynamic"
import './MainComponent/Home.css'
import { useEffect } from "react";


const Header = dynamic(() => import('./MainComponent/Header'), {
  loading: () => <p>loader</p>
});


const Content = dynamic(() => import('./MainComponent/Content'), {
  loading: () => <p>loader</p>
});

const Formdata = dynamic(() => import('./MainComponent/Formdata'), {
  loading: () => <p>loader</p>
});

const Second_content = dynamic(() => import('./MainComponent/Second_content'), {
  loading: () => <p>loader</p>
});

const Footer_home = dynamic(() => import('./MainComponent/Footer_home'), {
  loading: () => <p>loader</p>
});


const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
  loading: () => <p>loader</p>
});


const page = () => {


  useEffect(() => {

    localStorage.setItem("PATH_KEY", "/")

  }, [])

  return (

    <section className=" w-full md:max-w-7xl mx-auto">


      <div className="">


        <Header />

        <Content />


        <Formdata />

        <Second_content />

        <Footer_home />

        <FooterP />



      </div>
    </section>
  )
}

export default page