import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const TechTips = () => {
const {theme } = useContext(AuthContext)
       

    
     return (
            <section className={`${ theme === true ? "bg-white text-black" : "bg-gray-800 text-white"} py-12 text-center`}>
              <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold  mb-10">
                  Tech Tips & Tutorials
                </h2>
                <div className="lg:grid grid-cols-2 gap-10">
                <p className="text-gray-500 font-semibold text-3xl">
                  In this section, we offer a variety of tech tips and tutorials to help you make the most of your devices and software. From smartphone tricks to troubleshooting common computer issues, our step-by-step guides will empower you to harness the full potential of your technology. Whether you are looking for advice on cybersecurity, app recommendations, or how to optimize your workflow, you will find it all here. Stay tuned for regular updates and empower yourself with tech know-how.
                </p>
                    <div className="lg:flex gap-5 py-10 lg:py-0">
                    <img src="https://i.ibb.co/wByn36j/download.jpg" alt="" className="w-60 h-60 rounded mx-auto" />
                    <img src="https://i.ibb.co/NsdWZKQ/images.png" alt="" className="w-60 h-60 rounded mx-auto mt-4 lg:mt-0" />
                    </div>
                </div>
              
              </div>
            </section>
          );
        
        
   
        
    
};

export default TechTips;
