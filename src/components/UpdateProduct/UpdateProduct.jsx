// import { useEffect, useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const UpdateProduct = () => {
  
    const brandData = useLoaderData();

   const navigate = useNavigate();
const {_id,  name , brandName , image ,  price , rating , type} = brandData ;
console.log(brandData)
//     useEffect(() => {

//         const productData = brandData?.find( item => item._id == id );
//       setData(productData)

//     },[])
    
    console.log(brandData)
    const handleUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updateForm = { name , brandName , image , type , price ,  rating}
        console.log(updateForm);

        fetch(`https://tech-info-server-side.vercel.app/products/${_id}` , {
            method:'PUT',
            headers:{
                'content-type' : 'application/json',
            },
            body : JSON.stringify(updateForm)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.modifiedCount > 0){
                toast.success("Updated successfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    navigate('/')
            }
        })
    }
    return (
        <div className="mt-20">
            <h1 className="text-center text-5xl font-semibold ">Update Product Form</h1>
            <form onSubmit={handleUpdateForm} className="w-[80%] mx-auto bg-orange-800 rounded mt-10 text-white lg:pt-20"> 
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto  ">
                    <div className="">
                        <h3 className="md:text-3xl font-semibold py-3">Name</h3>
                        <input type="text" defaultValue={name} name="name" placeholder="type name..."   className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Brand Name</h3>
                        <input type="text" defaultValue={brandName} name="brandName" placeholder="type brand name..." className="border-2 text-black border-green-600 h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto ">
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3">Type</h3>
                        <input type="text" defaultValue={type} name="type" placeholder="type of product..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Image</h3>
                        <input type="text" defaultValue={image} name="image" placeholder=" image url..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto ">
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3">Price</h3>
                        <input type="text" defaultValue={price} name="price" placeholder="type price..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                    <div className="lg:mb-10">
                        <h3 className="md:text-3xl font-semibold py-3"> Rating</h3>
                        <input type="text" defaultValue={rating} name="rating" placeholder="type rating..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " />
                    </div>
                
                    
                </div>
             
                 
           
                    <button type="submit" className="w-full btn btn-accent mt-5 text-3xl font-semibold">Submit</button>
                
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProduct;