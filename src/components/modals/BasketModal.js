import {FaHeartbeat, FaStore, FaTruck} from "react-icons/fa";
import {useContext} from "react";
import {Context} from "../../Context";

const BasketModal = () => {

    const {setBasketModal} = useContext(Context)

    return (
        <>
            <div style={{
                position: 'fixed',
                display: 'flex',
                right: 0,
                width: '100vw',
                height: '100vh',
            }}
                 onClick={() => setBasketModal(false)}
            >

            </div>
            <div className='basket-modal'>
                <div className='basket-modal__title'>
                    <h4>Basket</h4>
                    <p style={{color: 'blue'}}>View all</p>
                </div>

                {[1, 2, 3].map(() =>
                    <div className='basket-modal__product'>
                        <img
                            src='https://www.sephora.com/productimages/sku/s2463388-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=62'
                            className='basket-modal__product-photo'
                        />
                        <div>
                            <p className='basket-modal__product-name'>Cold Plyn Proe RemdedyMoisturezer with BHA/LHA 1.8
                                oz/5ML</p>
                            <p className='basket-modal__product-brand'>OLEHENIZE</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 'auto',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p className='basket-modal__product-price'>$50.55</p>
                            <FaHeartbeat size={20}/>
                        </div>
                    </div>
                )}

                <div className='basket-modal__title'>
                    <h4>Subtotal (3 items)</h4>
                    <p style={{fontWeight: 'bold'}}>$45.00</p>
                </div>
                <button className='basket-modal__button'>
                    View Basket & Checkout
                </button>

                <div className='basket-modal__flex'>
                    <FaStore size={25}/>
                    <p>See samples, reward, and promos in basket</p>
                </div>
                <div className='basket-modal__flex'>
                    <FaTruck size={25}/>
                    <p>FREE SHIPPING You're only 50000ks away from free shipping</p>
                </div>


            </div>
        </>
    )
}

export default BasketModal
