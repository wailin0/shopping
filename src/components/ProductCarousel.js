import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import {responsive} from "../config/styles";
import {useState} from "react";
import QuickLookModal from "./modals/QuickLookModal";
import CircularProgress from "@material-ui/core/CircularProgress";


const ProductCarousel = ({title, products}) => {
    const [showQuickLook, setShowQuickLook] = useState({
        index: null
    })
    const [quickLookModal, setQuickLookModal] = useState({
        index: null,
        productId: null
    })

    return (
        <div style={{marginTop: 40}}>
            <p className='carousel__title'>{title}</p>

            {products ? <Carousel responsive={responsive}>
                    {products.map((product, index) =>
                        <div
                            key={product.id}
                            className='carousel__product'
                            onMouseOver={() => setShowQuickLook({index})}
                            onMouseLeave={() => setShowQuickLook({index: null})}
                        >
                            <div style={{position: 'relative'}}>
                                <Link to={`/product/${product.name}`}>
                                    <img src={product.image_url}
                                         className='carousel__product-photo'
                                    />
                                </Link>
                                {(showQuickLook.index === index) &&
                                <button
                                    className='carousel__product--quick-look'
                                    onClick={() => setQuickLookModal({index, productId: product.id})}
                                >
                                    QUICK LOOK
                                </button>
                                }
                            </div>
                            <Link to={`/product/${product.name}`}>
                                <p className='carousel__product-name'>{product.name}</p>
                                <p className='carousel__product-brand'>{product.brand.name}</p>
                            </Link>
                        </div>
                    )}
                </Carousel>
                : <CircularProgress color="secondary"/>
            }


            {quickLookModal.index !== null &&
            <QuickLookModal setQuickLookModal={setQuickLookModal} productId={quickLookModal.productId}/>}
        </div>
    )
}

export default ProductCarousel
