import Image from "next/image";
import logo from "../images/shopping.jpg";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-red-700 text-gray-300 flex items-center justify-center gap-4">
        <Image  className="w-20 h-16" src={logo} alt="LogoIMg"/>
        <p className="text-sm -mt-4">
            All rights reserved{""}
            <a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://www.linkedin.com/in/bharath-b-n-bb272021b/">@Bharath</a>
        </p>
    </div>
  )
}

export default Footer