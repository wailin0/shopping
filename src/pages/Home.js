import Ads from "../components/fragments/Ads";
import ValueSets from "../components/Home/ValueSets";
import SellingFast from "../components/Home/SellingFast";
import Recommended from "../components/Home/Recommended";
import NewProducts from "../components/Home/NewProducts";

const Home = () => {
    return (
        <div className='home'>
            <img
                src='https://www.sephora.com/contentimages/homepage/072021/Homepage/DesktopMweb/2021-07-22-hp-beauty-offer-clean+planetpositive-us-ca-d-slice.jpeg?imwidth=1200'
                className='home__promotion-banner'
            />

            <NewProducts/>
            <Ads/>
            <SellingFast/>
            <ValueSets/>
            <Recommended/>
        </div>
    )
}

export default Home
