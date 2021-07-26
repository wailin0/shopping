import {products} from "../dummy";

const Basket = () => {
    return (
        <div className='basket'>
            <h1>My Basket</h1>
            <h4>You are now qualify for Free Shipping!</h4>

            <div className='basket__orders'>

                {products.map(product =>
                    <div className='basket__orders--product'>
                        <img src={product.photoURL}
                             className='basket__orders--product-photo'
                        />
                        <div style={{marginRight:'auto'}}>
                            <p className='basket__orders--product-name'>{product.name}</p>
                            <p className='basket__orders--product-brand'>{product.brand}</p>
                            <p className='basket__orders--product-item-number'>{product.itemNumber}ITEM 292223</p>
                            <p className='basket__orders--product-size'>{product.size}Size: 4oz/123 mL</p>
                        </div>
                        <div>
                            <p className='basket-modal__product-price'>${product.price}</p>

                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Basket
