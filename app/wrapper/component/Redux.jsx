import { useGetShopifyDataQuery } from '@/lib/service/product.service'
import { getStoreProductInfo } from '@/lib/slice/product.slice';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Redux = ({ children }) => {

    const { data } = useGetShopifyDataQuery({ id: "9565083402555" });


    // const data = {
    //     id: 9565083402555,
    //     title:
    //         "Horsefire Tablets- Ayurvedic Medicine For Improve Strength And Stamina",
    //     body_html:
    //         '<p><span>Horsefire tablet is an ayurvedic medicine to boost men\'s stamina. It can make you able to stay longer in bed and does a long-lasting performance. It is prepared with a blend of excellent herbs like Ashwagandha, Shilajit, Shatavari, Kaucha, Shwet Musli, Vidari, Gokshura, Kesar, and more. These herbs contain natural medicinal properties that have long been known to increase strength, power, and stamina by eliminating disease.</span></p>\n<p><span>It helps to increase power, stamina, vigor, and vitality by eliminating the weakness of men. Shilajit increases the men\'s hormones that help in the betterment of performance, Because we all know very well about Shilajit, it is also the greatest ayurvedic stamina booster. Shatavari and Safed musli helps to eliminate problems like premature ejaculation and improve the timing of your performance. It also helps to get a stronger erection during intercourse and fulfill excitement with your partner. </span></p>\n<p><span>Most men are unable to enjoy the pleasures of their life due to low levels of testosterone, low stamina, and vigor. The Horsefire tablet is the simplest and most natural way to increase male strength and stamina. It may controls premature ejaculation and helps in getting a hard erection at the time of penetration. This product is certified by the Department of Health and this company has been approved by GMP and ISO.</span></p>\n<p class="newimgsec"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-1a-ezgif.com-resize.png?v=1719650354" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-1a-ezgif.com-resize.png?v=1719650354"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-2copy-ezgif.com-resize.png?v=1719650369" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-2copy-ezgif.com-resize.png?v=1719650369"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-3a-ezgif.com-resize.png?v=1719650384" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-3a-ezgif.com-resize.png?v=1719650384"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-4a-ezgif.com-resize.png?v=1719650415" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-4a-ezgif.com-resize.png?v=1719650415"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-6a-ezgif.com-resize.png?v=1719650428" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-6a-ezgif.com-resize.png?v=1719650428"><img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-7a-ezgif.com-resize.png?v=1719650444" alt="" data-mce-src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-7a-ezgif.com-resize.png?v=1719650444"></p>\n<p><span>हॉर्सफायर टैबलेट एक आयुर्वेदिक दवा है जो स्टैमिना को बढ़ाने और बेड पर लॉन्ग लास्टिंग परफॉर्मेंस करने में मदद करती है। इसको अश्वगंधा, शिलाजीत, सतावरी, कौंचा, श्वेत मूसली, विदारी, गोक्षुरा, और केसर का एक उचित अनुपात में मिश्रण करके बनाया गया है। यह १००% आयुर्वेदिक उत्पाद है और इसका कोई साइड इफ़ेक्ट नहीं है।</span></p>\n<p><span>अपने साथी को संतुष्ट करने के लिए एक शक्तिशाली इरेक्शन होना आवश्यक है। हॉर्सफ़ायर जोश बढ़ाने की एक आयुर्वेदिक दवा है इसमें वो प्रत्येक प्राकृतिक तत्व है जो लोगो की सभी सेक्सुअल समस्याओं के समाधान में मदद कर सकती है। इसमें मौजूद शिलाजीत आपकी ऊर्जा को पुनर्जीवित करता है तथा इसे सेक्स टाइम बढ़ाने की आयुर्वेदिक दवा भी कहा जाता है। अश्वगंधा से नाइट्रिक ऑक्साइड का उत्पादन बढ़ता है, जिससे लिबिडो यानी कामेच्छा को बेहतर बनाने में मदद मिलती है। इसे कामोत्तेजना बढ़ाने की दवा भी कहा जाता है। इसमें समाविष्ट सतावरी के प्रयोग से सेक्सुअल स्टैमिना में वृद्धि होती है। श्वेत मूसली वीर्य के निर्माण में वृद्धि और वीर्य की गुणवत्ता में सुधार लाती है और यह टाइमिंग बढाने की आयुर्वेदिक दवा है। जिनकी मदद से पुरुष यौन जीवन का भरपूर आनंद उठा सकता है।</span></p>\n<p><span>अधिकांश पुरुष टेस्टोस्टेरोन के निम्न स्तर, कम स्टैमिना और जोश के कारण अपने जीवन के सुखों का आनंद लेने में असमर्थ होते हैं। हॉर्सफायर टैबलेट पुरुष की यौन क्षमता तथा स्टैमिना बढ़ाने का सरलतम और प्राकृतिक साधन है। यह शीघ्रपतन को नियंत्रित करता है और प्रवेश के समय सख्त इरेक्शन प्राप्त करने में मदद करता है। यह उत्पाद स्वास्थ्य विभाग द्वारा प्रमाणित है और इस कंपनी को जीएमपी और आईएसओ द्वारा अनुमोदित किया गया है|</span></p>\n<!---->',
    //     vendor: "AR Ayurveda",
    //     product_type: "",
    //     created_at: "2024-06-04T10:18:59+05:30",
    //     handle: "horse-fire-tablets",
    //     updated_at: "2024-12-03T11:30:14+05:30",
    //     published_at: "2024-06-04T10:18:59+05:30",
    //     template_suffix: "horsefire-tablets",
    //     published_scope: "global",
    //     tags: "",
    //     status: "active",
    //     admin_graphql_api_id: "gid://shopify/Product/9565083402555",
    //     variants: [
    //         {
    //             id: 48944201957691,
    //             product_id: 9565083402555,
    //             title: "120 Tablets",
    //             price: "3800.00",
    //             position: 3,
    //             inventory_policy: "deny",
    //             compare_at_price: "8000.00",
    //             option1: "120 Tablets",
    //             option2: null,
    //             option3: null,
    //             created_at: "2024-06-08T15:02:58+05:30",
    //             updated_at: "2024-12-02T14:30:41+05:30",
    //             taxable: true,
    //             barcode: "",
    //             fulfillment_service: "manual",
    //             grams: 100,
    //             inventory_management: "shopify",
    //             requires_shipping: true,
    //             sku: "HFT-2",
    //             weight: 100,
    //             weight_unit: "g",
    //             inventory_item_id: 50990040154427,
    //             inventory_quantity: 246,
    //             old_inventory_quantity: 246,
    //             admin_graphql_api_id: "gid://shopify/ProductVariant/48944201957691",
    //             image_id: 49843471155515,
    //         },
    //         {
    //             id: 48944201990459,
    //             product_id: 9565083402555,
    //             title: "60 Tablets",
    //             price: "2300.00",
    //             position: 4,
    //             inventory_policy: "deny",
    //             compare_at_price: "4000.00",
    //             option1: "60 Tablets",
    //             option2: null,
    //             option3: null,
    //             created_at: "2024-06-08T15:02:58+05:30",
    //             updated_at: "2024-12-03T11:28:46+05:30",
    //             taxable: true,
    //             barcode: "",
    //             fulfillment_service: "manual",
    //             grams: 100,
    //             inventory_management: "shopify",
    //             requires_shipping: true,
    //             sku: "HFT",
    //             weight: 100,
    //             weight_unit: "g",
    //             inventory_item_id: 50990040187195,
    //             inventory_quantity: 229,
    //             old_inventory_quantity: 229,
    //             admin_graphql_api_id: "gid://shopify/ProductVariant/48944201990459",
    //             image_id: 46289972920635,
    //         },
    //     ],
    //     options: [
    //         {
    //             id: 11966606704955,
    //             product_id: 9565083402555,
    //             name: "Size",
    //             position: 1,
    //             values: ["120 Tablets", "60 Tablets"],
    //         },
    //     ],
    //     images: [
    //         {
    //             id: 46289972920635,
    //             alt: null,
    //             position: 1,
    //             product_id: 9565083402555,
    //             created_at: "2024-06-04T10:17:30+05:30",
    //             updated_at: "2024-07-25T12:22:46+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/46289972920635",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/1.jpg?v=1721890366",
    //             variant_ids: [48944201990459],
    //         },
    //         {
    //             id: 46654628626747,
    //             alt: null,
    //             position: 2,
    //             product_id: 9565083402555,
    //             created_at: "2024-07-01T14:57:03+05:30",
    //             updated_at: "2024-07-01T14:57:08+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/46654628626747",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/hft-jadi_copy-min.jpg?v=1719826025",
    //             variant_ids: [],
    //         },
    //         {
    //             id: 46654628692283,
    //             alt: null,
    //             position: 3,
    //             product_id: 9565083402555,
    //             created_at: "2024-07-01T14:57:03+05:30",
    //             updated_at: "2024-07-01T14:57:08+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/46654628692283",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/hft_ingre_copy-min.jpg?v=1719826025",
    //             variant_ids: [],
    //         },
    //         {
    //             id: 46654628659515,
    //             alt: null,
    //             position: 4,
    //             product_id: 9565083402555,
    //             created_at: "2024-07-01T14:57:03+05:30",
    //             updated_at: "2024-07-01T14:57:08+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/46654628659515",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/hft_howto_copy-min.jpg?v=1719826025",
    //             variant_ids: [],
    //         },
    //         {
    //             id: 46654628725051,
    //             alt: null,
    //             position: 5,
    //             product_id: 9565083402555,
    //             created_at: "2024-07-01T14:57:03+05:30",
    //             updated_at: "2024-07-01T14:57:08+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/46654628725051",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/hft_why_choose_copy-min_76b567f9-ca6a-4a31-949e-7294546d9cc1.jpg?v=1719826025",
    //             variant_ids: [],
    //         },
    //         {
    //             id: 49843471155515,
    //             alt: null,
    //             position: 6,
    //             product_id: 9565083402555,
    //             created_at: "2024-11-22T16:18:19+05:30",
    //             updated_at: "2024-11-22T16:18:19+05:30",
    //             admin_graphql_api_id: "gid://shopify/ProductImage/49843471155515",
    //             width: 1000,
    //             height: 1000,
    //             src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/hftcombo-copy-6740615380c4f.webp?v=1732272499",
    //             variant_ids: [48944201957691],
    //         },
    //     ],
    //     image: {
    //         id: 46289972920635,
    //         alt: null,
    //         position: 1,
    //         product_id: 9565083402555,
    //         created_at: "2024-06-04T10:17:30+05:30",
    //         updated_at: "2024-07-25T12:22:46+05:30",
    //         admin_graphql_api_id: "gid://shopify/ProductImage/46289972920635",
    //         width: 1000,
    //         height: 1000,
    //         src: "https://cdn.shopify.com/s/files/1/0878/9219/7691/files/1.jpg?v=1721890366",
    //         variant_ids: [48944201990459],
    //     },
    // };



    const dispatch = useDispatch();



    useEffect(() => {

        dispatch(getStoreProductInfo({
            productsdata: data,
            allVariants: data?.variants?.slice().reverse(),
            selectProducts: data?.variants[1]
        }))

    }, [data])




    return (
        <div>
            {children}
        </div>
    )
}

export default Redux
