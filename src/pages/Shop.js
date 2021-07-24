import {products} from "../dummy";
import Slider from "@material-ui/core/Slider";
import {forwardRef, useState} from "react";
import {FaAngleDown, FaFilter, FaTimes} from 'react-icons/fa'
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

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

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Shop = () => {
    const [value, setValue] = useState([0, 100]);
    const [mobileFilter, setMobileFilter] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <div className='shop__mobile-filter'>
                <div className='shop__mobile-filter--button'
                     onClick={() => setMobileFilter(true)}
                >
                    <p>Filter</p>
                    <FaFilter/>
                </div>

                <Dialog fullScreen open={mobileFilter} onClose={() => setMobileFilter(false)}
                        TransitionComponent={Transition}>
                    <div className='shop__mobile-filter--dialog'>
                        <div className='shop__mobile-filter--dialog-header'>
                            <p></p>
                            <h4>FILTER</h4>
                            <FaTimes size={20}
                                     onClick={() => setMobileFilter(false)}
                            />
                        </div>

                        <div className='shop__mobile-filter--dialog-list'>
                            {filters.map(filter =>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<FaAngleDown/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <p>{filter.name}</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            {filter.list.map(l =>
                                                <div className='shop__filter--checkbox-item'>
                                                    <input type="checkbox" id={l} name="scales"/>
                                                    <label htmlFor={l}>{l}</label>
                                                </div>
                                            )}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            )}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<FaAngleDown/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p>Price Range</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{width: '100%'}}>
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
                                </AccordionDetails>
                            </Accordion>
                        </div>


                        <div className='shop__mobile-filter--dialog-button'>
                            <button className='shop__mobile-filter--dialog-button-reset'>
                                Reset
                            </button>
                            <button className='shop__mobile-filter--dialog-button-done'>
                                Done
                            </button>
                        </div>


                    </div>
                </Dialog>
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
                        <div className='shop__product-grid--item'>
                            <div className='shop__product-grid--item-photo'>
                                <img src={product.photoURL}
                                     style={{width: '100%', objectFit: 'contain', height: '100%'}}
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


        </>
    )
}

export default Shop
