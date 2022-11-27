import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([])
    // console.log(categories);

    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data)

        })
    },[])

    return (
        <div className='p-5'>
            <h1 className='text-3xl text-center font-bold'>Brand Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
            {
                categories.map(category => <Category
                key={category.id}
                category={category}></Category>)
            }
            
        </div>
        </div>
    );
};

export default Categories;