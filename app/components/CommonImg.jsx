import Image from "next/image";

const CommonImg = ({ imglink }) => {
    return (
        <Image src={imglink} alt='pic' width={1000} height={1000} />
    )
}
export default CommonImg;