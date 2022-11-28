import React from 'react';
import toast from 'react-hot-toast'

const ProductRow = ({product, i , refetch}) => {
    // console.log(product);

   const{ category,
conditions,
description,
image,
location,
name,
originalPrice,
phone,
postedDate,
resellPrice,
seller,
usedTime,
booked,
_id
   } = product

   const handleDelete = id => {        
          
    
                
    fetch(`http://localhost:5000/products/${id}`,{
        method: 'Delete'
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.error('Product Deleted')
            refetch();
    }
    // console.log(data);
    })
    
    

}

    return (
 
            <tr className="hover">
        <th>{i + 1}</th>
        <td><img src={image} alt="" className='w-12 h-12 rounded' /></td>
        <td>{name}</td>
        <td>{booked ? 'Booked' : 'Available'}</td>
        <td><button onClick={()=>handleDelete(_id)} className='btn bg-red-500 text-white hover:bg-red-700 rounded-full'>X</button></td>
      </tr>
            

    );
};

export default ProductRow;