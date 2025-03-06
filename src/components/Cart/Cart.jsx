import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ gadget }) => {

    const { product_image, product_title, description, price } = gadget

    

    return (
        <div className="flex justify-between max-md:flex-col lg:p-8 p-4 bg-white rounded-xl lg:rounded-4xl items-center">
            <div className="flex lg:gap-8 max-md:flex-col max-md:items-center">
                <img className="max-md:w-full w-[120px] object-cover rounded-xl" src={product_image} alt="" />
                <div className=" flex flex-col gap-4 justify-center max-md:mb-4">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p className="text-lg font-normal text-[#09080F99]">{description}</p>
                    <p className="text-xl font-semibold text-[#09080FCC]">Price: ${price}</p>
                </div>
            </div>
            <div className="">
                <p className="border rounded-full border-red-500 p-4 text-red-500"><span className="text-xl "><AiOutlineClose /></span></p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    gadget: PropTypes.object.isRequired
}

export default Cart;