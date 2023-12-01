
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Brand = ({data}) => {

const {  brand , image} = data ;
   
 
    console.log(data)
    return (
      <div className="" >
      <div className="card  bg-base-100 shadow-xl px-2">
     <img src={image} alt="Shoes"  className="h-60 rounded py-8"/>
<div className=" text-center text-black font-bold text-2xl py-10 ">
<Link to={`/brand/${brand?.toLowerCase()}`}>{brand}</Link>

</div>

</div>
     
  </div>
    
    );
};

export default Brand;
Brand.propTypes = {
  data: PropTypes.node,
}