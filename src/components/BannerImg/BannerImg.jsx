import cover from '../../assets/banner.jpg'
const BannerImg = () => {
    return (
        <div>
            <div className='mt-78 mb-8 lg:mt-82 lg:mb-12 px-8 lg:px-[245px] relative z-20'>
                <div className='bg-[#ffffff4d] p-3 lg:p-6 border border-[#F6F6F6] rounded-2xl' >
                    <img className='h-1/2 lg:h-[505px] w-full object-cover rounded-2xl' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerImg;