import { useQuery } from '@tanstack/react-query';
import React,{useState} from 'react';
import BookingModal from '../Modal/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import AdvertiesCard from './AdvertiesCard';

const Advertisment = () => {
    const [modalData, setModalData] = useState('')



    
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
        <div className='p-5 my-10 bg-gray-800'>
            <h1 className='text-3xl text-center font-bold'>Advertiesment</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
           {
            allProducts.map(product => <AdvertiesCard
            key={product._id}
            product={product}
            setModalData={setModalData}></AdvertiesCard>)
            
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

export default Advertisment;