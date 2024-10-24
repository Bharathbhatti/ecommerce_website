"use client"
import logo from "../../images/shopping.jpg";
import cart from "../../images/cart.png"
import Image from "next/image";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import { useSession,signIn,signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { addUser } from "@/store/nextSlice";
import SearchProducts from "../SearchProducts";

const Header = () => {
  const {data:session}=useSession();
  const {productData,favouriteData,userInfo,allProducts}=useSelector((state:StateProps)=>state.next);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(session){
      dispatch(addUser({
        name:session?.user?.name,
        email:session?.user?.email,
        image:session?.user?.image,
      }))
    }
  },[session]);
  //Search Area

  const[allData,setallData]=useState([]);
  useEffect(()=>{
    setallData(allProducts.allProducts);
  },[allProducts])

  const [searchQuery,setSearchQuery]=useState("");
  const [filteredProducts,setfilteredProducts]=useState([]);

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(e.target.value);
  };

  useEffect(()=>{
    const filtered=allData.filter((item:StoreProduct)=>item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()));
    setfilteredProducts(filtered);
  },[searchQuery]);
  
  return (
    <div className="w-full h-20 bg-red-700 text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/*Logo*/}
          <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] scale-90 hover:scale-150 ">
            <Image className="w-20 h-12 object-cover" src={logo} alt="logoImg"/>
          </Link>
          {/*Delivery*/}
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
            <SlLocationPin/>
            <div className="text-xs">
              <p>Deliver to</p>
              <p className="text-white font-bold uppercase">India</p>
            </div>
          </div>
          {/*SearchBar*/}
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
            <input onChange={handleSearch} value={searchQuery} className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" type="text" placeholder="Search" />
            <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
              <HiOutlineSearch/>
            </span>
            {/*========Searchfield=====*/}
            {
              searchQuery &&
              <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {
                filteredProducts.length>0?(
                <>
                  {
                    searchQuery && filteredProducts.map((item:StoreProduct)=>(
                      <Link className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4" key={item._id} href={{pathname:`${item._id}`,query:{
                        _id:item._id,
                        brand:item.brand,
                        category:item.category,
                        image:item.image,
                        description:item.description,
                        isNew:item.isNew,
                        oldPrice:item.oldPrice,
                        price:item.price,
                        title:item.title,
                    },}}
                    onClick={()=>setSearchQuery("")}>
                        <SearchProducts item={item}/>
                      </Link>
                    ))
                  }
                </>
                ):(
                <div className="bg-white h-96 flex items-center justify-center py-5 rounded-lg shadow-lg cursor-not-allowed">
                  <p className="text-xl font-semibold animate-bounce">
                    No products found!
                  </p>
                </div>
              )}
            </div>
            }
            {/*========Searchfield=====*/}
          </div>
          {/*Signin*/}
          {
            userInfo?(
            <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img className="w-8 h-8 rounded-full object-cover" src={userInfo.image} alt="USerImg"/>
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
          ):(
            <div onClick={()=>signIn()} className="font-semibold text-sm text-gray-100 flex flex-row gap-1 justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 ">
            <span>
              <FaUser/>  
            </span>  
            <p>Login/Register</p>
          </div>
          )}
          {/*Favourite*/}
          <Link href={"/favourite"} className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
            <p>Marked</p>
            <p className="text-white font-bold">& Favourites</p>
            {
              favouriteData.length>0 && (
                <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">{favouriteData.length}</span>
              )
            }
          </Link>
          {/*Cart*/}
          <Link href={"/Cart"} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
            <Image className="w-auto object-cover h-8" src={cart} alt="CartImg"/>
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="absolute text-amazon_yellow text-m top-1 left-[26px] font-semibold">
              {productData?productData.length:0}
            </span>
          </Link>
        </div>
    </div>
  )
}

export default Header