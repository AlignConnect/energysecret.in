import { useMemo, useState } from 'react';

import Image from 'next/image';
import dayjs from 'dayjs';
import reviewsData from '../../srreviews.json';
import dynamic from 'next/dynamic';

// const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
//     loading: () => <p>loader</p>
// });


// const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
//     loading: () => <p>loader</p>
// });



const CustomerReview = () => {

    const [Reviews] = useState(reviewsData);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);

    const showMore = () => {
        if (numberOfitemsShown + 3 <= Reviews.length) {
            setNumberOfItemsToShown(numberOfitemsShown + 3);
        } else {
            setNumberOfItemsToShown(Reviews.length);
        }
    };


    const itemsToShow = useMemo(() => {
        return Reviews
            .slice(0, numberOfitemsShown).map((e, key) => {

                let ey = 0;

                switch (key) {
                    case 0:
                        ey = 1
                        break;
                    case 1:
                        ey = 3
                        break;
                    case 2:
                        ey = 6
                        break;
                    case 3:
                        ey = 9
                        break;
                    case 4:
                        ey = 11
                        break;
                    case 5:
                        ey = 15
                        break;
                    case 6:
                        ey = 18
                        break;
                    case 7:
                        ey = 20
                        break;
                    case 8:
                        ey = 24
                        break;
                    case 9:
                        ey = 25;
                        break;
                    case 10:
                        ey = 27;
                        break;

                    default:
                        break;
                }

                return <div key={key}>
                    <div className=" my-5 p-2 rounded-md" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px]">
                                <img src={e.profile_photo} alt="pic" className='w-[50px] h-[50px] rounded-full' loading='lazy'
                                />
                            </div>
                            <div>
                                <h5 className='fontPoppins mb-0 text-center align-center text-md font-semibold'>{e.customer_name}&nbsp;<img src="/common_images/verify.svg" className='w-[18px] h-[18px] inline' alt="pic" loading='lazy'
                                /></h5>
                                <div className='m-0 text-start'>
                                    <span className=" text-[gray] text-sm" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-start mt-0 text-[0.9rem]'>{e.comment}</div>
                        {/* <div className="w-full md:w-[20rem] m-auto">
                            {

                                key === 1 &&
                                <img
                                    src="/reviews/1.jpg"
                                    loading='lazy'
                                    className='min-w-[200px] max-w-[300px]'
                                    alt="no" />
                            }

                            {
                                key === 3 &&
                                <img
                                    src="/reviews/2.jpg"
                                    loading='lazy'
                                    className='min-w-[200px] max-w-[300px]'
                                    alt="no" />
                            }

                            {
                                key === 10 &&
                                <img
                                    src="/reviews/3.jpg"
                                    loading='lazy'
                                    className='min-w-[200px] max-w-[300px]'
                                    alt="no" />
                            }

                            {
                                key === 7 &&
                                <img
                                    src="/reviews/4.jpg"
                                    loading='lazy'
                                    className='min-w-[200px] max-w-[300px]'
                                    alt="no" />
                            }
                        </div> */}

                    </div>

                    {/* {key % 3 === 0 && <div className="-my-3">
                        <FlipAmazon />
                    </div>} */}

                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <section className='w-full md:py-7'>
            <div className=' mx-auto w-full bg-white rounded-xl  overflow-hidden'>
                <div className="px-2 pt-4 w-full">
                    <div className='fontPoppins text-2xl font-bold mb-4 text-center'>What Our <span className="text-red-600">Customer's Say</span></div>
                    <div className="text-center">
                        <div className=" w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                            {numberOfitemsShown >= reviewsData.length ? (
                                ""
                            ) : (
                                <button className='fontPoppins text-white font-bold text-md px-3 my-3 md:px-10 py-1 md:py-2 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerReview; 