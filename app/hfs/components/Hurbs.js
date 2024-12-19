const Hurbs = () => {

    const hurbs = (arr) => {

        return arr.map((e, key) => {

            return <div className='' key={key}>

                <div className='m-2 rounded-xl bg-[#FEFAF6]' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                    <div className=''>
                        <img src={e.img} alt="herbs" className='w-62 sm:w-1/2 mx-auto' />
                    </div>



                    <h2 className='text-2xl sm:text-3xl text-center text-red-700 font-extrabold'>{e.title}</h2>


                    <div className='text-center text-md sm:text-xl py-2 px-1'>{e.content}</div>

                </div>

            </div >
        })


    }

    return (

        <section className='fontNoto'>
            <div className=''>

                <div className='grid grid-cols-2 items-center' >

                    {
                        hurbs([
                            {
                                img: "/main/ht_images/a.png",
                                title: "अश्वगंधा",
                                content: "महानतम टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड वर्धक"
                            },
                            {
                                img: "/main/ht_images/b.png",
                                title: "शिलाजीत",
                                content: "नेचुरल वियाग्रा जो लिंग को कड़क और जोश बढ़ाए"
                            },
                            {
                                img: "/main/ht_images/c.png",
                                title: "केसर",
                                content: "श्रेष्ठ शक्ति एवं ऊर्जा वर्धक जो बेड पर लम्बा टिकाये"
                            },
                            {
                                img: "/main/ht_images/d.png",
                                title: "सफ़ेद मूसली",
                                content: "शीघ्रपतन एंव ढीले लिंग की समस्या में कारगर"
                            },
                            {
                                img: "/main/ht_images/e.png",
                                title: "गोखरू",
                                content: "लिंग मजबूती, व कामोत्तेजना बढ़ाने में अत्यंत असरदार"
                            },
                            {
                                img: "/main/ht_images/f.png",
                                title: "अभ्रक भस्म",
                                content: "सर्वोत्तम उत्तेजक शक्तिवर्धक, लिंग की सख्ती बढाए"
                            }
                        ])
                    }
                </div>
            </div>
        </section>

    )
}

export default Hurbs