import { resetCart } from '@/store/nextSlice';
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const Success = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col gap-2 items-center justify-center py-20'>
            <h1 className='font-bold text-2xl text-hoverBg'>Thank You for Shopping!</h1>
            <Link href={"/"} onClick={() => dispatch(resetCart())}>
                <div className='bg-amazon_blue text-white text-sm p-2 rounded-lg hover:bg-amazon_yellow hover:text-black duration-300 font-semibold'>
                    <button>Continue Shopping</button>
                </div>
                <div className='flex flex-col items-center justify-center text-sm font-semibold animate-bounce mt-1'>
                    <p>Click Here</p>
                </div>
            </Link>
        </div>
    )
}

export default Success