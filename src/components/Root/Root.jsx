import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Root = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div >
           <div className={`${ theme === true ? 'bg-white text-black' : 'bg-gray-800 text-white'} lg:py-10`}>
           <Nav></Nav>
           </div>
            <Outlet></Outlet>
        </div>
        
    );
};

export default Root;