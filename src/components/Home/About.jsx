import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const About = () => {
   const {theme } = useContext(AuthContext)
       

  return (
    <section className={` ${ theme === true ? "bg-white text-black" : "bg-gray-800 text-white"} py-12`}>
      <div className="container mx-auto lg:flex items-center justify-center gap-20 px-4">
        <div className="">
          <img
            src="https://i.ibb.co/qnDGZbz/tech-companies.jpg"
            alt="About Us Image"
            className="rounded shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-4">
            About Us
          </h2>
          <p className="text-gray-500 font-semibold text-2xl">
          Welcome to TechInfo, your go-to source for the latest tech news, reviews, and insights. Our mission is to keep you informed about the ever-evolving world of technology. We are passionate about all things tech, from gadgets and software to cutting-edge innovations. Our team of tech enthusiasts is dedicated to bringing you the most up-to-date information and expert analysis. Whether you are a tech novice or a seasoned pro, you will find valuable content and resources here to stay connected with the rapidly changing tech landscape.
          </p>
        </div>
      </div>
    </section>
  );



};

export default About;