import Image from 'next/image';
import React from 'react';
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFavourite } from '@/store/nextSlice';
import { IoMdClose } from 'react-icons/io';

interface Item{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:number;
}

interface cartProductProps{
    item:Item
}

const favouriteProduct = ({item}:cartProductProps) => {
  const dispatch=useDispatch();
  return (
    <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2'>
        <Image width={150} height={150} src={item.image} alt='ProductImg'/>
        <div className='flex items-center px-3 gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
            <p className='text-sm text-gray-500'>{item.description}</p>
            <p className='text-sm text-gray-600'>
              Unit price:{""}
              <span className='font-semibold text-amazon_blue'>
                <FormattedPrice amount={item.price}/>
              </span>
            </p>
            <div className='flex gap-5'>
            <button onClick={()=>{dispatch(addToCart({
              _id:item._id,
              brand:item.brand,
              category:item.category,
              image:item.image,
              description:item.description,
              isNew:item.isNew,
              oldPrice:item.oldPrice,
              price:item.price,
              title:item.title,
              quantity:1,
            })
            ) && dispatch(deleteFavourite(item._id));
            }} className='w-44 h-10 bg-black text-white rounded-md hover:bg-amazon_yellow hover:text-black'>add to cart</button>
            <div onClick={()=>dispatch(deleteFavourite(item._id))} className='flex items-center text-m text-black font-medium hover:text-red-600 cursor-pointer duration-300'>
                <IoMdClose className='mt-[2px]'/><p>remove</p>
            </div>
            </div>
          </div>
          <div className='text-lg font-semibold text-amazon_blue'>
            <FormattedPrice amount={item.price*item.quantity}/>
          </div>
        </div>
    </div>
    
  )
}

export default favouriteProduct