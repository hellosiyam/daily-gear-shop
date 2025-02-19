import cover from '../../assets/banner.jpg'
const BannerImg = () => {
    return (
        <div>
            <div className='mt-78 lg:mt-80 px-8 lg:px-[245px] relative z-20'>
                <div className='bg-[#ffffff4d] p-3 lg:p-6 border border-white rounded-2xl' >
                    <img className='h-1/2 lg:h-[505px] w-full object-cover rounded-2xl' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerImg;