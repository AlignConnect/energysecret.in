"use client"
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useState } from "react";
import YoutubeVideo from "@/app/commonUse/Youtubefile/YoutubeVideo";
import './hds.css'
import { useEffect } from "react";

const FormPop = dynamic(() => import("./components/FormPop"), {
    loading: () => <p>df</p>,
});

const AmaFlip = dynamic(() => import("./components/AmaFlip"), {
    loading: () => <p>df</p>,
});
const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header Loading</p>,
});

const Story = dynamic(() => import("./components/Story"), {
    loading: () => <p>Header Loading</p>,
});

const Sec2cp = dynamic(() => import("./components/Sec2cp"), {
    loading: () => <p>Header Loading</p>,
});

const Last = dynamic(() => import("./components/Last"));
const Component = dynamic(() => import("./components/Component"));
const SelectProduct = dynamic(() => import("@/app/commonUse/SelectProduct"));

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>,
});

const FooterP = dynamic(
    () => import("@/app/commonUse/bottompopup/BottomHandler"),
    {
        loading: () => <p>loader</p>,
    }
);


export default function Home() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hds")
    }, [])


    return (
        <main  className="bg-black fontNoto">
            <title>Horse Fire Tablet</title>
            <section className="max-w-xl mx-auto  text-black text-[1.1rem] sm:text-xl bg-white fontNoto">
                <Header />

                <Story />

                <Sec2cp />

                {/* <SelectProduct /> */}
                {/* <Last />
                <FormPop />
                <div className="my-5 mx-3">
                    <YoutubeVideo />
                </div> */}

                {/* <Component /> */}

                {/* <AmaFlip /> */}

                <Footer />

                <FooterP />
            </section>
        </main>
    );
}
