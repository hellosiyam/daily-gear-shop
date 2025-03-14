import PropTypes from "prop-types";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import StateContext from "../../StateContext/StateContext";
import { removeFormWish } from "../../utlity/addToDb";
const Wish = ({gadget}) => {
    console.log(gadget);
    
    const { product_image, product_title, description, price, product_id } = gadget

    const {dashboardData, handelValue} = useContext(StateContext);

    const handelWishRemove = (id) => {
        removeFormWish(id)
        dashboardData()
        handelValue()
    }

    return (
        <div className="flex justify-between p-8 bg-white rounded-4xl items-center">
            <div className="flex gap-8">
                <img className="w-[120px] object-cover rounded-xl" src={product_image} alt="" />
                <div className=" flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p className="text-lg font-normal text-[#09080F99]">{description}</p>
                    <p className="text-xl font-semibold text-[#09080FCC]">Price: ${price}</p>
                </div>
            </div>
            <div className="">
                <p onClick={() =>handelWishRemove(product_id)} className="border rounded-full border-red-500 p-4 text-red-500"><span className="text-xl "><AiOutlineClose /></span></p>
            </div>
        </div>
    );
};

Wish.propTypes = {
    gadget: PropTypes.object.isRequired
}

export default Wish;