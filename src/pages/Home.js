import Carousel from "../components/Carousel";
import {products} from "../dummy";
import Ads from "../components/Ads";

const Home = () => {
    return (
        <div className='home'>
            <img
                src='https://www.sephora.com/contentimages/homepage/072021/Homepage/DesktopMweb/2021-07-22-hp-beauty-offer-clean+planetpositive-us-ca-d-slice.jpeg?imwidth=1200'
                className='home__promotion-banner'
            />
            <Carousel title='Just Dropped' products={products} />
            <Ads />

            <Carousel title='Selling Fast' products={products} />
            <Carousel title='Value Sets' products={products} />
            <Carousel title='Recommended For You' products={products} />
        </div>
    )
}

export default Home
