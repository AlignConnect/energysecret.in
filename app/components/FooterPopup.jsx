import { useGlobalContext } from '@/app/statemanage/context';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const BottomPopupCall = dynamic(() => import('../commonUse/bottompopup/bottomPopupCall'), {
    loading: () => <p>load</p>
});

const BottomPopupForm = dynamic(() => import('../commonUse/bottompopup/bottomPopupForm'), {
    loading: () => <p>load</p>
});

const FooterPopup = () => {


    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();

    useEffect(() => {

        GetCallSetting(process.env.NEXT_APP_API_KEY);
        FetchWebCheckout(process.env.NEXT_APP_API_KEY, process.env.NEXT_APP_URL);


    }, []);

    return (
        <section>
            <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white h-[80px]`}>
                {callDetail.callStatus ? <BottomPopupCall /> :
                    <BottomPopupForm />}
            </div>
        </section>
    )
}

export default FooterPopup;