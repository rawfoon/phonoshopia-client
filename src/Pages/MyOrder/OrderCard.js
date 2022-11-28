import React from 'react';
import toast from 'react-hot-toast'

const OrderCard = ({product, refetch}) => {
    const {_id, conditions, category, description, image, location, name, originalPrice, phone, postedDate, resellPrice, reported, usedTime}  =product

    console.log(reported);

    const handleReport = () =>{
        fetch(`http://localhost:5000/report/${_id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('User verified')
                refetch();
        }
        })
    }

    return (
        <div>
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
{/* <div className="flex space-x-4">
    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
    <div className="flex flex-col space-y-1">
        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
        <span className="text-xs dark:text-gray-400">4 hours ago</span>
    </div>
</div> */}
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

   {
       reported === "true" ? <></> 
       :
        <button onClick={handleReport} className='btn bg-red-500 text-white'>Report</button>
    }

    

</div>

</div>
    </div>
    );
};

export default OrderCard;