import React, { Suspense, lazy, useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomeBrb.css'
import { CiDeliveryTruck, CiDiscount1 } from 'react-icons/ci';
import axios from 'axios';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag } from "react-icons/tb";
import AmaFlipDialog from '../Component/AmaFlipDialog.jsx';
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from '@mui/icons-material';



export default function HomeBrb() {


    const Fliplink = lazy(() => import('./FlipAmazon.jsx'));


    const [WINN, setWINN] = useState(window.innerWidth);
    const [ara, setara] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWINN(window.innerWidth);
        })
    }, [WINN]);




    const [err, seterr] = useState("");
    const [Loading, setLoading] = useState(false);

    // const [data, setdata] = useState({});
    // const [isonline, setisonline] = useState(true);
    // const [validationErr, setvalidationErr] = useState("");
    // const { enqueueSnackbar: showSnackbar } = useSnackbar();
    // const [AllProducts, setAllProducts] = useState([]);

    //-----------------------new-inquiry-data--------------------//

    const [inquiry, setinquiry] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const [openAds, setOpenAds] = useState(false);

    const handleClickOpenAds = () => {
        setOpenAds(true);
    };
    const handleCloseAds = () => {
        window.location.href = "https://flipkart.la/3RAMfYv"
        setOpenAds(false);
    };
    const [sc, setsc] = useState(0);

    window.onscroll = () => {
        setsc(window.scrollY);
    }

    const postOnInquiry = async () => {

        if (inquiry.name === "" || inquiry.name === "undefined" || !inquiry.name.length > 0) {
            return seterr("Requiered Name Is Empty")
        }
        seterr()
        if (inquiry.phone === "" || inquiry.phone === "undefined") {
            return seterr("Requiered Phone Number is Empty")
        }
        seterr()
        if (`${Number(inquiry.phone)}` === "NaN" || inquiry.phone.length !== 10) {
            return seterr("Phone Number Is Invalid")
        }
        seterr()
        if (inquiry.phone[0] !== "6" && inquiry.phone[0] !== "7" && inquiry.phone[0] !== "8" && inquiry.phone[0] !== "9") {
            return seterr("Please Enter Valid Phone Number")
        }
        seterr()

        let check = await axios.get('https://api.ipify.org?format=json').then(response => {
            return response.data.ip
        }).catch(error => console.log(error))

        const formdata = new FormData();

        formdata.append("name", inquiry.name);
        formdata.append("phone", inquiry.phone);
        formdata.append("address", inquiry.address);
        formdata.append("blog_url", "energysecret.in")
        formdata.append("post", 'energysecret.in')
        formdata.append("ip", check)
        try {
            setLoading(true);
            const form = await fetch(`https://energysecret.in/submitdata.php`, { body: formdata, method: "POST" })
            const data = await form.json()
            console.log('data: ', data);
            window.scrollTo(0, 0)
            if (data.ok) {
                let destination = decodeURI(data.destination);
                let name = destination.split("?name=")[1].split("&")[0];
                let phone = destination.split("&phone=")[1].split("&")[0];

                return window.location.href = `/thankyou?name=${name}&phone=${phone}`;
                // return window.location.href = `/thankyou`;
                // return handleClickOpenAds();
            }
            window.location.href = "/thankyou";
            // return handleClickOpenAds();


        } catch (error) {
            window.location.href = "/thankyou";
            // return handleClickOpenAds();
        }

    }

    // function gtag_report_conversion(url) {
    //   var callback = function () {
    //     if (typeof (url) != 'undefined') {
    //       Location(url);
    //     }
    //   };
    //   window.gtag('event', 'conversion', {
    //     'send_to': window.conversion_code,
    //     'event_callback': callback
    //   });
    //   return false;
    // }






    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

    const Url = window.location.origin;
    // console.log(Url);


    // const FetchProduct = async () => {
    //     try {
    //         setLoading(true)
    //         const result = await axios.get(`${import.meta.env.VITE_APP_API_URL}product/fetch_with_api_key?api_key=${import.meta.env.VITE_APP_API_KEY}`, { headers: { "web_site_url": import.meta.env.VITE_APP_URL } })
    //         if (result.status === 200) {

    //             setLoading(false)
    //             document.title = result.data.product[0].name
    //             setAllProducts(result.data.product)

    //             return setdata(result.data ? result.data.product ? result.data.product.length > 0 ? { ...result.data.product[0], img: Url + "/images/product2.png" } : {} : {} : {})

    //         }
    //         setLoading(false)
    //         showSnackbar("Failed to Fetch Reviews", { variant: "error" })
    //     } catch (err) {
    //         setLoading(false)
    //         return showSnackbar(err.response && err.response.data ? err.response.data.message : err.message, { variant: "error" })
    //     }
    // }



    // useEffect(() => {
    //     FetchProduct()

    //     // eslint-disable-next-line
    // }, []);




    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
        // eslint-disable-next-line
    }, [WindowWidth]);



    // let [view, setview] = useState(21547);
    // const [random, setrandom] = useState(0);

    // let rendome = Math.floor(Math.random() * 10)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setrandom(rendome);
    //         // eslint-disable-next-line
    //         setview(view += random);

    //     }, 1500);

    // },)
    const [seconds, setseconds] = useState(59)
    const [minuts, setminuts] = useState(59)
    const [hour, sethour] = useState(0)


    setTimeout(() => {
        setseconds(seconds - 1)
        if (seconds === 0) {
            setminuts(minuts - 1)
            setseconds(59)
        } if (minuts === 0) {
            sethour(hour + 1)
            setminuts(59)
            setseconds(59)
        }
    }, 1000);





    return (
        <div className='w-100'>

            {/* <AmaFlipDialog openAds={openAds} setOpenAds={setOpenAds} handleCloseAds={handleCloseAds} /> */}


            <div className={`${WINN > 1024 ? "" : ""}`} style={{ background: "rgb(14, 7, 3)", position: "absolute", width: "100%", zIndex: "1000000" }}>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-main" style={{ width: WINN > 1024 ? "65%" : "100%", margin: "auto" }}>
                    <div className="d-flex justify-content-between align-items-center ">

                        <div className='d-flex gap-2 justify-content-between align-items-center'>
                            <img src="/images/logo1.png" alt="dsf" style={{ width: '77px', height: '77px', borderRadius: '50%' }} loading='lazy' />
                            <div>
                                <p className='mb-0  text-center align-items-center fw-bold pop_fonts' style={{ color: "rgb(255,177,0)", width: WindowWidth > 768 ? "100%" : "100%" }}>Horse Fire Tablet&nbsp;<img src="/images/verify.svg" alt="dfg" style={{ width: '23px', height: '22px' }} loading='lazy' /></p>
                                <small className='text-light w-100'> <div className='d-flex'> <div className='text-light' style={{ fontFamily: "sans-serif", fontSize: "0.6rem" }}>THE GOOD MEN SECRET</div></div>
                                </small>

                            </div>
                        </div>

                    </div>

                    <div className='d-flex justify-content-end ms-auto'>
                        <div className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <FaBars className='fs-1 text-light' onClick={() => setara(!ara)} />
                        </div>
                    </div>
                    {/* {

                        WINN < 668 ?
                            <a href="#form">
                                <img src="/images/inq.gif" style={{ position: "absolute", top: "84px", left: "240px" }} alt="nofj" width="31%" loading='lazy' /> 
                            </a>
                            : ""

                    } */}

                    <div className={`collapse navbar-collapse justify-content-end ${ara ? "show" : ""}`} >
                        <div className="navbar-nav pop_fonts">
                            <Link className={WINN > 991 ? "nav-link" : "nav-link1"} aria-current="page" to="/whyhorseFire" onClick={() => {

                                setara(false);

                            }}>Why Horse Fire Tablet</Link>
                            <a className={WINN > 991 ? "nav-link" : "nav-link1"} href="https://wa.me/9099857272?text=Hi" onClick={() => {
                                setara(false);



                            }}>Customer Support</a>
                            {/* <a className={WINN > 991 ? "nav-link" : "nav-link1"} href="#">Pricing</a> */}
                            {/* <a className={WINN > 991 ? "nav-link" : "nav-link1"}>Disabled</a> */}
                        </div>
                    </div>
                </nav>


                <div className='container'>
                    <div className='mt-4 mt-md-5 mb-0 pb-3 mb-md-3 text-center'>
                        <img src="/images/shurya1.jpg" alt="dsf" style={{ width: WindowWidth > 768 ? "60%" : "100%" }} loading='lazy' />
                    </div>
                </div>


                {/* 
                <div className={`${WindowWidth > 768 ? "container" : ""} py-2`} style={{ background: "rgb(14,7,3)" }} >
                    <div className=''>
                        <div className='d-flex m-auto gap-1 justify-content-center align-items-center py-4' style={{ width: WindowWidth > 768 ? "60%" : "100%" }} >
                            {

                                AllProducts ? AllProducts.length > 0 ?
                                    AllProducts.map((e, key) => {

                                        return <label className={`text-center ${data.id === e.id ? "buy" : "cv"}`} htmlFor={e.id} style={{ borderRadius: "13px", width: "47%", cursor: "pointer" }} key={key}>
                                            <Radio hidden
                                                onChange={(x) => {

                                                    let price = data.price;

                                                    setdata({ ...e, img: key === 0 ? Url + '/media/checkout/product2.png' : Url + '/media/checkout/product1.png', discount: isonline ? e.discount : 0 });
                                                }}
                                                checked={data.id === e.id}
                                                id={`${e.id}`}
                                            />


                                            <div>
                                                <div className='w-100 px-1 pt-4 pt-md-4 pb-2 ' >
                                                    <img src={AllProducts ? key === 0 ? "/images/product2.png" : "/images/product1.png" : ""} alt="sdf" className={WindowWidth > 768 ? "w-75" : "w-100"} loading='lazy' />
                                                </div>
                                                <div className='fs-5'>{e.title}</div>
                                                <div className='fs-6'>{e.short_content}</div>
                                                <div className="savePrice">Save Rs.{e.reguler_price - e.price}/-</div>
                                                <div className='fw-bold pt-3 pt-md-2' style={{ fontSize: WindowWidth > 768 ? "1.4rem" : "1.2rem" }}>Rs. <span>{e.price}</span></div>
                                                <h1 className='pb-2' style={{ fontSize: WindowWidth > 768 ? "1rem" : "1rem" }}><span style={{ textDecoration: "line-through", color: "red" }}>Rs. {e.reguler_price}</span></h1>
                                            </div>
                                        </label>
                                    })
                                    : "" : ""
                            }
                        </div>
                    </div>


                    <div className={`m-auto ${WindowWidth > 768 ? "w-50" : "w-100"}`}>
                        <div className='d-flex justify-content-center align-items-center'>
                        </div>
                    </div>

                </div> */}


                <section className='text-white m-3'>

                    <div className='mx-auto' style={{ width: WindowWidth > 900 ? "60%" : "100%" }}>
                        <h1> Horse Fire Tablet क्यों?</h1>

                        <p className='devb'>
                            Horse Fire एक श्रेष्ठ पुरुष-शक्ति वर्धक उत्पाद है जिसे आयुर्वेद की प्रीमियम क्वालिटी और शक्तिशाली जड़ीबूटियों के अनोखे मिश्रण से बनाया गया है। इसमें शिलाजीत, अश्वगंधा और गोक्षुरा जैसे श्रेष्ठ टेस्टोस्टेरोन बूस्टर हर्ब्स समाहित है।
                        </p>

                        <p className='devb'>
                            13 बेशकीमती जड़ीबूटियों से बना Horse Fire Tablet पुरुष कमजोरी मिटाकर, स्टैमिना, जोश और उत्तेजना बढ़ाने में मदद करता है। पुरुष क्षमता बढाकर महिला पार्टनर को संतुष्टि देने एवं कपल के बीच प्यार बढाकर वैवाहिक जीवन को खुशहाल बनाने में मदद करता है।</p>
                    </div>

                </section>


                <div style={{ width: WindowWidth > 768 ? "60%" : "100%" }} className='mx-auto py-3'>
                    <Suspense fallback={<p>loading</p>}>
                        <Fliplink />
                    </Suspense>
                </div>


                <section className='px-3 py-2 container row mx-auto bg-white rounded-3 align-items-center' style={{ width: WindowWidth > 1000 ? "900px" : "100%" }}>



                    <div className='col-12 col-sm-6 d-block d-sm-none'>
                        <img src='/images/stars.webp' className='w-100' />
                    </div>

                    <div className='col-12 col-sm-6 d-none d-sm-block'>
                        <img src='/images/str.webp' className='w-100' />
                    </div>



                    <div className='col-12 col-sm-6'>

                        <h3 className='fs-1 devb fw-bold'> <span style={{ color: "#c56f00 " }}>Horse Fire</span> के फायदे</h3>
                        <ul className='fs-5'>
                            <li className='devb fs-4'>टेस्टोस्टेरोन हॉर्मोन बढाए</li>
                            <li className='devb fs-4'>अंग-अंग में रक्त संचार बेहतर करे</li>
                            <li className='devb fs-4'>एनर्जी, स्टैमिना और जोश में बृद्धि करे</li>
                            <li className='devb fs-4'>अवधि और कड़कपन में बृद्धि करे</li>
                            <li className='devb fs-4'>जोरदार प्रदर्शन से, पार्टनर को संतुष्ट करें</li>
                        </ul>


                    </div>


                </section>

                {/* <div className='pt-1 text-center align-items-center row m-auto'>
                    <div className='col-12 text-center p-0'>
                        <a href='https://flipkart.la/4853Bnr'><img src="/images/flip_amz_d.gif" alt="dsfsdf" style={{ width: WindowWidth > 768 ? "20%" : "100%" }} loading='lazy' /></a>
                    </div>
                </div> */}

                {/* <div className='text-center mt-md-3 mb-md-5'>
                    <img src="/images/partners.png" alt="" className='' style={{ width: WindowWidth > 768 ? "20%" : "90%" }} />
                </div> */}
                <div className="help_full mt-md-4 mb-md-5">
                    <div className="help_full_container" style={{ color: "white" }}>

                        {WindowWidth > 768 ?
                            <div className="help_full_th" >
                                <div className="help_full_content">
                                    <CiDeliveryTruck className='help_full_icon' />
                                    <div className="">
                                        <h6 className="">FREE SHIPPING</h6>
                                        <p className="">Shipping on all prepaid orders</p>
                                    </div>
                                </div>

                                <div className="help_full_content">
                                    <GiTakeMyMoney className='help_full_icon' />
                                    <div className="">
                                        <h6 className="">COD Available</h6>
                                        <p className="">Pay after recieving your pack</p>
                                    </div>
                                </div>
                                <div className="help_full_content">
                                    <TbMoneybag className='help_full_icon' />
                                    <div className="">
                                        <h6 className="">Money Back Guarantee</h6>
                                        <p className="">10 days money back guarantee</p>
                                    </div>
                                </div>
                                <div className="help_full_content">
                                    <CiDiscount1 className='help_full_icon' />
                                    <div className="">
                                        <h6 className="">Prepaid Offer</h6>
                                        <p className="">Save extra 10% on prepaid orders</p>
                                    </div>
                                </div>
                            </div> :
                            <table className='help_full_table'>
                                <tr>
                                    <th>
                                        <div className="help_full_content" >
                                            <CiDeliveryTruck className='help_full_icon' />
                                            <div className="help_full_content_1">
                                                <h6 className="" style={{ fontSize: WindowWidth > 768 ? '2rem' : '1.5rem' }}>FREE SHIPPING</h6>
                                                <p className="" style={{ width: '' }}>Shipping on all prepaid orders</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th style={{ border: 'none', }}>
                                        <div className="help_full_content">
                                            <GiTakeMyMoney className='help_full_icon' />
                                            <div className="">
                                                <h6 className="">COD Available</h6>
                                                <p className="">Pay after recieving your pack</p>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr style={{ border: 'none' }}>
                                    <th>
                                        <div className="help_full_content">
                                            <TbMoneybag className='help_full_icon' />
                                            <div className="">
                                                <h6 className="">Money Back Guarantee</h6>
                                                <p className="">10 days money back guarantee</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="help_full_content">
                                            <CiDiscount1 className='help_full_icon' />
                                            <div className="">
                                                <h6 className="">Prepaid Offer</h6>
                                                <p className="">Save extra 10% on prepaid orders</p>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </table>}
                    </div>
                </div>


                <div style={{ width: WindowWidth > 768 ? "60%" : "100%" }} className='mx-auto py-3'>
                    <Suspense fallback={<p>loading</p>}>
                        <Fliplink />
                    </Suspense>
                </div>

                <div className="formComponent" id="form">
                    <div className="formContainer">
                        <form className='mainForm' >
                            <div className='d_mainForm'>
                                <div className='head_mainForm fs-4 fw-bold text-center text-white' >
                                    {/* <h4 className='' style={{ fontSize: WindowWidth > 768 ? '1.5rem' : '1.5rem' }}>Contact us and Get More Information About</h4>
                                    <p className="" style={{ fontSize: WindowWidth > 768 ? '1.8rem' : '1.5rem' }}  ><span style={{ color: "#dbae00" }}>"Horse Fire Tablet"</span></p> */}

                                    कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !

                                </div>
                                <div className="">
                                    <div className='inputfield'>
                                        <input type="text" value={inquiry.name} id='name'
                                            onChange={(e) => {
                                                setinquiry({ ...inquiry, name: e.target.value })
                                            }} placeholder='Name' className=' formManager11' style={{ border: "1px solid white", outline: "none", background: "inherit", color: 'white', }} />
                                        <div className='text-danger py-1'>
                                            {
                                                err ? err.includes("Name") ? err : "" : ""
                                            }
                                        </div>
                                    </div>

                                    <div className="inputfield" style={{ position: "relative" }}>
                                        <div style={{ position: "relative", bottom: "-2rem", left: "0.2rem", width: "2rem" }}>
                                            <span style={{ padding: "0.2rem 1rem 0.2rem 0.8rem", borderRight: "1px solid white", background: "inherit", color: 'white' }}>+91</span>
                                        </div>
                                        <input type="text" maxLength="10" id='phone'
                                            value={inquiry.phone}
                                            onChange={(e) => {
                                                setinquiry({ ...inquiry, phone: e.target.value })
                                            }}
                                            placeholder='Phone Number' className='formManager11' style={{ paddingLeft: "4.2rem", border: "1px solid white", outline: "none", background: "inherit", color: 'white' }} />
                                        <div className='text-danger py-1'>
                                            {
                                                err ? err.includes("Phone") ? err : "" : ""
                                            }
                                        </div>
                                    </div>
                                    {/* <div className={`inputfield`} style={{ margin: '2rem auto' }} >
                                        <input type="text" value={inquiry.address} onChange={
                                            (e) => {
                                                setinquiry({ ...inquiry, address: e.target.value });
                                            }
                                        } id='address' placeholder='Address' className=' formManager11' style={{ border: "1px solid white", outline: "none", background: "inherit", color: 'white', }} />
                                        <div className='text-danger py-1'>
                                            {
                                                err ? err.includes("Address") ? err : "" : ""
                                            }
                                        </div>
                                    </div> */}
                                    <div style={{ margin: WindowWidth > 768 ? '3rem 0rem' : '2rem 0rem ' }}>
                                        <center>
                                            <button type='button' onClick={postOnInquiry} className='form_button' style={{ outline: "none", background: "#dbae00", border: 'none', borderRadius: '50px' }}>
                                                Submit
                                            </button>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className='' style={{ background: "white" }}>

                    <section className={`m-auto container pt-2 pt-md-4 ${WindowWidth > 768 ? "w-75" : "w-100"}`} >
                        <div className="row m-0 p-0 align-items-center gy-3 d-flex justify-content-center">
                            <div className="text-center col-12 col-md-2 px-2">
                                <div className="text-center text-md-end">
                                    <div className="pt-2 pb-0">
                                        <h5 className="">As seen in:</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center col-6 col-md-2 px-2">
                                <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                                    <a href="https://www.aninews.in/news/business/business/healthy-foods-for-erectile-dysfunction-and-diet-guide20221014122830/" target="_blank">
                                        <img src="/images/Ani.jpg" className="" alt="Ani" style={{ width: WindowWidth > 768 ? "70%" : "90%" }} loading='lazy' />
                                    </a>

                                </div>
                            </div>
                            <div className="text-center col-6 col-md-2 px-2">
                                <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                                    <a href="https://news.webindia123.com/news/articles/Business/20221014/3993082.html" target="_blank">
                                        <img src="/images/webindia123.jpg" className="" alt="webindia123" style={{ width: WindowWidth > 768 ? "70%" : "90%" }} loading='lazy' />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center col-6 col-md-2 px-2">
                                <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                                    <a href="https://www.mid-day.com/brand-media/article/why-hammer-of-thor-ayurvedic-medicine-demand-increases-23255059" target="_blank">
                                        <img src="/images/mid-day.jpg" className="" alt="mid-day" style={{ width: WindowWidth > 768 ? "70%" : "90%" }} loading='lazy' />
                                    </a>
                                </div>
                            </div>


                            <div className="text-center col-6 col-md-2 px-2">
                                <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                                    <a href="https://up18news.com/exercises-to-increase-your-stamina-in-bed-why-people-use-hammer-of-thor/" target="_blank">
                                        <img src="/images/up18news.png" className="" alt="up18news" style={{ width: WindowWidth > 768 ? "70%" : "90%" }} loading='lazy' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section >


                    <div className='mt-4 mt-md-5 mb-0 pb-3 mb-md-3 text-center'>

                        <iframe style={{ borderStyle: "dashed", borderColor: "#B0AA96", width: WindowWidth > 768 ? "45%" : "100%", height: WindowWidth > 768 ? '400px' : '200px' }} src="https://www.youtube.com/embed/JbWLIriN0cQ?si=dTgXOGBAJKxxbjUA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>




                    <div style={{ width: WindowWidth > 768 ? "60%" : "100%" }} className='mx-auto py-3'>
                        <Suspense fallback={<p>loading</p>}>
                            <Fliplink />
                        </Suspense>
                    </div>

                    <div className='text-center container' style={{ width: WindowWidth > 768 ? "45%" : "100%" }}>
                        <h5 className='pb-2' style={{ fontSize: WindowWidth > 768 ? "1.3rem" : "1rem" }}>Why more than 100000+ satisfied<br />
                            customers just ❤️ the Horse Fire Tablet</h5>
                        <div className='row m-0 p-0 align-items-center gy-3 d-flex justify-content-center'>
                            <div className='text-center col-md-6 col-12' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/1.png" alt="df" className='' style={{ width: "100%" }} loading='lazy' />
                            </div>
                            <div className='text-center col-md-6 col-12 ' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/2.png" alt="sdf" className='' style={{ width: "100%" }} loading='lazy' />
                            </div>
                            <div className='text-center col-md-6 col-12' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/3.png" alt="sdf" className='' style={{ width: "100%" }} loading='lazy' />
                            </div>
                            {/* <div className='text-center col-md-6 col-12' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/4.png" alt="" className='' style={{ width: "100%" }}  loading='lazy'/>
                            </div> */}
                            <div className='text-center col-md-6 col-12' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/5.png" alt="dfsa" className='' style={{ width: "100%" }} loading='lazy' />
                            </div>
                            <div className='text-center col-md-6 col-12' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/6.png" alt="dsfad" className='' style={{ width: "100%" }} loading='lazy' />
                            </div>
                        </div>

                        <div className='mt-4' style={{ background: "black", borderRadius: "30px" }}>
                            <div className='row p-0 m-0 align-items-center'>
                                <div className='col-md-4 col-12 mt-3 mb-3 text-center'>
                                    <img src="/images/customers2x.png" alt="" className='ad' style={{ width: WindowWidth > 768 ? "60%" : "50%" }} loading='lazy' />
                                </div>
                                <div className='col-md-8 col-12 text-start'>
                                    <div className='text-center px-1' style={{ color: "gray", fontSize: WindowWidth > 768 ? "0.8rem" : "1rem" }}>Niraj Patel, Rohan Yadav and <span className='text-light'>1022 others</span><br />  already Reviewed Horse Fire Tablet, <span className='text-light'>read their stores</span> </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-5'>

                        </div>
                    </div>


                    {/* <div className='pt-1 pb-3 text-center align-items-center row m-auto'>
                        <div className='col-12 text-center p-0'>
                            <a href='https://flipkart.la/4853Bnr'><img src="/images/flip_amz.gif" alt="dasfd" className='pb-3' style={{ width: WindowWidth > 768 ? "20%" : "100%" }} loading='lazy' /></a>
                        </div>
                    </div> */}


                </div >

                <div>
                    {/* <center className="pt-3" >

                        <div className='text-light'>
                            <h3 className='py-3 mt-4 border-bottom border-top'>Customer Speaks</h3>

                        </div>

                        {
                            WindowWidth > 768 ? (
                                <>
                                    <iframe className='mb-2' width="50%" height="400px" src="https://www.youtube.com/embed/Kyh3vgxIJzk?si=nbQxJ5KykD4DWsG_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <br />
                                    <iframe className='mb-2' width="50%" height="400px" src="https://www.youtube.com/embed/53sQmTwVi04?si=Y_IL_owaAIffdNlz" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <br />

                                    <div className='text-center'>
                                        <a className='w-100 m-auto' href='#form' >
                                            <img src="/images/inq.gif" alt="" style={{ width: WindowWidth > 768 ? "15%" : "" }} />
                                        </a>
                                    </div>



                                </>
                            ) : (
                                <>
                                    <iframe className='mb-2' width="100%" height="200px" src="https://www.youtube.com/embed/Kyh3vgxIJzk?si=nbQxJ5KykD4DWsG_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <br />
                                    <iframe className='mb-2' width="100%" height="200px" src="https://www.youtube.com/embed/53sQmTwVi04?si=Y_IL_owaAIffdNlz" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                                </>
                            )
                        }




                        <div className='text-light'>
                            <h3 className='px-5 py-3 mt-4 d-inline-flex '>Customer Review</h3>
                            <div className='border-bottom border-2 mb-2'></div>
                        </div>

                        <div>
                            {
                                Reviews ? Reviews.length > 0 ?

                                    Reviews.map((e, key) => {

                                        return <div key={key}>
                                            <div className='d-flex justify-content-center addjustWidth align-items-center my-3'>
                                                <div className=''>
                                                    <img src={e.profile_photo} alt="" className='img-w' style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div>
                                                    <div className='ms-2 d-flex align-items-center'>
                                                        <p className='text-light fw-bold fs-5 mb-0 me-2'>{e.customer_name}</p>
                                                        <img src="/images/verify.svg" alt="" width="23rem" />
                                                    </div>
                                                    <div>
                                                        <div className='text-light'>  {moment(e.created_at).format("DD MMM YYYY")}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border-bottom border-bottom-3 pb-4 px-2 text-light'>{e.comment}</div>
                                        </div>
                                    })
                                    : "" : ""
                            }
                        </div>
                    </center> */}

                </div>
                <footer style={{ background: "#000000", width: "100%" }} className="pb-4">


                    <div className='d-flex gap-2 justify-content-center align-items-center mb-2 mt-4'>
                        <img src="/images/logo1.png" alt="" style={{ width: '77px', height: '77px', borderRadius: '50%' }} loading='lazy' />
                        <div>
                            <p className='mb-0  text-center align-items-center fw-bold fs-5 ' style={{ color: "rgb(255,177,0)", fontFamily: "sans-serif" }}>Horse Fire Tablet&nbsp;<img src="/images/verify.svg" alt="" style={{ width: '23px', height: '22px' }} loading='lazy' /></p>
                            <small className='text-light w-auto' style={{ fontFamily: "sans-serif" }}>THE GOOD MAN SECRET</small>

                        </div>
                    </div>



                    <div className='d-sm-flex d-md-row text-light justify-content-center gap-4 '>

                        <a href="/certificates" className='text-light text-decoration-none text-center d-block py-2'>CERTIFICATE</a>
                        {/* <Link to="/certificates" className='text-light text-decoration-none text-center d-block py-2'>DISCLAIMER </Link> */}
                        {/* <Link to="/Refund policy" className='text-light text-decoration-none text-center d-block py-2'>REFUND POLICY</Link> */}
                        <a href="/returnpolicy" className='text-light text-decoration-none text-center d-block py-2'>RETURN AND REFUND POLICY </a>
                        <a href="/shippingpolicy" className='text-light text-decoration-none text-center d-block py-2'>SHIPPING & DELIVERY POLICY </a>
                    </div>

                    <p className='container text-center  text-light' style={{ fontSize: WindowWidth > 768 ? "0.7rem" : "0.9rem" }}> Horse Fire Tablet is the best Ayurvedic Capsules which helps to increase the size of P and it leads to increase E time. It has ayurvedic ingredients like Withania, Somnifera, Asparagus, Racemosus, Asparagus, Adscendens Myristica Fragrans etc. which provides the good amount of energy and facilitate the absorption of blood flow to the cavernous body of the P. Horse Fire Tablet is a first choice.</p>

                    <div className='text-center'>
                        <ImFacebook2 className='mx-2' style={{ color: "white" }} />
                        <ImInstagram style={{ color: "white" }} />
                    </div>

                    <div className='text-center pt-2 pb-2'>
                        <img src="/images/_dmca_premi_badge_4.png" alt="asd" style={{ width: WindowWidth > 768 ? "5%" : "30%" }} loading='lazy' />
                    </div>

                    <div className='text-center text-primary'>© 2024 Arayurveda | All Rights Reserved.</div>

                </footer>

                {
                    !openAds && <div className="footerShow">

                        <div className={`text-light w-100 m-auto ${sc > 50 ? "tt" : 'xx'}`} style={{ background: "#262525", position: "fixed", opacity: '1', zIndex: '10000' }}>
                            <div className='d-flex justify-content-around align-items-center text-center fs-6 '>


                                <div className='p-2 w-100' style={{ fontFamily: 'Noto Serif Devanagari' }}>
                                    <div className='d-flex justify-content-center align-items-end ' style={{ position: "relative" }}>

                                        {/* <div className='px' style={{ position: "absolute", left: 0, bottom: "0px" }}>
                                    <img src="https://staticcontent.fitnessmantra.co.in/checkout/brcsingle.webp" alt="no" width="80px" />
                                </div> */}

                                        <div>
                                            <p className='text-center text-light fs-4 m-0'>डिस्काउंट का अंत: <span className='' style={{ color: "#e1c231" }}>00:{minuts}:{seconds < 10 ? "0" + seconds : seconds}</span></p>
                                            <ArrowCircleRightRounded className='arrow-3' /><a href='#form' className='text-center text-decoration-none border-0 rounded-3 pt-1  px-3 fw-bold text-light' style={{ background: 'red' }}>पैक 50% छूट के साथ </a><ArrowCircleLeftRounded className='arrow-4' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                }
            </div>


        </div >




    )
}
