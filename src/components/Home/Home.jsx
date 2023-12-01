import {  useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import About from "./About";
import TechTips from "./TechTips";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Home = () => {
    const {theme} = useContext(AuthContext);
    const brandData = useLoaderData();
    
    return (
        <div className={`${ theme === true ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
            <HomeBanner></HomeBanner>
            <div className="my-10  py-10">
            <h1 className="text-5xl  text-center font-semibold">Brand</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 w-[90%] lg:w-[80%] mx-auto py-10">
            
            { 
              brandData?.map( data => <Brand key={data?.id} data={data}></Brand>)
            }
       
        
       
    </div>
        </div>
            <About></About>
            <TechTips></TechTips>
            <Footer></Footer>
        </div>
    );
};

export default Home;