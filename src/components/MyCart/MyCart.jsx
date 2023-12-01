import {   useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {  useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Rating from "react-rating";


const MyCart = () => {
    
    const cartData = useLoaderData();
    console.log(cartData);
  const {user} = useContext(AuthContext);
  const yourData = cartData?.filter( data => data?.userEmail === user?.email);
  console.log(yourData);
  const [displayData , setDisplayData] = useState(yourData);
    console.log(displayData);
    const handleDeleteFromCart = (id) => {
        fetch(`https://tech-info-server-side.vercel.app/carts/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.deletedCount > 0) {
              const remainingData = displayData?.filter(item => item._id !== id)
              console.log(remainingData)
              toast.success("Deleted successfully", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
                 setDisplayData(remainingData);
                
             }
        })
    }
    console.log(cartData)
    return (
        <div className="mt-20">
            <h1 className="text-center font-semibold text-5xl ">Your Cart</h1>
            <div className="w-[80%] grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {
            displayData?.map(data =>  <div key={data?._id} className="card  bg-base-100 shadow-xl">
            <img src={data?.image} alt="Shoes" className="h-60 rounded" />
             <div className="card-body">
               <div className="flex justify-between items-center">
               <h2 className="card-title bg-slate-500 rounded w-fit py-2 px-5">{data?.brandName}</h2>
               <div>
               <Rating
                    emptySymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                        </svg>
                    }
                    initialRating={data?.ratings}
                    readonly
                />
               </div>
               </div>
               <h3 className="text-xl font-medium">{data?.name}</h3>
               <p className="text-lg font-medium">Type : {data?.type}</p>
               <p className="text-lg font-medium">Price : ${data?.price}</p>
               <div className="card-actions justify-center">
               
                 <button onClick={() => handleDeleteFromCart(data?._id)} className="btn btn-primary px-10">Delete</button>
               </div>
             </div>
           </div>)
        }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyCart;