import { useGlobalContext } from "@/app/statemanage/context";
import './Ama.css';


const AmaFlipDialog = ({ flipcartlink, type }) => {
    const { isPopupOpen, closePopup } = useGlobalContext();


    let checkoutUrl = "https://bit.ly/4b7PKOv"
    let closeurl = "https://bit.ly/3JRMJpK";

    let checkoutUrlAmazon = "https://amzn.to/4dnI1gO"


    if (type == "ts") {
        checkoutUrl = "https://bit.ly/4b7PKOv"
        closeurl = "https://bit.ly/3JRMJpK";

    } else if (type == "propeller") {
        checkoutUrl = "https://bit.ly/4b7PKOv"
        closeurl = "https://bit.ly/3JRMJpK";
    }
    else {
        checkoutUrl = "https://bit.ly/4b7PKOv"
        closeurl = "https://bit.ly/3JRMJpK";
    }


    return (
        <div>

            {isPopupOpen && (
                <div className="overlay overflow-visible !text-black ">
                    <div className="bg-[white] p-2 rounded-xl w-[95%] md:w-[500px] ">


                        <section className="text-end p-3" style={{ fontFamily: "sans-serif" }}>
                            <button className="text-xl !text-black font-extrabold" onClick={() => {
                                closePopup();
                                window.location.href = "https://arayurveda.shop/products/horse-fire-tablets";
                            }}>
                                X
                            </button>


                            <div className='text-center '>

                                <section className="w-full py-2">
                                    <a href={checkoutUrl} style={{ textDecoration: 'none' }}><img src="/checkout_images/flippro.webp" alt="no" className="w-full" /></a>
                                </section>

                                <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                    <div className='w-[3rem] md:w-[5rem]'  >
                                        <img src="/common_images/secure.png" alt="no" className="w-full" />
                                    </div>

                                    <div className='text-md'>
                                        Buy from Trusted Website
                                    </div>


                                </section>





                                <div className='text-lg' >
                                    Flipkart से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={checkoutUrl} style={{ textDecoration: 'none' }}><img src="/common_images/flipkart.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-md my-2' >
                                    Amazon से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={checkoutUrlAmazon} style={{ textDecoration: 'none' }}><img src="/common_images/amazon.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '55%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#ffa800] py-2 my-2 -mx-1 px-1 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                            </div>

                        </section>
                    </div>
                </div>
            )}



        </div>
    )
}

export default AmaFlipDialog;