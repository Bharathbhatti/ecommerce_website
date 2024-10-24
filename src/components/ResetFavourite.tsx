import { resetFavourite } from '@/store/nextSlice';
import { useDispatch } from 'react-redux';

const ResetFavourite = () => {
    const dispatch=useDispatch();
    const handleResetCart=()=>{
        const confirmReset=window.confirm(
            "Are you sure to reset your cart items?"
        );
        if(confirmReset){
            dispatch(resetFavourite());
        }
    }
  return (
    <div>
        <button onClick={handleResetCart} className='w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300'>Reset Favourite</button>
    </div>
  )
}

export default ResetFavourite