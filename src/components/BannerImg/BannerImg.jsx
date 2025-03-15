import cover from '../../assets/banner.jpg'
const BannerImg = () => {
    return (
        <div>
            <div className='mt-88 mb-8 lg:mt-88 md:mt-56 lg:mb-12 px-10 lg:px-[245px] md:px-20 relative z-20'>
                <div className='bg-[#ffffff4d] p-3 lg:p-6 border border-[#F6F6F6] rounded-xl' >
                    <img className='h-1/2 lg:h-[505px] w-full object-cover rounded-lg' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerImg;