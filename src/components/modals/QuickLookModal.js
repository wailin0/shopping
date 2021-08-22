import {FaHeart, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import productService from "../../services/product";
import {useEffect, useState} from "react";


const QuickLookModal = ({setQuickLookModal, productId}) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        productService.getProductById(productId)
            .then(res => setProduct(res))
    }, [])

    console.log(product)

    if (!product) {
        return null
    }

    return (
        <>
            <div className='quick-look-modal__backdrop'
                 onClick={() => setQuickLookModal({index: null})}
            >
            </div>
            <div className='quick-look-modal'>
                <div>
                    <img
                        src={product.image_url}
                        className='quick-look-modal__photo'
                    />
                    <div>
                        xxxxx 232 reviews | & 30.3K loves
                    </div>
                </div>
                <div className='quick-look-modal__product'>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p className='quick-look-modal__product-name'>{product.name}</p>
                            <FaTimes size={20}
                                     className='quick-look-modal__close'
                                     onClick={() => setQuickLookModal({index: null})}
                            />
                        </div>
                        <p className='quick-look-modal__product-brand'>{product.brand.name}</p>
                        <p className='quick-look-modal__product-item-number'>{product.item_number}</p>
                        <p className='quick-look-modal__product-detail'>{product.description}</p>
                        <Link to={`/product/${product.name}`} className='quick-look-modal__product-more'>
                            <p>See product details</p>
                        </Link>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p className='quick-look-modal__product-price'>${product.price}</p>
                        <select className='quick-look-modal__product-select'>
                            {[1, 2, 3, 4, 5,6,7,8,9,10].map(value =>
                                <option>{value}</option>
                            )}
                        </select>
                        <div className='quick-look-modal__button-group'>
                            <button className='quick-look-modal__add-to-basket'>
                                Add to Basket
                            </button>
                            <button className='quick-look-modal__add-to-loves'>
                                <FaHeart size={15} style={{marginRight: 10}}/> Add to Loves
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default QuickLookModal
