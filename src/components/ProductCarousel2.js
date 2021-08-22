import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import {responsive} from "../config/styles";

const ProductCarousel2 = ({title, products}) => {
    return (
        <div style={{marginTop: 40}}>
            <p className='carousel2__title'>{title}</p>

            <Carousel responsive={responsive}>
                {products.map(product =>

                        <Link to={`/product/${product.name}`}
                              className='carousel2__product'>
                            <img src={product.image_url}
                                 className='carousel2__product--photo'
                            />
                            <p className='carousel2__product--name'>{product.name}</p>
                            <p className='carousel2__product--brand'>{product.brand.name}</p>
                            <p className='carousel2__product--price'>${product.price}</p>
                            <p className='carousel2__product--rating'>XXXXX 757</p>
                        </Link>

                )}
            </Carousel>
        </div>
    )
}

export default ProductCarousel2
