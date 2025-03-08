import { Helmet } from "react-helmet";
import AllGadgets from "../AllGadgets/AllGadgets";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import PageTitle from "../PageTitle/PageTitle";


const Home = () => {
    
    return (
        <div>
            <PageTitle tittle='Home'></PageTitle>
            <Banner></Banner>
            <BannerImg></BannerImg>
            <AllGadgets></AllGadgets>
            
        </div>
    );
};

export default Home;