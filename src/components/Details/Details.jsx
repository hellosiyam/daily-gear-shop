import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
const Details = () => {

    const { product_id } = useParams()

    const gadgets = useLoaderData();

    const gadget = gadgets.find(gadget => gadget.product_id === product_id)

    const { product_title, rating, Specification, description, product_image, price, availability } = gadget

    // const stock = availability === true ? 'In Stock text-[#309C08] border border-[#309C08] bg-[#EAF5E6] px-[14px] py-[7px] rounded-full' : 'Out of Stock text-[#FF0000] border border-[#FF0000] bg-[#F4DDDD] '

    return (
        <div className="">
            <div className="bg-[#9538E2] text-white text-center pt-8 pb-56">
                <h1 className="text-3xl font-bold mb-4">Product Details</h1>
                <p className="text-base max-w-[776px] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className=" flex flex-col lg:flex-row gap-2 lg:gap-10 bg-white mx-4 lg:mx-32 lg:p-8 rounded-xl lg:rounded-3xl mt-[-170px] ">
                <div className="object-cover w-full lg:w-[40%] max-sm:p-4">
                    <img className="" src={product_image} alt="" />
                </div>
                <div className="w-full lg:w-[60%]">
                    <div className="flex flex-col gap-5 rounded-3xl max-sm:p-4">
                        <h3 className="text-3xl font-semibold">{product_title}</h3>
                        <p className="text-xl font-semibold">Price : {price}</p>
                        <p>
                            <span className={availability
                                ? "text-[#309C08] border border-[#309C08] bg-[#EAF5E6] px-[14px] py-[7px] rounded-full"
                                : "text-[#FF0000] border border-[#FF0000] bg-[#F4DDDD] px-[14px] py-[7px] rounded-full"}>
                                {availability ? "In Stock" : "Out of Stock"}
                            </span>
                        </p>
                        <p className="text-lg text-[#09080F99]">{description}</p>
                        <div className="flex flex-col gap-3">
                            <p className="text-lg font-bold">Specification:</p>
                            <ul className="text-lg text-[#09080F99]">
                                {Specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-bold">Rating : <span className="text-xl font-semibold bg-[#F9C004] text-white px-3.5 py-1.5 rounded-full">{rating}</span></p>
                            <div className="text-2xl text-[#F9C004] flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <button className="flex items-center gap-2 bg-[#9538E2] px-6 py-3 rounded-full text-lg text-white font-medium">Add To Card <MdOutlineShoppingCart /></button>
                            <button className="p-3 rounded-full text-2xl font-medium border border-[#09080F0D]"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;