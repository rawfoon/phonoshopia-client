import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const {data: products = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                products.map(product => <MyProductCard 
                key={product._id}
                product={product}></MyProductCard>)
            }
            
        </div>
    );
};

export default MyProducts;