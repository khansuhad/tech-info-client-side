import { useLoaderData, useParams } from "react-router-dom";
import BrandPageCard from "./BrandPageCard";
import { useEffect, useState } from "react";
// import BrandPageImageSlider from "./BrandPageImageSlider";



const BrandPage = () => {
  const [slider , setSlider] = useState();
  
  const brandData = useLoaderData();
  const id = useParams()?.brandName;
  console.log(brandData)

  useEffect(() => {

    fetch('/brandSliderImage.json')
    .then(res => res.json())
    .then(data =>{
      const brand = data?.find(name => name?.brandName.toLowerCase() == id.toLowerCase())
      setSlider(brand)
    })
},[id])
 

    return (
        <div >
         
      <div className="carousel  flex justify-center items-center h-96 my-10 rounded ">
  <div id="item1" className="carousel-item w-full  h-96 ">
    <img src="https://i.ibb.co/37H3wYy/747.png" className="w-[80%] mx-auto" />
  </div> 
  <div id="item2" className="carousel-item  h-96 w-full">
    <img src="https://i.ibb.co/1XzGhHc/samsung-logo-on-transparent-background-free-vector.jpg" className="w-[80%] mx-auto" />
  </div> 
  <div id="item3" className="carousel-item h-96 w-full">
    <img src={slider?.image1} className="w-[80%] mx-auto" />
  </div> 
  <div id="item4" className="carousel-item  h-96 w-full">
    <img src={slider?.image2} className="w-[80%] mx-auto" />
  </div>
  <div id="item5" className="carousel-item  h-96 w-full">
    <img src={slider?.image3} className="w-[80%] mx-auto" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  {/* <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a>  */}
  <a href="#item3" className="btn btn-xs">1</a> 
  <a href="#item4" className="btn btn-xs">2</a>
  <a href="#item5" className="btn btn-xs">3</a>
</div>
<div className=" w-[80%] grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">

      {
       brandData?.map( data => <BrandPageCard key={data?._id} data={data}></BrandPageCard>)
      }

</div>
            </div>
        
    );
};

export default BrandPage;