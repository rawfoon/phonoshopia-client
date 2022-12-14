import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const {user, userFromDB} = useContext(AuthContext)
    useTitle('My Products')

    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`https://phono-shopia.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    refetch()



    return (
        <div>
            {
                products.length === 0 && <p className='text-3xl'>You did not add any product. Please add product...</p>
            }


         {   
         products.length > 0 &&

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>Status</th>
        <th>Buyer</th>
        <th>Boost</th>
    
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
      

        products.map((product, i) => <MyProductCard
        
        key={product._id}
        product={product}
        i={i}
        refetch={refetch}></MyProductCard>)
    
       
      }
      
      
    </tbody>
  </table>
</div>
}
            
   
        </div>
    );
};

export default MyProducts;