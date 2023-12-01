import { Link } from "react-router-dom";
import { FcMenu } from 'react-icons/fc';
import { ImSun } from 'react-icons/im';
import { MdOutlineNightlight } from 'react-icons/md';
import { useContext, useEffect, useState } from "react";
import {RxCross1} from 'react-icons/rx'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
    const {user , logOut , setTheme } = useContext(AuthContext);
    const [themeChange , setThemeChange] = useState(true);
  
useEffect(() => {
  setTheme(themeChange)
},[setTheme , themeChange])
    const handleSignOut = () => {
     logOut()
     .then(() => {
       console.log('successfully sign out ')
       toast.success("sign out successfully", {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
     })
     .catch(error => {
       console.log(error.message)
     })
    }
   useEffect(() => {
     console.log(user);
   },[user])
     
    const [open , setOpen] = useState(true);
    
    // console.log(open)
    return (
        <div className={`py-5 px-5 ${ themeChange === true ? 'bg-white text-black' : 'bg-gray-900 text-white'} lg:w-[90%] mx-auto rounded lg:rounded-full shadow-xl`}>
         <div className="flex justify-between  items-center lg:pr-10">

         <div className="flex gap-5 items-center">
         <div className="border-2 border-black p-2 text-xl  lg:hidden" onClick={ () => setOpen(!open)}>
            {
                open === true ? <FcMenu ></FcMenu> : <RxCross1></RxCross1> 
            }
           </div>
            <img src="https://i.ibb.co/G0Nt36b/Whats-App-Image-2023-10-18-at-4-30-04-PM.jpg" alt="" className="h-10 md:h-14 lg:h-20 rounded-full  " />

            </div>
            <div className="hidden lg:flex flex-col lg:flex-row gap-10  text-3xl  font-medium z-10">
                <Link to={`/`} className="font-semibold text-4xl">Home</Link>
                <Link to={`/addProduct`} className="font-semibold text-4xl">Add product</Link>
                <Link to={`/myCart`}className="font-semibold text-4xl">My cart</Link>
        
            </div>
       
           <div className="flex gap-2 items-center">
             {
                user ? <div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 overflow-hidden shadow ${ themeChange === true ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded-box w-52`}>
                 
                  <li><a className="text-2xl font-bold  text-center">{user?.displayName}</a></li>
                  <li> <Link  className="btn text-2xl font-semibold" onClick={handleSignOut}>Sign up</Link></li>
                </ul>
              </div> </div> :
                <Link to='/login' className="btn text-2xl font-semibold">Login</Link>
             }
                <div className="text-3xl" onClick={  () => setThemeChange(!themeChange)}>
  
          { themeChange === true ?  <MdOutlineNightlight></MdOutlineNightlight>:<ImSun></ImSun> }
  
</div>
       </div>
    
         </div>
       
             <div className={` lg:hidden  flex flex-col gap-5 bg-white w-full h-[80%]   mx-auto text-3xl duration-1000 ${ open === false ? 'top-28 left-0' : ' -top-[100%] left-0'}  font-semibold pt-20 text-center absolute z-10 `}>
             <Link to={`/`} className="font-semibold text-4xl">Home</Link>
                <Link to={`/addProduct`} className="font-semibold text-4xl">Add product</Link>
                <Link to={`/myCart`} className="font-semibold text-4xl">My cart</Link>
        </div>
      <ToastContainer />
        </div>
    );
};

export default Nav;