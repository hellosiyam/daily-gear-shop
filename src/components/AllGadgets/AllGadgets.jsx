import { useEffect, useState } from "react";
import GadgetsContainer from "../GadgetsContainer/GadgetsContainer";
const AllGadgets = () => {

    const [gadgets, setGadgets] = useState([])

    const [selectCtg, setSelectCtg] = useState('all category')

    console.log(gadgets);


    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.category === selectCtg)
                if (selectCtg === 'all category') {
                    setGadgets(data)
                }
                else {
                    setGadgets(filterData)
                }
            })
    }, [selectCtg])
    return (
        <div className="relative mx-4 lg:mx-32">
            <h1 className="text-center text-4xl text-[#0B0B0B] sora font-bold mb-8">Explore Cutting-Edge Gadgets : {gadgets.length}</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:min-w-[20%]">
                    <div className="bg-white p-6 border border-[#E6E6E7] rounded-2xl">
                        <div className="flex flex-col gap-5">
                            <button onClick={() => setSelectCtg('all category')} 
                            className={`${selectCtg === 'all category' ? 'bg-[#9538E2] text-white' : 'bg-[#eae9f099] text-[#09080F99]'}
                             hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full font-bold`}
                            >All Product</button>
                            <button onClick={() => setSelectCtg('Laptop')} className={`${selectCtg === 'Laptop' ? 'bg-[#9538E2] text-white' : 'bg-[#eae9f099]'} text-[#09080F99] text-lg hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full font-bold`}>Laptops </button>
                            <button onClick={() => setSelectCtg('Mobile')} className={`${selectCtg === 'Mobile' ? 'bg-[#9538E2] text-white' : 'bg-[#eae9f099]'} text-[#09080F99] text-lg hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full font-bold`}>Phones</button>
                            <button onClick={() => setSelectCtg('Accessories')} className={`${selectCtg === 'Accessories' ? 'bg-[#9538E2] text-white' : 'bg-[#eae9f099]'} text-[#09080F99] text-lg hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full font-bold`}>Accessories</button>
                            <button onClick={() => setSelectCtg('Smartwatch')} className={`${selectCtg === 'Smartwatch' ? 'bg-[#9538E2] text-white' : 'bg-[#eae9f099]'} text-[#09080F99] text-lg hover:bg-[#9538E2] cursor-pointer hover:text-white px-6 py-3.5 rounded-full font-bold`}>Smart Watches</button>
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