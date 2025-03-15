import AllGadgets from "../AllGadgets/AllGadgets";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import Helmete from "../Helmete/Helmete";


const Home = () => {
    
    return (
        <div>
            <Helmete tittle='Home'></Helmete>
            <Banner></Banner>
            <BannerImg></BannerImg>
            <AllGadgets></AllGadgets>
            
        </div>
    );
};

export default Home;