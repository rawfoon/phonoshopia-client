import { useQuery } from '@tanstack/react-query';
import React,{useState, useEffect, useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext)



    const [categories, setCategories] = useState([])
    // const{image, setImage} = useState('')
    // console.log('image', image, setImage);


    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(categories);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data)

        })
    },[])


    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const img = form.img.files[0]
        const category = form.category.value
        const usedTime = form.usedTime.value
        const location = form.location.value
        const originalPrice = form.originalPrice.value
        const resellPrice =form.resellPrice.value
        const phone = form.phone.value
        const conditions = form.conditions.value
        const description = form.description.value

        const seller = user?.email

        let image 
        

        const date = new Date()

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

   

       

        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
			console.log(imgData);
			if(imgData.success){

				// (imgData.data.url)
        image = imgData.data.url
                addProductToDb()


			}
		}
		)

        const addProductToDb = ()=> {

			const product ={
                        
                        name,
                        image,
                        category,
                        usedTime,
                        location,
                        originalPrice,
                        resellPrice,
                        seller,
                        postedDate: currentDate,
                        phone,
                        conditions,
                        description,
                                           


            }
            console.log(product);
			fetch('http://localhost:5000/product', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(product)
			})
			.then(res => res.json())
			.then(data =>{
				console.log(data);
          
        if(data.acknowledged){

          toast.success('Product Added')
          
          
          
          form.reset();
        }
	
			})
		}



    }




    return (
        <div>
             <div className="flex mt-16 justify-center">
      <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center mb-5">Add a Product</h1>
        <form onSubmit={handleAddProduct} className="space-y-6 ng-untouched ng-pristine ng-valid grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-400">
              
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div style={{marginTop: 0}} className="space-y-1  text-sm">
		  <label htmlFor="category" className="block dark:text-gray-400">
		  Product Category
            </label>
            
            <select name="category" id="category" className="select select-bordered w-full ">
                {
                    categories.map(category=> <option key={category.id} value={category.name}>{category.name}</option> )
                }
             
              {/* <option value="buyer">Buyer</option>
              <option value="seller">Seller</option> */}
            </select>
          </div>
		  <div className="space-y-1 text-sm">
          <label htmlFor="img" className="block dark:text-gray-400">
		  Add a Photo
            </label>
		  <input type="file" id='img' name='img' className="file-input w-full "  required />
		  </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              Time of using
            </label>
            <input
              type="text"
              name="usedTime"
              id="usedTime"
              placeholder="Ex. 6 months"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block dark:text-gray-400">
             Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            </div>
			
          <div className="space-y-1 text-sm">
            <label htmlFor="conditions" className="block dark:text-gray-400">
             Conditions
            </label>
            <input
              type="text"
              name="conditions"
              id="conditions"
              placeholder="ex. good"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
			
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="phone" className="block dark:text-gray-400">
             Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
			
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block dark:text-gray-400">
             Descriptions 
            </label>
            <input
              type="text"
              name="description"
              id="i"
              placeholder="Description"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
			
          </div>
      
			
    
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block dark:text-gray-400">
             Original Price
            </label>
            <input
              type="text"
              name="originalPrice"
              id="originalPrice"
              placeholder="Original Price"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
			
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block dark:text-gray-400">
             Resell Price
            </label>
            <input
              type="text"
              name="resellPrice"
              id="resellPrice"
              placeholder="Resell Price"
			  required
              className="w-full input px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
			
          </div>
      
          <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Add Product
          </button>
        </form>
        
        
        
      </div>
    </div>
            
        </div>
    );
};

export default AddProducts;