import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';
import ReportedRow from './ReportedRow';


const ReportedProducts = () => {
  useTitle('Reported Products')
    const {data: reportedProducts , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`https://phono-shopia.vercel.app/allproducts?reported=${true}`);
            const data = await res.json();
            return data;
        }
    });
    // console.log('use', user, seller);

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()
    // const reportedProducts = allProducts.map(product => product._id === true)

    
 



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            reportedProducts.length === 0 && <p className='text-3xl'>There is no reported product</p>
        }


        {
            reportedProducts.map((product, i)=><ReportedRow
            key={i}
            i={i}
            product={product}
            refetch={refetch}></ReportedRow>)


}
      
      {/* <!-- row 2 --> */}
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ReportedProducts;