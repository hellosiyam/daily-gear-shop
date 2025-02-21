import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Laptops = ({ laptop }) => {
    console.log(laptop);
    
    const { product_id, product_image, product_title, price } = laptop

    return (
        <div>
            <div className="p-5 rounded-2xl bg-white">
                <img className="h-52 object-cover mx-auto bg-white" src={product_image} alt={product_title} />
                <div className="flex flex-col justify-between gap-5 min-h-[160px]">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl text-[#09080F] font-semibold">{product_title}</h3>
                        <p className="text-xl text-[#09080F99] font-medium">{price}</p>
                    </div>
                    <Link to={`/details/${product_id}`}>
                        <button className="text-lg text-[#9538E2] px-6 py-2 rounded-full border border-[#9538E2] cursor-pointer hover:bg-[#9538E2] hover:text-white w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Laptops.propTypes = {
    laptop : PropTypes.object.isRequired
}

export default Laptops;