
import React,{useState} from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Categories from '../Categories/Categories/Categories';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import BookingModal from '../Modal/BookingModal/BookingModal';

const CategoryDetails = () => {

    const products = useLoaderData()
    console.log(products);
    const [modalData, setModalData] = useState('')




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
                product={product}
                setModalData={setModalData}>
                </CategoryProducts>)
            }
           </div>
           <BookingModal
           modalData={modalData}></BookingModal>
            
        </div>
    );
};

export default CategoryDetails;