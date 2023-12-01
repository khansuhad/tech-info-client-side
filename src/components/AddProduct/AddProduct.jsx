
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
   
    const handleUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const addProduct = { name , brandName , image , type , price , shortDescription , rating}
        console.log(addProduct);

        fetch('https://tech-info-server-side.vercel.app/products' , {
            method:'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body : JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data){
                toast.success("Product added successfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                   
            }
            form.reset();
        })

    }
    return (
        <div className="mt-20">
            <h1 className="text-center text-5xl font-semibold ">Add Product Form</h1>
            <form onSubmit={handleUpdateForm} className="w-[80%] mx-auto bg-[#C2D9FF] rounded mt-10 text-white lg:pt-20"> 
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto  ">
                    <div className="">
                        <h3 className="md:text-3xl font-semibold py-3">Name</h3>
                        <input type="text" name="name" placeholder="type name..."  className="border-2 border-green-600 h-12 text-black pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " required />
                    </div>
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Brand Name</h3>
                        <input type="text" name="brandName" placeholder="type brand name..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " required  />
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto ">
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3">Type</h3>
                        <input type="text" name="type" placeholder="type of product..." className="border-2 border-green-600 h-12 pl-3 font-normal text-black text-xs  md:text-xl rounded w-[70%] outline-green-600 " required  />
                    </div>
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Image</h3>
                        <input type="text" name="image" placeholder=" image url..." className="border-2 border-green-600 h-12 pl-3 font-normal text-black text-xl rounded w-[70%] outline-green-600 " required  />
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto ">
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3">Price</h3>
                        <input type="text" name="price" placeholder="type price..." className="border-2 border-green-600 h-12 pl-3 font-normal text-black text-xs  md:text-xl rounded w-[70%] outline-green-600 " required  />
                    </div>
                    <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Short Description</h3>
                        <input type="text" name="shortDescription" placeholder="type a short description..." className="border-2 border-green-600 text-black h-12 pl-3 font-normal text-xs  md:text-xl rounded w-[70%] outline-green-600 " required  />
                    </div>
                    
                </div>
                    <div  className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:pl-40 pl-5  px-auto lg:mb-10">
                        <div>
                        <h3 className="md:text-3xl font-semibold py-3"> Rating</h3>
                        <input type="text" name="rating" placeholder="type rating..." className="border-2 border-green-600 h-12 pl-3 font-normal text-black text-xs  md:text-xl rounded w-[70%] outline-green-600 " required  />
                        </div>
                      
                    </div>
                    
           
                    <button type="submit" className="w-full btn  btn-accent mt-5 text-3xl font-semibold">Add</button>
                
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;