"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        let checkcolumn = localStorage.getItem('PATH_KEY');

        switch (checkcolumn) {

            case "/":
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
            case "/hfs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFS,
                    key: process.env.NEXT_APP_API_KEY_HFS
                });

            case "/hft":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT,
                    key: process.env.NEXT_APP_API_KEY_HFT
                });


            case "/hf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF,
                    key: process.env.NEXT_APP_API_KEY_HF
                });

            case "/htm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HTM,
                    key: process.env.NEXT_APP_API_KEY_HTM
                });


            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>



            {callDetail.callStatus ? <BottomPopupCall /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;