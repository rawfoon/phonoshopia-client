import React from 'react';

const ReportedRow = ({product, i}) => {
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
        
            return (
         
                    <tr className="hover">
                <th>{i + 1}</th>
                <td><img src={image} alt="" className='w-12 h-12 rounded' /></td>
                <td>{name}</td>
                <td>Reported</td>
                <td><button className='btn bg-red-500 text-white hover:bg-red-700 rounded-full'>X</button></td>
              </tr>
                    
        
            );
};

export default ReportedRow;