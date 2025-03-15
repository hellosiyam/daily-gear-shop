import { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
import StateContext from "../../StateContext/StateContext";
import { removeAllStoredList } from "../../utlity/addToDb";
import Modal from "../Modal/Modal";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const [cart, setCart] = useState('cart');
    const { dashboardData, addToCart, addToWish, handelSort, totalCost, handelValue } = useContext(StateContext)

    useEffect(() => {
        dashboardData()
    }, [])

    const handelPerches = () => {
        document.getElementById('my_modal_5').showModal()
        removeAllStoredList()
        dashboardData()
        handelValue()
    }

    return (
        <div>
            <Helmet title="Dashboard"></Helmet>
            <Modal></Modal>
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
                            <button onClick={handelPerches} type="button" className="cursor-pointer text-lg text-white font-semibold px-6 py-2 bg-[#9538E2] rounded-full">
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