
import { useQuery } from '@tanstack/react-query';
import React,{useState} from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Categories from '../Categories/Categories/Categories';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import BookingModal from '../Modal/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';

const CategoryDetails = () => {

    const products = useLoaderData()
    // console.log(products);
    const [modalData, setModalData] = useState('')

    // const {data: products , isLoading, refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async() =>{
    //         const res = await fetch(`https://phono-shopia.vercel.app/category/${params.category}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    // // console.log(users);
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    // refetch()





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

{
    modalData &&


           <BookingModal
           modalData={modalData}
           setModalData={setModalData}></BookingModal>
        }
            
        </div>
    );
};

export default CategoryDetails;