import React from 'react'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from '../../type';
import FavouriteProduct from '@/components/FavouriteProduct';
import ResetFavourite from '@/components/ResetFavourite';
import Link from 'next/link';

const Favourite = () => {
    const {favouriteData}=useSelector((state:StateProps)=>state.next);
  return (
    <div className='max-w-screen-xl mx-auto px-6 gap-10 py-4'>
        {
            favouriteData.length>0?(
            <div className='bg-orange-300 p-4 rounded-lg'>
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-100 pb-1'>
                    <p className='text-2xl font-semibold text-amazon_blue'>Favourite Items</p>
                    <p className='text-lg font-semibold text-amazon_blue\'>Action</p>
                </div>
                <div>
                    {
                        favouriteData.map((item:StoreProduct)=>(
                            <div key={item._id} className='mt-2'>
                                <FavouriteProduct  item={item}/>
                            </div>
                        ))
                    }
                    <ResetFavourite/>
                </div>
            </div>
        ):(
            <div className='bg-white h-64 col-span-5 flex flex-col items-center justify-center rounded-lg shadow-lg'>
                <h1 className='text-lg  '>Your cart is empty!</h1>
                <Link className='font-semibold text-lg hover:text-red-400 ' href={"/"}>
                    <button className='w-52 h-10 bg-black text-sm rounded-lg hover:text-black text-white hover:bg-amazon_yellow mt-2'>Go back to shopping page</button>
                </Link>
            </div>
        )}
    </div>
  )
}

export default Favourite