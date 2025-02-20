import { useEffect, useState } from "react";
import GadgetsContainer from "../GadgetsContainer/GadgetsContainer";

const AllGadgets = () => {

    const [gadgets, setGadgets] = useState([])

    console.log(gadgets);


    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className="relative mx-4 lg:mx-32">
            <h1 className="text-center text-4xl text-[#0B0B0B] sora font-bold mb-8">Explore Cutting-Edge Gadgets : {gadgets.length}</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-[30%]">
                    <div className="bg-white p-6 border border-[#E6E6E7] rounded-2xl">
                        <div className="flex flex-col gap-5">
                            <button className="text-lg text-[#09080F99] font-bold bg-[#09080F0D] hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full">All Product</button>
                            <button className="text-lg text-[#09080F99] font-bold bg-[#09080F0D] hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full">Laptops</button>
                            <button className="text-lg text-[#09080F99] font-bold bg-[#09080F0D] hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full">Phones</button>
                            <button className="text-lg text-[#09080F99] font-bold bg-[#09080F0D] hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full">Accessories</button>
                            <button className="text-lg text-[#09080F99] font-bold bg-[#09080F0D] hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full">Smart Watches</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        gadgets.map(gadget => <GadgetsContainer key={gadget.product_id} gadget={gadget}></GadgetsContainer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadgets;