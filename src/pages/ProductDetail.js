import {useHistory, useParams} from "react-router-dom";
import {FaHeart, FaMinus, FaPlus, FaStar} from "react-icons/fa";
import {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import SimilarProducts from "../components/ProductDetail/SimilarProducts";
import SuggestedProducts from "../components/ProductDetail/SuggestedProducts";
import RatingAndReview from "../components/ProductDetail/RatingAndReview";
import {dummyProducts} from "../dummyData";
import Loading from "../components/fragments/Loading";


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
    const [product, setProduct] = useState(null)

    const {name} = useParams()
    const history = useHistory()

    useEffect(() => {
        // productService.getProductByName(name)
        //     .then(res => {
        //         setProduct(res)
        //     })
        setProduct(dummyProducts.find(product => product.name === name))
    }, [name])

    if (!product) {
        return <Loading/>
    }

    return (
        <div className='product-detail'>
            <div className='product-detail__info'>
                <div className='product-detail__slider'>
                    <Carousel responsive={responsive}>
                        {product.images.map(image =>
                            <div className='product-detail__slider-item'>
                                <img src={image.image_url}
                                     className='product-detail__slider-photo'
                                />
                            </div>
                        )}
                    </Carousel>
                </div>

                <div className='product-detail__detail'>
                    <div>
                        <p className='product-detail__detail-name'>{product.name}</p>
                        <p className='product-detail__detail-brand'>{product.brand.name}</p>
                        <p className='product-detail__detail-rating'>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            <p>4.5 | 167.6k</p>
                        </p>
                        <p className='product-detail__detail-price'>$230.00</p>
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
                {aboutTheProductToggle && <p className='product-detail__more--text'>{product.description}</p>}

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
                {howToUseToggle && <p className='product-detail__more--text'>{product.how_to_use}</p>}

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
                {aboutTheBrandToggle && <p className='product-detail__more--text'>{product.brand.description}</p>}

            </div>


            <SimilarProducts/>
            <SuggestedProducts/>
            <RatingAndReview/>


        </div>
    )
}

export default ProductDetail
