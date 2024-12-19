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

const noto = Noto_Serif_Devanagari({
    subsets: ["devanagari"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // window.location.href = "https://bit.ly/4bV7Inm";
        window.location.href = "https://bit.ly/3yxvxmN";
    };


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hdm")
    }, [])


    return (
        <main className={`${noto.className} bg-black`}>
            <title>Horse Fire Tablet</title>
            <section className="max-w-xl mx-auto  text-black text-[1.1rem] sm:text-xl bg-white">
                <Header />

                <Story />

                <SelectProduct />
                <Last />
                <FormPop />
                <div className="my-5 mx-3">
                    <YoutubeVideo />
                </div>

                <Component />

                {/* <AmaFlip /> */}

                <Footer />

                {!open && <FooterP />}
            </section>
        </main>
    );
}
