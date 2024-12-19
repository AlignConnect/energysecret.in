import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const ShiProcket = () => {

    const searchParams = useSearchParams();
    const productInfo = useSelector((state) => state.productslice);


    // console.log("productInfo,productInfo", productInfo)

    const [tagsall, settagsall] = useState("");
    // console.log("tagsall: ", tagsall);

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [loading, setLoading] = useState(false);
    // const pathnameurl = ["brf"];
    // const googlepathnameurl = ["brcgg"];

    useEffect(() => {
        const v = localStorage.getItem("PATH_KEY");
        settagsall((vx) => (v ? v : vx));
    }, [productInfo]);


    const handleShiProcket = async () => {
        const quantity = productInfo?.quantity;
        const selectProducts = productInfo?.selectProducts;

        const products = [
            {
                variantId: selectProducts.id,
                quantity: quantity,
            },
        ];
        const checkoutData = {
            key: "value",
            type: "product",
            products,
            couponCode: "",
            utmParams: "utm_medium=123&utm_source=456",
            cartAttributes: {
                tag: "energysecret.in" + tagsall,
            },
        };

        setLoading(true);

        if (typeof shiprocketCheckoutEvents !== "undefined") {
            try {
                const orderResponse = await shiprocketCheckoutEvents.buyDirect(
                    checkoutData
                );
            } catch (error) {
                console.error("Error placing order:", error);
            } finally {
                setLoading(false);
            }
        } else {

            setLoading(false);
        }
    };

    const handleConfirmPlaceOrder = async () => {
        // console.log("Confirm & place order clicked!");

        if (window.conversion_code) {
            // console.log('window.conversion_code: ', window.conversion_code);
            window.gtag("event", "conversion", {
                send_to: window.conversion_code,
                event_callback: () => {
                    localStorage.setItem("window.conversion_codess", window.conversion_code)
                    return;
                },
            });
        }

        let trackingUrl = "";

        const exo = searchParams.get("krttracker");
        const ts = searchParams.get("krt");

        //this is new addition adskeeper

        const adsKeeper = searchParams.get("hfttrack");

        const mgid_ad = searchParams.get("hftmgidtrack");



        if (exo) {
            trackingUrl = `https://syndication.exoclick.com/tag.php?goal=a2231a2d9c3dcd76353a3cb3b061c605&tag=${exo}`;
        } else if (ts) {
            trackingUrl = `https://tsyndicate.com/api/v1/cpa/action?key=DhyxVYbxfoMwi9M6ze0UOsAckPHpuPWYWjmH&clickid=${ts}`;
        } else if (adsKeeper) {
            trackingUrl = `https://a.adskeeper.co.uk/postback?c=${adsKeeper}&e=hfts&r={payout}`
            // https://a.adskeeper.co.uk/postback?c=c2FuZGJveF8yMTY5NDEzOV8xNzMzOTk5MzA0X3NhbmRib3g1&e=horsefire123&r={payout}
        }
        else if (mgid_ad) {
            trackingUrl = `https://a.mgid.com/postback?c=${mgid_ad}&e=dev111&r={payout}`
        }
        // console.log("trackingUrl: ", trackingUrl);

        try {
            await fetch(trackingUrl, {
                method: "GET",
                mode: "no-cors",
            });
            // console.log("succcesssssssssssssssssss");
        } catch (error) {
            console.error("Tracking error:", error);
        }
    };

    useEffect(() => {
        // console.log(window.location.pathname.replace(/\//g, ""));
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === "childList") {
                    const addedNodes = mutation.addedNodes;

                    addedNodes.forEach((node) => {
                        if (
                            node.nodeType === 1 &&
                            node.tagName === "FORM" &&
                            node.method.toLowerCase() === "post"
                        ) {
                            // console.log("node.nodeType: ", node.nodeType);
                            // console.log("node.tagName: ", node.tagName);
                            // console.log("node.method: ", node.method);
                            handleConfirmPlaceOrder();

                            // if (
                            //   pathnameurl.includes(
                            //     window.location.pathname.replace(/\//g, "")
                            //   )
                            // ) {
                            //   router.push('/thank-you');
                            // }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>

            <button
                className="relative w-[13rem] sm:w-[20rem] shoporder  shiprocketbutton "
                onClick={handleShiProcket}
            >
                <div className="relative">
                    <div className="bg-green-700 text-white text-2xl font-semibold py-2 my-4 w-full rounded-xl">
                        <div className="flex items-center align-middle justify-center">
                            BUY NOW&nbsp;
                            <img
                                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg"
                                alt="Google Pay | Phone Pay | UPI"
                                className=""
                            />
                            &nbsp;
                            <img
                                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                                className=""
                                alt="right_arrow"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/powered_by.svg "
                    alt="pic"
                    className="absolute bottom-[1.3rem]  w-24 right-3 sm:w-28"
                />
            </button>
        </>
    );
};

export default ShiProcket;
