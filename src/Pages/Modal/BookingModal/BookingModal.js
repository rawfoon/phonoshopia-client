import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from 'react-hot-toast'

const BookingModal = ({  handleBooking, refetch , modalData}) => {
  const { userFromDB } = useContext(AuthContext);

  const {
    name, 
        resellPrice,
        _id

  } =modalData
  console.log(modalData);



  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target
    const buyerPhone = form.phone.value
    const meetLocation = form.location.value
    // const fromModal = {buyerPhone, meetLocation}
    console.log(buyerPhone, meetLocation);

    const updateData = {
        buyerPhone,
        meetLocation,
        buyer: userFromDB.email,

        


    }

    
    fetch(`http://localhost:5000/book/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Booked')
            // refetch();
    }
    })
    





  };

  return (
    <section className="">
     {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <form onSubmit={handleBook}>
          <div>
            <p className="text-2xl text-center">{`Device: ${name}`}</p>
            <p className="text-xl ml-4">{`Price: ${resellPrice}tk`}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              placeholder={`Buyer: ${userFromDB?.name}`}
              readOnly
              className="input  w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={`Email: ${userFromDB?.email}`}
              readOnly
              className="input  w-full max-w-xs"
            />
          </div>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            required
            className="input  input-bordered w-full mb-3"
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Meeting Location"
            required
            className="input  input-bordered w-full mb-3"
          />

        
  <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
      <button  type="submit" htmlFor='my-modal-3'  className="px-6 py-2  rounded-sm shadow-sm  dark:bg-violet-400 dark:text-gray-900">Agree</button>
      {/* <button htmlFor="my-modal-3"  className="px-6 py-2  rounded-sm">Cancel</button> */}
  </div>
        </form>



  </div>
</div>

  {/* <div className="fixed top-[15%] left-[0%] md:left-[30%] lg:left-[35%]">
  <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	
    <form onSubmit={ handleBook}>
          <div>
            <p className="text-2xl text-center">{`Device: ${name}`}</p>
            <p className="text-xl ml-4">{`Price: ${resellPrice}tk`}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              placeholder={`Buyer: ${userFromDB?.name}`}
              readOnly
              className="input  w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={`Email: ${userFromDB?.email}`}
              readOnly
              className="input  w-full max-w-xs"
            />
          </div>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            required
            className="input  input-bordered w-full mb-3"
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Meeting Location"
            required
            className="input  input-bordered w-full mb-3"
          />

        
  <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
      <button  className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">Agree</button>
      <button  className="px-6 py-2 rounded-sm">Cancel</button>
  </div>
        </form>


</div>
    </div>   */}
    </section>
  );
};

export default BookingModal;
