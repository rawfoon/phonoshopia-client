import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import OrderCard from './OrderCard';

const MyOrder = () => {
    const { userFromDB} = useContext(AuthContext)

    const {data: allProducts , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/allproducts?buyer=${userFromDB?.email}`);
            const data = await res.json();
            return data;
        }
    });
    // console.log('use', user, seller);

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(allProducts);
    refetch()
    return (
        <div className='p-5 my-10'>
            <h1 className='text-3xl text-center mb-10    font-bold'>My Orders</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
           {
            allProducts.map(product => <OrderCard
            key={product._id}
            product={product}
            refetch={refetch}></OrderCard>)
            
           }
            
        </div>
        </div>
    );
};

export default MyOrder;