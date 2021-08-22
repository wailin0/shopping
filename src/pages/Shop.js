import Slider from "@material-ui/core/Slider";
import {useEffect, useState} from "react";
import {FaFilter} from 'react-icons/fa'
import {Link} from "react-router-dom";
import FilterModal from "../components/modals/FilterModal";
import {dummyProducts} from "../dummyData";
import Loading from "../components/fragments/Loading";

const filters = [
    {
        "name": "Colors",
        "list": ["color", "Silver", "Red", "Pink", "Coral", "Blue", "Green", "Gold"]
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
    const [value, setValue] = useState([0, 100]);
    const [mobileFilter, setMobileFilter] = useState(false)
    const [products, setProducts] = useState(null)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setProducts(dummyProducts)
    }, [])

    if (!products) {
        return <Loading />
    }

    return (
        <>

            <div className='shop__mobile-filter'>
                <div className='shop__mobile-filter--button'
                     onClick={() => setMobileFilter(true)}
                >
                    <p>Filter</p>
                    <FaFilter/>
                </div>

                {mobileFilter &&
                <FilterModal handleChange={handleChange} value={value}
                             filters={filters} setMobileFilter={setMobileFilter}
                />
                }
            </div>


            <div className='shop'>
                <div className='shop__filter'>
                    <div className='shop__filter--title'>
                        <h3>Filtered by:</h3>
                        <p className='shop__filter--reset'>
                            Reset all
                        </p>
                    </div>
                    {filters.map(filter =>
                        <div style={{margin: '20px 0'}}>
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

                    <div className='shop__filter--title'>
                        <p>Price Range</p>
                        <p className='shop__filter--reset'
                           onClick={() => setValue([0, 100])}
                        >
                            Reset
                        </p>
                    </div>
                    <p className='shop__filter--value'>
                        ${value[0]} - ${value[1]}
                    </p>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                    <div className='shop__filter--title'>
                        <p>$0</p>
                        <p>$100</p>
                    </div>
                </div>


                <div className='shop__product-grid'>
                    {products.map(product =>
                        <Link to={`/product/${product.name}`} className='shop__product-grid--item'>
                            <div className='shop__product-grid--item-photo'>
                                <img src={product.image_url}
                                     style={{width: '100%', objectFit: 'contain', height: '100%'}}
                                />
                            </div>
                            <p className='shop__product-grid--item-name'>{product.name}</p>
                            <p className='shop__product-grid--item-brand'>{product.brand.name}</p>
                            <p className='shop__product-grid--item-price'>${product.price}</p>
                            <p className='shop__product-grid--item-rating'>XXXXX 14.4K</p>
                        </Link>
                    )}
                </div>
            </div>


        </>
    )
}

export default Shop
