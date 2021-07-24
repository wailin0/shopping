import ProductCarousel from "../components/ProductCarousel";
import {products} from "../dummy";
import Ads from "../components/Ads";

const Home = () => {
    return (
        <div className='home'>
            <img
                src='https://www.sephora.com/contentimages/homepage/072021/Homepage/DesktopMweb/2021-07-22-hp-beauty-offer-clean+planetpositive-us-ca-d-slice.jpeg?imwidth=1200'
                className='home__promotion-banner'
            />
            <ProductCarousel title='Just Dropped' products={products} />
            <Ads />

            <ProductCarousel title='Selling Fast' products={products} />
            <ProductCarousel title='Value Sets' products={products} />
            <ProductCarousel title='Recommended For You' products={products} />
        </div>
    )
}

export default Home
