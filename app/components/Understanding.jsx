import dynamic from 'next/dynamic';
import { useGlobalContext } from '../statemanage/context';
import { useSearchParams } from 'next/navigation';
import { CustomerDataValidator } from '../commonUse/FormDataValidation';
import axios from 'axios';
const CommonImg = dynamic(() => import("./CommonImg"), {
    loading: () => <p>Loading...</p>,
});

const DynamicForm = dynamic(() => import("./Form"), {
    loading: () => <p>Loading...</p>,
});

const DynamicReview = dynamic(() => import("./Reviews"), {
    loading: () => <p>Loading...</p>,
});

const Understanding = () => {
    const searchParams = useSearchParams()

    const { CustomerData, checkoutDetail, setLoading } = useGlobalContext();

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))

            const formdata = new FormData();
            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefiretablet.com");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL ?? "horsefiretablet.com");

            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                setLoading(true)
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json();


                const blogWebId = data.blogWebId ?? null
                if (data.ok) {
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            return alert(error);
        }

    }


    return (
        <div> <div className="max-w-3xl mx-auto px-3">
            <h1 className="text-center font-bold text-5xl py-3 pt-6">
                ज्यादा न सोचें
            </h1>
            <p className="text-xl text-justify">
                Horse Fire Tablet की मदद से अपनी शीघ्रपतन, लिंग में ढीलापन, छोटापन,
                पतलापन, टेढ़ापन व एनर्जी और स्टैमिना की कमी जैसी समस्याओं को जड़ से
                मिटाये और सेक्स लाइफ में खुशियों की बहार लाएं।
            </p>
            <h2 className="text-center font-bold md:text-3xl text-xl italic text-red-500 py-4">
                आप उन लाखों पुरुषों में शामिल हो जाएँ जो सुडौल लिंग और लम्बी सेक्स
                टाइमिंग से महिला पार्टनर की गर्मी उतार रहे है !
            </h2>
            <div className="bg-yellow-400 p-4 rounded-lg ring-2 ring-yellow-300 ring-offset-4">
                <h1 className="font-bold text-5xl md:text-6xl text-center py-2 md:py-1  md:pt-4">
                    विशेष सुविधा !!
                </h1>
                <p className="text-xl font-bold text-justify md:text-center">
                    पुरुषों की समस्या के हिसाब से उनकी उम्र, हाइट और वजन का आंकलन करके
                    horsefire tablet Tablet कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या
                    पर सटीक असर करता है।
                </p>
            </div>
            <div className="flex justify-center items-center mt-6 w-3/4 mx-auto">
                <CommonImg imglink="/main/hft_home/pro3.webp" />
            </div>
        </div>

            <div>
                <DynamicForm handleFormSubmit={handleFormSubmit} />
            </div>
            <h1 className="text-center bg-red-500 pb-3 pt-6 mt-4 text-white font-bold text-3xl md:text-4xl leading-wide">
                Horse Fire Tablet पर कस्टमर की राय
            </h1>
            <div className="max-w-4xl m-auto">
                <DynamicReview />
            </div></div>
    )
}
export default Understanding