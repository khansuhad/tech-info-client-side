import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Footer = () => {
  const {theme} = useContext(AuthContext)
    return (
        <div>
            <footer className={`footer p-10 ${ theme === true ? "  bg-base-200 text-black" : "bg-gray-900 text-white"}  text-base-content`}>
  <aside>
  <img src="https://i.ibb.co/G0Nt36b/Whats-App-Image-2023-10-18-at-4-30-04-PM.jpg" alt="" className="h-20 w-20 rounded" />
    <p className="font-semibold text-xl">Tech Info<br/>Providing reliable tech since 1992</p>
  </aside> 

  <nav className=" ">
    <header className="footer-title font-bold text-2xl">Company</header> 
    <a className="link link-hover font-semibold text-xl">Home</a>
    <a className="link link-hover font-semibold text-xl">Add Product</a> 
    <a className="link link-hover font-semibold text-xl">My Cart</a> 
    <a className="link link-hover font-semibold text-xl">Login</a> 
  
  </nav> 

</footer>
        </div>
    );
};

export default Footer;