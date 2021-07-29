import {FaHeart, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";


const QuickLookModal = ({setQuickLookModal}) => {
    return (
        <>
            <div className='quick-look-modal__backdrop'
                 onClick={() => setQuickLookModal({index: null})}
            >
            </div>
            <div className='quick-look-modal'>
                <div>
                    <img
                        src="https://www.sephora.com/productimages/sku/s2468890-main-zoom.jpg?imwidth=300"
                        className='quick-look-modal__photo'
                    />
                    <div>
                        xxxxx 232 reviews | & 30.3K loves
                    </div>
                </div>
                <div className='quick-look-modal__product'>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p className='quick-look-modal__product-name'>The Rice Polish Foaming Enzyme Powder</p>
                            <FaTimes size={20}
                                     className='quick-look-modal__close'
                                     onClick={() => setQuickLookModal({index: null})}
                            />
                        </div>
                        <p className='quick-look-modal__product-brand'>Tatcha</p>
                        <p className='quick-look-modal__product-item-number'>ITEM 230393</p>
                        <p className='quick-look-modal__product-detail'>This cult-status toner addresses 7 skin benefits
                            leaving
                            you with a smooth, radiant glow while reducing the appearance of pores and uneven tone</p>
                        <Link to='/product/ee' className='quick-look-modal__product-more'>
                            <p>See product details</p>
                        </Link>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p className='quick-look-modal__product-price'>$19.66</p>
                        <select className='quick-look-modal__product-select'>
                            {[1, 2, 3, 4, 5].map(value =>
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
