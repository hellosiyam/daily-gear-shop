import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAddToCart, getWishList } from "../../utlity/addToDb";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";

const Dashboard = () => {
    const [cart, setCart] = useState('cart');

    const [addToCart, setAddToCart] = useState([])
    const [addToWish, setToWish] = useState([])

    const [totalCost, setTotalCost] = useState(0);
    const allGadgets = useLoaderData();

    useEffect(() => {
        const addToCart = getAddToCart();
        const addToWish = getWishList();

        const addToCartList = allGadgets.filter(gadget => addToCart.includes(gadget.product_id))
        const addToWishList = allGadgets.filter(gadget => addToWish.includes(gadget.product_id))

        setAddToCart(addToCartList)
        setToWish(addToWishList)

        const total = addToCartList.reduce((sum, gadget) => sum + gadget.price, 0);
        setTotalCost(total);
    }, [allGadgets])

    const handelSort = () => {
        // const sorted = [...addToCart].sort((a, b) => a.price - b.price);
        const sorted = [...addToCart].sort((a, b) => a.price - b.price)
        setAddToCart(sorted)
    }


    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center py-8 max-md:px-4">
                <h1 className="text-3xl font-bold mb-4">Product Details</h1>
                <div className="flex flex-col items-center gap-8">
                    <p className="text-base max-w-[776px] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="flex max-md:flex-col gap-6">
                        <button onClick={() => setCart('cart')} className={`${cart === "cart" ? "bg-white text-[#9538E2] text-lg font-bold rounded-full px-16 py-3.5 cursor-pointer"
                            :
                            "text-white border-white border-[1px]  text-lg font-bold rounded-full px-16 py-3.5 cursor-pointer"
                            }`} type="button">Cart</button>
                        <button onClick={() => setCart('wish')} className={`${cart === "wish" ? "bg-white text-[#9538E2] text-lg font-bold rounded-full px-16 py-3.5 cursor-pointer"
                            :
                            "text-white border-white border-[1px]  text-lg font-bold rounded-full px-16 py-3.5 cursor-pointer"
                            }`} type="button">Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="max-md:mx-[16px] lg:mx-[120px] bg-[#F6F6F6]">
                {cart === 'cart' ? <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between lg:py-16 max-sm:flex-col max-md:my-5">
                        <p className="text-2xl font-bold">Cart</p>
                        <div className="flex items-center gap-4 max-sm:flex-col">
                            <p className="text-2xl font-bold">Total cost:{totalCost.toFixed(2)}</p>
                            <button onClick={handelSort} type="button" className="cursor-pointer text-lg text-[#9538E2] font-semibold px-6 py-2 border border-[#9538E2] rounded-full">
                                Sort by Price

                            </button>
                            <button type="button" className="cursor-pointer text-lg text-white font-semibold px-6 py-2 bg-[#9538E2] rounded-full">
                                Purchase
                            </button>
                        </div>
                    </div>
                    {
                        addToCart.map((gadget, idx) => <Cart
                            key={idx}
                            gadget={gadget}
                        ></Cart>)
                    }
                </div> : <div className="flex flex-col gap-4 max-md:flex-col">
                    <div className="flex items-center justify-between lg:py-16">
                        <p className="text-2xl font-bold">WishList</p>
                    </div>
                    {
                        addToWish.map((gadget, idx) => <Wish key={idx} gadget={gadget}></Wish>)
                    }
                </div>}
            </div>
        </div>
    );
};

export default Dashboard;