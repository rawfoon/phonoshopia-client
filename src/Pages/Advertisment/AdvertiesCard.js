import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const AdvertiesCard = ({product,setModalData}) => {

    const {conditions, category, description, image, seller, location, name, originalPrice, phone, postedDate, resellPrice, reported, usedTime}  =product

    // const handleReport = ()=>{
        
    // }


const [sellerData, setSellerData] = useState('')
    useEffect(()=>{
        axios.get(`https://phono-shopia.vercel.app/user?email=${seller}`)
        .then(res=> setSellerData(res.data[0]))
        // .then (data =>{
        //     setSellerData(data[0]);
            
    // })
        
    },[])


    // console.log(seller);

    return (
        <div>
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      { seller &&

<div className="flex space-x-4">

<img alt="" src={sellerData?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
<div className="flex flex-col space-y-1">
<div className="indicator">
    {sellerData?.verified &&

<span className="indicator-item badge p-1 w-3 h-3 bg-[#3E8CF1] rounded-full  text-xs text-white">✓</span> 
    }

    <p className="text-sm font-semibold">{sellerData?.name}</p>
</div>
    <span className="text-xs dark:text-gray-400">Posted On: {postedDate}</span>
</div>
</div>


      }
<div>
    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
    <h2 className="mb-1 text-2xl font-semibold">{name}</h2>
    <p className="text-sm dark:text-gray-400">{description}</p>
    <p>Used period: {usedTime}</p>
    <p>Condition: {conditions}</p>
    <p>Posted On: {postedDate}</p>
    <p>Location: {location}</p>
    <p>Contact: {phone}</p>
    <p>Original Price: {originalPrice}tk</p>
    <p>Resell Price: <span className='text-xl text-orange-500'>{resellPrice}</span>tk</p>

   {/* {
       reported ? <></> 
       :
        <button onClick={handleReport} className='btn bg-blue-500 text-white'>Re</button>
    } */}
     <label onClick={()=> setModalData(product)} htmlFor="my-modal-3" className="btn btn-primary w-full">Book Now</label>

    

</div>

</div>
    </div>
    );
};

export default AdvertiesCard;