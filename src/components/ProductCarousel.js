import {Link, useHistory} from "react-router-dom";
import Carousel from "react-multi-carousel";
import {responsive} from "../config/styles";
import {useState} from "react";
import QuickLookModal from "./modals/QuickLookModal";


const ProductCarousel = ({title, products}) => {
    const [showQuickLook, setShowQuickLook] = useState({
        index: null
    })
    const [quickLookModal, setQuickLookModal] = useState({
        index: null
    })

    const history = useHistory()

    return (
        <div style={{marginTop: 40}}>
            <p className='carousel__title'>{title}</p>

            <Carousel responsive={responsive}>
                {products.map((product, index) =>
                    <div
                        key={product.id}
                        className='carousel__product'
                        onMouseOver={() => setShowQuickLook({index})}
                        onMouseLeave={() => setShowQuickLook({index: null})}
                    >
                        <div style={{position: 'relative'}}>
                            <Link to={`/product/${product.name}`}>
                                <img src={product.photoURL}
                                     className='carousel__product-photo'
                                />
                            </Link>
                            {(showQuickLook.index === index) &&
                            <button
                                className='carousel__product--quick-look'
                                onClick={() => setQuickLookModal({index})}
                            >
                                QUICK LOOK
                            </button>
                            }
                        </div>
                        <Link to={`/product/${product.name}`}>
                            <p className='carousel__product-brand'>{product.brand}</p>
                            <p className='carousel__product-name'>{product.name}</p>
                        </Link>
                    </div>
                )}
            </Carousel>


            {quickLookModal.index!==null && <QuickLookModal setQuickLookModal={setQuickLookModal}/>}
        </div>
    )
}

export default ProductCarousel
