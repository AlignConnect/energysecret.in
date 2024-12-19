const Section2 = () => {
  return (
    <div>
      <div className="max-w-5xl px-3 m-auto pt-9">
        <h1 className="md:text-5xl text-3xl leading-tight text-center md:text-left  font-bold ">
          भारत में <span className="text-red-600"> "हॉर्सफायर टेबलेट" </span>की
          लोकप्रियता सबसे ज्यादा, अन्य कम्पनिया घाटे में !
        </h1>
        <div className="mt-3 md:mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-[150px]">
            <img
              src="/main/hfd_images/viagra.png"
              height={150}
              width={150}
              className="shrink-0"
              alt="pic5"
              loading='lazy'

            />
            <h1 className="md:w-2/3 text-xl md:ml-10 pt-4 text-justify">
              भारतीय मार्केट में वियाग्रा की बिक्री में हुई बड़ी गिरावट से
              वियाग्रा बनाने वाली अमेरिकन कंपनी मिलियन डॉलर्स के नुकसान का सामना
              कर रही है। अभी हाल ही में एक आर्टिकल छपा जिसमें साल दर साल भारत
              में वियाग्रा की घटती विक्री का जिक्र किया गया था। पिछले कुछ सालों
              से भारत के तमाम पुरुषों ने वियाग्रा के सेवन से दरकिनार कर लिया है,
              और इसकी वजह है "हॉर्सफायर टेबलेट" की लोकप्रियता। आज भारत में Horse
              fire Tablet सभी पुरुषों की पहली पसंद है।
            </h1>
          </div>
          <div className="flex items-center flex-col md:flex-row  justify-center min-h-[150px]">
            <img
              src="/main/hfd_images/down.png"
              height={130}
              width={130}
              className=" shrink-0"
              alt="pic6" loading='lazy'

            />
            <h1 className="md:w-2/3 text-xl md:ml-10 pt-4 text-justify">
              दोस्तों जब से Horse fire Tablet मार्केट में आया है तबसे लाखों
              पुरुषों के यौन समस्या को बिना कोई नुकसान पहुचायें जड़ से मिटाया है
              और उनका विश्वास जीता है। जबकि वियाग्रा के स्ट्रोक, अटैक, किडनी
              डैमेज, प्रोस्टेट सम्बंधित गंभीर दुष्प्रभाव जगजाहिर है यह भी इसके
              विक्री में हुई गिरावट की मुख्य वजह है।
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
