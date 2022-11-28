import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AdvertiesCard from './AdvertiesCard';

const Advertisment = () => {



    
    const {data: allProducts , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/allproducts?boosted=${true}`);
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
            <h1 className='text-3xl text-center font-bold'>Advertiesment</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
           {
            allProducts.map(product => <AdvertiesCard
            key={product._id}
            product={product}></AdvertiesCard>)
            
           }
            
        </div>
        </div>
    );
};

export default Advertisment;