
const Banner = () => {
    return (
        <div className="absolute top-[30px] left-1/2 w-[96%] -translate-x-1/2 border-[16px] border-white">
            {/* min-h-screen */}
            <div className="bg-[#9538E2] rounded-lg lg:rounded-2xl">
                <div className="text-center py-20 lg:py-28 flex flex-col gap-4 lg:gap-8 ">
                    <h1 className="sora text-2xl lg:text-5xl lg:w-2/3 mx-auto text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <div className="px-4">
                        <p className="text-balance lg:text-xl font-normal text-white lg:w-2/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className="lg:pb-50 pb-8">
                        <button className="cursor-pointer hover:bg-black text-base lg:text-xl text-[#9538E2] font-medium lg:font-bold px-6 lg:px-8 py-3 lg:py-4 bg-white rounded-full">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;