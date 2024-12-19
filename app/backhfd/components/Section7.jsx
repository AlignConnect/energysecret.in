import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Section6 = () => {


    return (
        <div className="w-full bg-hero3hfd bg-cover bg-no-repeat">
            <div className=" max-w-5xl px-2 mx-auto text-center py-6 md:py-10 text-black">

                <h1 className="text-[#d7751e] text-[1rem] md:text-2xl font-bold">"Horse Fire Tablet एक प्रूवेन फार्मूलेशन है। यह लैब टेस्टेड और आयुष मंत्रालय द्वारा प्रमाणित है जो सेक्स अवधि, शक्ति-स्फूर्ति और लिंग वृद्धि में मदद करता है!"
                </h1>

                <div className="mt-0 md:mt-5">
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay showThumbs={false} showArrows={true} >

                        <div className='text-center  block'>
                            <div className='text-xl md:text-2xl font-bold pt-4'>पोर्न एक्टर्स की तरह ताकत, जोश और बॉडी में स्टैमिना का निर्माण होगा। </div>
                            <img src="/main/hfd_images/02-min.png" alt="pic" className='!w-full md:!w-3/4 !h-full' />
                        </div>
                        <div className='text-center block'>
                            <div className='text-xl md:text-2xl font-bold pt-4'>लिंग की लम्बाई 22 CM यानि 9 इंच तक तथा मोटाई भी बढ़ सकती है। </div>
                            <img src="/main/hfd_images/04-min.png" alt="pic" className='!w-full md:!w-3/4 !h-full' />
                        </div>

                        <div className='text-center block'>
                            <div className='text-xl md:text-2xl font-bold pt-4'>2 मिनट से कम या 3-4 मिनट की अवधि उछल कर 45 मिनट से ज्यादा होगी।</div>
                            <img src="/main/hfd_images/01-min.png" alt="pic" className='!w-full md:!w-3/4 !h-full' />
                        </div>

                        <div className='text-center block'>
                            <div className='text-xl md:text-2xl font-bold pt-4'>65 साल के पुरुष का भी लिंग उत्तेजित होगा, सेक्स की इच्छा जाग्रत हो जाएगी।</div>
                            <img src="/main/hfd_images/03-min.png" alt="pic" className='!w-full md:!w-3/4 !h-full' />
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>

    );
};

export default Section6;
