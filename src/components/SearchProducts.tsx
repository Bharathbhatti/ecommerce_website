import React from 'react';
import FormattedPrice from './FormattedPrice';
import Image from 'next/image';


interface Props{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
}

type Item={
    item:Props;
};

const SearchProducts = ({item}:Item) => {
  return (
    <div className='flex  items-center gap-4'>
        <Image width={50} height={50} className='w-24' src={item.image} alt='ProductImg'/>
        <div className='text-xs -mb-1'>
            <p>{item.brand}_{item.category}</p>
            <p className='text-lg font-medium'>{item.title}</p>
            <p className='text-xs'>{item.description.substring(0,100)}</p>
            <p className='text-sm flex items-center gap-1'>
                Price: 
                <span className=' font-semibold'><FormattedPrice amount={item.price}/>
                </span>
                <span className='text-gray-600 line-through'><FormattedPrice amount={item.oldPrice}/>
                </span>
            </p>
        </div>
        <div className='flex-1 text-right px-4'>
            <p className=' text-amazon_blue font-semibold text-base animate-bounce'>
            !save <FormattedPrice amount={item.oldPrice-item.price}/>
            </p>
        </div>
    </div>
  )
}

export default SearchProducts