import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import {responsive} from "../config/styles";


const ProductCarousel = ({title, products}) => {
    return (
        <div style={{marginTop: 40}}>
            <p className='carousel__title'>{title}</p>


            <Carousel responsive={responsive}>
                {products.map(product =>
                    <Link to={`/product/${product.name}`}
                          className='carousel__product'>
                        <img src={product.photoURL}
                             className='carousel__product-photo'
                        />
                        <p className='carousel__product-brand'>{product.brand}</p>
                        <p className='carousel__product-name'>{product.name}</p>


                    </Link>
                )}
            </Carousel>
        </div>
    )
}

export default ProductCarousel
