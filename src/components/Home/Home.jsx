import AllGadgets from "../AllGadgets/AllGadgets";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import LaptopContainer from "../LaptopContainer/LaptopContainer";

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <BannerImg></BannerImg>
            <AllGadgets></AllGadgets>
            <LaptopContainer></LaptopContainer>
        </div>
    );
};

export default Home;