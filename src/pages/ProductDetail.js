import {Link} from "react-router-dom";
import {products} from "../dummy";
import {FaHeart, FaMinus, FaPlus} from "react-icons/fa";
import {useState} from "react";
import ProductCarousel2 from "../components/ProductCarousel2";
import Carousel from "react-multi-carousel";

const product = {
    "name": "fresh",
    "brand": {
        "name": "FORVR Mood",
        "about": "Yves Saint Laurent reigns as one of the most influential and inspired designers in the world. From his early days in the studio of Christian Dior to his acclaimed haute couture collections of today, YSL's touch remains unmistakable. The YSL style is reflected in the realm of fashion, including accessories, jewelry, ready-to-wear, fragrance, and cosmetics."
    },
    "price": "34.3",
    "photoURL": "https://www.sephora.com/productimages/sku/s2446235-main-zoom.jpg?imwidth=135&imwidth=97",
    "about": 'Saint Laurent reigns as one of th',
    "howToUse": "Fragrance is intensified by the warmth of your own body. Apply in the creases of your knees and elbows for a longer-lasting, stronger scent. ",
    "ingredients": "ALCOHOL, WATER, BENZYL SALICYLATE, BENZYL ALCOHOL, HYDROXYCITRONELLAL, BUTYL METHOXYDIBENZOYLMETHANE, HEXYL CINNAMAL, LIMONENE, LINALOOL, GERANIOL, CITRONELLOL, CINNAMYL ALCOHOL, METHYL ANTHRANILATE, AMYL CINNAMAL, CITRAL, COUMARIN, BENZYL BENZOATE, CI 15985 / YELLOW 6, CI 17200 / RED 33"
}

const responsive = {
    mobile: {
        breakpoint: {max: 5000, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ProductDetail = () => {
    const [aboutTheProductToggle, setAboutTheProductToggle] = useState(true)
    const [ingredientToggle, setIngredientToggle] = useState(false)
    const [howToUseToggle, setHowToUseToggle] = useState(false)
    const [aboutTheBrandToggle, setAboutTheBrandToggle] = useState(false)

    return (
        <div className='product-detail'>
            <div className='product-detail__info'>
                <div className='product-detail__slider'>
                    <Carousel responsive={responsive}>
                        {products.map(product =>
                            <div className='product-detail__slider-item'>
                                <Link to={`/product/${product.name}`}>
                                    <img src={product.photoURL}
                                         className='product-detail__slider-photo'
                                    />
                                </Link>
                            </div>
                        )}
                    </Carousel>
                </div>

                <div className='product-detail__detail'>
                    <div>
                        <p className='product-detail__detail-brand'>
                            {product.brand.name}
                        </p>
                        <p className='product-detail__detail-name'>{product.name}</p>
                        <p className='product-detail__detail-rating'>XXXXX 6.7K | 167.6k</p>
                        <p className='product-detail__detail-price'>$230.00</p>
                        <p className='product-detail__detail-size'>Size: 3oz/09 mL </p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <button className='product-detail__add-to-basket'>
                            Add to Basket
                        </button>
                        <FaHeart size={30}/>
                    </div>
                </div>
            </div>

            <div className='product-detail__more'>
                <div className='product-detail__more--toggle'
                     onClick={() => setAboutTheProductToggle(!aboutTheProductToggle)}
                >
                    <h2>About the Product</h2>
                    {aboutTheProductToggle
                        ? <FaMinus/>
                        : <FaPlus/>
                    }
                </div>
                {aboutTheProductToggle && <p className='product-detail__more--text'>{product.about}</p>}

            </div>

            <div className='product-detail__more'>
                <div className='product-detail__more--toggle'
                     onClick={() => setIngredientToggle(!ingredientToggle)}
                >
                    <h2>Ingredients</h2>
                    {ingredientToggle
                        ? <FaMinus/>
                        : <FaPlus/>
                    }
                </div>
                {ingredientToggle && <p className='product-detail__more--text'>{product.ingredients}</p>}

            </div>

            <div className='product-detail__more'>
                <div className='product-detail__more--toggle'
                     onClick={() => setHowToUseToggle(!howToUseToggle)}
                >
                    <h2>How to Use</h2>
                    {howToUseToggle
                        ? <FaMinus/>
                        : <FaPlus/>
                    }
                </div>
                {howToUseToggle && <p className='product-detail__more--text'>{product.howToUse}</p>}

            </div>

            <div className='product-detail__more'>
                <div className='product-detail__more--toggle'
                     onClick={() => setAboutTheBrandToggle(!aboutTheBrandToggle)}
                >
                    <h2>About the Brand</h2>
                    {aboutTheBrandToggle
                        ? <FaMinus/>
                        : <FaPlus/>
                    }
                </div>
                {aboutTheBrandToggle && <p className='product-detail__more--text'>{product.brand.about}</p>}

            </div>


            <ProductCarousel2 title='Similar Products' products={products}/>
            <ProductCarousel2 title='You May Also Like' products={products}/>


            <div className='product-detail__reviews'>
                <h2>Ratings & Reviews (3.4K)</h2>


                {[2, 1, 3, 5, 3].map(value =>
                    <div className='product-detail__reviews'>
                        <div className='product-detail__reviews--user'>
                            <img
                                src='https://community.sephora.com/t5/image/serverpage/image-id/1146823i5C4A931743A34FFF/image-dimensions/172x172?v=v2'
                                className='product-detail__reviews--user-photo'
                            />
                            <div style={{marginLeft: 10, marginRight: 'auto'}}>
                                <p className='product-detail__reviews--user-name'>
                                    name
                                </p>
                                <p>
                                    xxxxx
                                </p>
                            </div>
                            <p>1 day ago</p>
                        </div>

                        <p className='product-detail__reviews--text'>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Ad amet architecto aspernatur assumenda at
                            corporis dolor dolore dolorem, eum expedita explicabo fuga fugit ipsum iure laudantium
                            possimus
                            sint
                            sit sunt.
                        </p>
                    </div>
                )}

            </div>


        </div>
    )
}

export default ProductDetail
