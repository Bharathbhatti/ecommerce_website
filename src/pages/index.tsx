import Banner from "@/components/Banner";
import Product from "@/components/Product";
import { ProductProps } from "../../type";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProducts } from "@/store/nextSlice";

interface Props{
  productData:ProductProps;
}

export default function Home({productData}:Props) {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(setAllProducts({allProducts:productData}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[productData]);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner/>
        <div className="relative md:-mt020 lfl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Product productData={productData}/>
        </div>
      </div>
    </main>
  );
}

//SSR(Server Side Rendering for Data Fetching)
export const getServerSideProps=async()=>{
  const res=await fetch("https://fakestoreapiserver.reactbd.com/tech")
  const productData=await res.json();
  return{props:{productData}};
}
