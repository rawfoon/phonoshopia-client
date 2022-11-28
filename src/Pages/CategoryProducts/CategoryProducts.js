import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';

const CategoryProducts = ({product}) => {


    const {conditions, category, description, image, location, name, originalPrice, phone, postedDate, resellPrice, seller, usedTime}  =product

    const {data: user , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/user?email=${seller}`);
            const data = await res.json();
            return data;
        }
    });
    // console.log('use', user, seller);

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()


    return (
        <div>
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
<div className="flex space-x-4">

    <img alt="" src={user[0].photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
    <div className="flex flex-col space-y-1">
    <div className="indicator">
        { user[0]?.verified &&

  <span className="indicator-item badge p-1 w-3 h-3 bg-[#3E8CF1] rounded-full  text-xs text-white">✓</span> 
        }
 
        <p className="text-sm font-semibold">{user[0]?.name}</p>
</div>
        <span className="text-xs dark:text-gray-400">Posted On: {postedDate}</span>
    </div>
</div>
<div>
    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
  
    <h2 className="mb-1 text-2xl font-semibold">{name}</h2>
    <p className="text-sm dark:text-gray-400">{description}</p>
    <p>Used period: {usedTime}</p>
    <p>Condition: {conditions}</p>
    
    <p>Location: {location}</p>
    <p>Contact: {phone}</p>
    <p>Original Price: {originalPrice}tk</p>
    <p>Resell Price: <span className='text-xl text-orange-500'>{resellPrice}</span>tk</p>
   <div className="flex justify-center"> <label htmlFor="booking-modal" className="btn btn-primary w-full ">Book Now</label></div>

</div>

</div>


<section>
    {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="booking-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
</section>
    </div>
    );
};

export default CategoryProducts;