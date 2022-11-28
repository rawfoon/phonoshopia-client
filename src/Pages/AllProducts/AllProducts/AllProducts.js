import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProductRow from './ProductRow';

const AllProducts = () => {


    const {data: allProducts , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/allproducts`);
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
            allProducts.map((product, i)=><ProductRow
            key={i}
            i={i}
            product={product}
            refetch={refetch}></ProductRow>)


}
      
      {/* <!-- row 2 --> */}
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllProducts;