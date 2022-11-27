
import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Categories from '../Categories/Categories/Categories';
import CategoryProducts from '../CategoryProducts/CategoryProducts';

const CategoryDetails = () => {

    const products = useLoaderData()
    console.log(products);




    return (
        <div >
            <div className=' max-w-2xl mx-auto '>
            <Categories></Categories>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
           {
                products.length === 0 ? <p className='text-3xl'>No Product Posted yet</p>
                :
                products.map(product => <CategoryProducts
                key={product._id}
                product={product}>
                </CategoryProducts>)
            }
           </div>
            
        </div>
    );
};

export default CategoryDetails;