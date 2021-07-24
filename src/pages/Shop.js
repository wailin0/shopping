import {products} from "../dummy";

const filters = [
    {
        "name": "Colors",
        "list": ["Berry", "Red", "Pink", "Coral", "Blue", "Green", "Gold"]
    },
    {
        "name": "Brands",
        "list": ["Bite Beauty", "Bobbi Brown", "Anastasia Beverly Hills"]
    },
    {
        "name": "Ingredient Preferences",
        "list": ["Anti-oxidants", "Cruelty-Free", "Oil-free", "Silicone-free"]
    }
]


const Shop = () => {
    return (
        <div className='shop'>

            <div className='shop__filter'>
                <h3 style={{marginBottom: 20}}>Filter by:</h3>
                {filters.map(filter =>
                    <div>
                        <p className='shop__filter--name'>{filter.name}</p>
                        <div className='shop__filter--checkbox'>
                            {filter.list.map(l =>
                                <div className='shop__filter--checkbox-item'>
                                    <input type="checkbox" id={l} name="scales"/>
                                    <label htmlFor={l}>{l}</label>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>


            <div className='shop__product-grid'>
                {products.map(product =>
                    <div className='shop__product-grid--item'>
                        <div className='shop__product-grid--item-photo'>
                            <img src={product.photoURL} style={{width: '100%',objectFit:'contain', height: '100%'}}
                            />
                        </div>
                        <p className='shop__product-grid--item-name'>{product.name}</p>
                        <p className='shop__product-grid--item-brand'>{product.brand}</p>
                        <p className='shop__product-grid--item-price'>${product.price}</p>
                        <p className='shop__product-grid--item-rating'>XXXXX 14.4K</p>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Shop
