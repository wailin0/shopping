import {products} from "../dummy";

const Basket = () => {
    return (
        <div className='basket__container'>
            <h1>My Basket</h1>
            <h4>You are now qualify for Free Shipping!</h4>
            <div className='basket'>
                <div className='basket__orders'>

                    {products.map(product =>
                        <div className='basket__orders--product'>
                            <div className='basket__orders--product-item'>
                                <img src={product.photoURL}
                                     className='basket__orders--product-photo'
                                />
                                <div style={{marginRight: 'auto'}}>
                                    <p className='basket__orders--product-name'>{product.name}</p>
                                    <p className='basket__orders--product-brand'>{product.brand}</p>
                                    <p className='basket__orders--product-item-number'>{product.itemNumber}ITEM
                                        292223</p>
                                    <p className='basket__orders--product-size'>{product.size}Size: 4oz/123 mL</p>
                                </div>
                                <div>
                                    <p className='basket-modal__product-price'>${product.price}</p>
                                </div>
                            </div>
                            <div>
                                <select className='basket__orders--product-select'>
                                    {[1, 2, 3, 4, 5].map(value =>
                                        <option value={value}>{value}</option>
                                    )}
                                </select>
                                <span style={{marginLeft:20,color:'blue',cursor:'pointer'}}>
                                    Remove
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className='basket__checkout'>
                    <div className='basket__checkout-card1'>

                        <div className='basket__checkout-card1--prices'>
                            <div>
                                <p>Merchandise Subtotal</p>
                                <p>$34.33</p>
                            </div>
                            <div>
                                <p>Shipping & Handling</p>
                                <p>FREE</p>
                            </div>
                            <div>
                                <p>Tax</p>
                                <p>TBD</p>
                            </div>
                        </div>

                        <div style={{borderTop: '1px solid lightgray', marginTop: 10, paddingTop: 10}}>
                            <div className='basket__checkout-card1--flex'>
                                <p>Estimated Total</p>
                                <p>$56.00</p>
                            </div>

                            <button className='basket__checkout-card1--button'>
                                Checkout
                            </button>

                            <div className='basket__checkout-card1--promo'>
                                <p className='basket__checkout-card1--promo-text'>View promo codes ></p>
                                <input
                                    placeholder='Promo or Reward Code'
                                    className='basket__checkout-card1--promo-input'
                                />
                            </div>
                        </div>
                    </div>


                    <div className='basket__checkout-card2'>
                        <h3>Need assistance?</h3>
                        <p>call +95 095585855</p>
                        <p style={{marginTop: 20}}>Free return shipping or return in store</p>

                        <p>We accept</p>
                        <div style={{marginTop: 20}}>
                            <img src="https://www.sephora.com/img/ufe/payments/payPal.svg"
                                 className='basket__checkout-card2--photo'
                            />
                            <img src="https://www.sephora.com/img/ufe/payments/visa.svg"
                                 className='basket__checkout-card2--photo'
                            />
                            <img src="https://www.sephora.com/img/ufe/payments/masterCard.svg"
                                 className='basket__checkout-card2--photo'
                            />
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Basket
